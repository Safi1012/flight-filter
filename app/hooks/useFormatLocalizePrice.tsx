import { useEffect, useState } from "react";

/**
 * Custom React hook to format and localize a price (amount + currency).
 * This hook makes sure that we don't access "window.navigator" on the server side
 *
 * @param amount - The price amount to be formatted.
 * @param currency - The currency code for formatting.
 * @returns The formatted and localized price string.
 */
export const useFormatLocalizePrice = ({
  amount,
  currency,
}: {
  amount: number;
  currency: string;
}) => {
  const [formattedLocalizedPrice, setFormattedLocalizedPrice] = useState("");

  useEffect(() => {
    if (typeof navigator !== "undefined") {
      const formattedLocalizedPrice = new Intl.NumberFormat(
        navigator.language,
        {
          style: "currency",
          currency: currency,
          maximumFractionDigits: 0,
        }
      ).format(amount);

      setFormattedLocalizedPrice(formattedLocalizedPrice);
    }
  }, [amount, currency]);

  return formattedLocalizedPrice;
};
