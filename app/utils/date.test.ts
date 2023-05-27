import { formatDateToDayMonth } from "@/app/utils/date";

describe("formatDateToDayMonth", () => {
  beforeEach(() => {
    Object.defineProperty(window.navigator, "language", {
      value: "en-US",
      configurable: true,
    });
  });

  it('should format the date string to "MM/26" format', () => {
    const dateString = "2023-12-26";
    const formattedDate = formatDateToDayMonth(dateString);
    expect(formattedDate).toBe("12/26");
  });

  it("should handle leading zeros in the day and month", () => {
    const dateString = "2023-01-05";
    const formattedDate = formatDateToDayMonth(dateString);
    expect(formattedDate).toBe("01/05");
  });

  it("should handle single-digit day and month values", () => {
    const dateString = "2023-12-8";
    const formattedDate = formatDateToDayMonth(dateString);
    expect(formattedDate).toBe("12/08");
  });

  it("formats the date to a given different locale (de)", () => {
    Object.defineProperty(window.navigator, "language", {
      value: "de",
      configurable: true,
    });

    const dateString = "2023-12-26";
    const formattedDate = formatDateToDayMonth(dateString);
    expect(formattedDate).toBe("26.12.");
  });
});
