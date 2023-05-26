/**
 * Retrieves a price offer from the API endpoint (/api/price-offer).
 *
 * @returns A Promise that resolves to the fetched price offer data.
 * @throws An error if the data fetching fails or the response is not successful.
 */
export default async function getPriceOffer<T>(): Promise<T> {
  const res = await fetch("http://localhost:3000/api/price-offer", {
    // makes sure the user always gets the newest version (it's not really needed with mock data).
    // In the real world, we want the user to always get the newest data from the original API "promotions/Price_Offer".
    cache: "no-store",
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
