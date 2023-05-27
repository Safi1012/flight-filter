import { renderHook } from "@testing-library/react";
import { useFormatLocalizePrice } from "@/app/hooks/useFormatLocalizePrice";

describe("useFormatLocalizePrice", () => {
  it("should format and localize the price correctly", () => {
    const { result } = renderHook(() =>
      useFormatLocalizePrice({
        amount: 12345.6789,
        currency: "USD",
      })
    );

    expect(result.current).toBe("$12,346");
  });

  it("should update the formatted price when amount or currency changes", () => {
    const { result, rerender } = renderHook(
      ({ amount, currency }: { amount: number; currency: string }) =>
        useFormatLocalizePrice({
          amount,
          currency,
        }),
      {
        initialProps: {
          amount: 12345.6789,
          currency: "USD",
        },
      }
    );

    expect(result.current).toBe("$12,346");

    rerender({
      amount: 9876.54321,
      currency: "EUR",
    });

    expect(result.current).toBe("€9,877");
  });

  it("should return an empty string if navigator is undefined", () => {
    Object.defineProperty(global, "navigator", { value: undefined });

    const { result } = renderHook(() =>
      useFormatLocalizePrice({
        amount: 12345.6789,
        currency: "USD",
      })
    );

    expect(result.current).toBe("");
  });
});
