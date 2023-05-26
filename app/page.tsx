import FlightSearch from "./components/FlightSearch";
import getPriceOffer from "@/app/lib/getPriceOffer";

export default async function FlightsPage() {
  const priceOffers = await getPriceOffer<PriceOffer[]>();

  return (
    <main>
      <FlightSearch priceOffers={priceOffers}></FlightSearch>
    </main>
  );
}
