/**
 * Formats a date string to display the day and month in the users locale format.
 *
 * @param dateString - The date string to be formatted.
 * @returns The formatted date string in the users locale format.
 */
export const formatDateToDayMonth = (dateString: string) => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "2-digit",
  };
  return new Intl.DateTimeFormat(navigator.language, options).format(date);
};
