/**
 * Formats a date string to display the day and month in the "DD-MM" format.
 *
 * @param dateString - The date string to be formatted.
 * @returns The formatted date string in "DD-MM" format.
 */
export const formatDateToDayMonth = (dateString: string) => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "2-digit",
  };
  return new Intl.DateTimeFormat("en", options).format(date);
};
