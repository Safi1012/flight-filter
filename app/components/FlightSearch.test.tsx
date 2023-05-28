import { render, screen, fireEvent, within } from "@testing-library/react";
import "@testing-library/jest-dom";

import { NextIntlProvider } from "next-intl";
import FlightSearch from "@/app/components/FlightSearch";
import data from "@/app/api/price-offer/data.json";
import english from "../../messages/en.json";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/",
      locale: "en",
      locales: ["en", "de"],
    };
  },
}));

describe("FlightSearch", () => {
  const priceOffers: PriceOffer[] = data;

  it("should filter flights by origin and destination", async () => {
    let flightCards;

    render(
      <NextIntlProvider locale={"en"} messages={english}>
        <FlightSearch priceOffers={priceOffers} />
      </NextIntlProvider>
    );

    // Initial render should display all flights
    flightCards = screen.getAllByTestId("flight-card");
    expect(flightCards.length).toBe(priceOffers.length);

    // Filter by origin
    const selects = await screen.findAllByRole("combobox");

    fireEvent.change(selects[0], {
      target: { value: "JFK" },
    });

    flightCards = screen.getAllByTestId("flight-card");
    expect(flightCards.length).toBe(3); // there are only only flight from JFK

    // Filter by destination
    fireEvent.change(selects[1], {
      target: { value: "BER" },
    });

    flightCards = screen.getAllByTestId("flight-card");
    expect(flightCards.length).toBe(1); // there is only one flight from JFK -> BER

    // Reset filters
    fireEvent.change(selects[0], {
      target: { value: "" },
    });
    fireEvent.change(selects[1], {
      target: { value: "" },
    });

    flightCards = screen.getAllByTestId("flight-card");
    expect(flightCards.length).toBe(priceOffers.length);
  });

  it("should display 'no flights available' message when no flights match the filters", async () => {
    render(
      <NextIntlProvider locale={"en"} messages={english}>
        <FlightSearch priceOffers={priceOffers} />
      </NextIntlProvider>
    );

    const selects = await screen.findAllByRole("combobox");

    fireEvent.change(selects[0], {
      target: { value: "LHR" },
    });
    fireEvent.change(selects[1], {
      target: { value: "CCS" },
    });

    expect(
      within(selects[0]).getByRole<HTMLOptionElement>("option", { name: "LHR" })
        .selected
    ).toBe(true);
    expect(
      within(selects[1]).getByRole<HTMLOptionElement>("option", { name: "CCS" })
        .selected
    ).toBe(true);

    expect(
      screen.getByText(
        "Sorry, currently there are no flights available from LHR to CCS."
      )
    ).toBeInTheDocument();
  });
});
