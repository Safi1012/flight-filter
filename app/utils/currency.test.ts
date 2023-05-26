import { getCurrencySymbol } from "./currency";

describe("getCurrencySymbol", () => {
  it("should return the currency symbol when available", () => {
    const currencyCode = "EUR";
    const currencySymbol = getCurrencySymbol(currencyCode);
    expect(currencySymbol).toBe("€");
  });

  it("should return the currency code when symbol is not available", () => {
    const currencyCode = "XYZ";
    const currencySymbol = getCurrencySymbol(currencyCode);
    expect(currencySymbol).toBe("XYZ");
  });

  it("should return an empty string when currencyCode argument is empty", () => {
    const currencyCode = "";
    const currencySymbol = getCurrencySymbol(currencyCode);
    expect(currencySymbol).toBe("");
  });
});
