import { useEffect, useState } from "react";
import { formatDateToDayMonth } from "@/app/utils/date";

/**
 * Custom React hook that formats a given date string to a day and month format based on the user's locale.
 * This hook makes sure that we don't access "window.navigator" on the server side
 *
 * @param date - The date string to be formatted.
 * @returns The formatted date in the day and month format.
 */
export const useFormatDayMonth = (date: string) => {
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    if (typeof navigator !== "undefined") {
      setFormattedDate(formatDateToDayMonth(date));
    }
  }, [date]);

  return formattedDate;
};
