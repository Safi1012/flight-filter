"use client";

import { FlightCard } from "./FlightCard";

interface FlightSearchProps {
  priceOffers: PriceOffer[];
}

export default function FlightSearch({ priceOffers }: FlightSearchProps) {
  return (
    <>
      {priceOffers.map((priceOffer) => (
        <FlightCard key={priceOffer.uuid} {...priceOffer}></FlightCard>
      ))}
    </>
  );
}
