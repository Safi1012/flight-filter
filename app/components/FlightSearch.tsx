"use client";

import { useState } from "react";
import { Card, CardBody, Heading, Text } from "@chakra-ui/react";
import { FlightCard } from "@/app/components/FlightCard";
import FlightFilter from "@/app/components/FlightFilter";

interface FlightSearchProps {
  priceOffers: PriceOffer[];
}

export default function FlightSearch({ priceOffers }: FlightSearchProps) {
  const [filterByOrigin, setFilterByOrigin] = useState("");
  const [filterByDestination, setFilterByDestination] = useState("");

  const filteredPriceOffers = priceOffers.filter(
    (priceOffer) =>
      (filterByOrigin !== "" ? filterByOrigin === priceOffer.origin : true) &&
      (filterByDestination !== ""
        ? filterByDestination === priceOffer.destination
        : true)
  );

  return (
    <>
      <Heading fontSize={22} mt={16} mb={4}>
        Filters
      </Heading>
      <FlightFilter
        priceOffers={priceOffers}
        onOriginChange={(origin) => setFilterByOrigin(origin)}
        onDestinationChange={(destination) =>
          setFilterByDestination(destination)
        }
      ></FlightFilter>

      <Heading fontSize={22} mt={16} mb={4}>
        Results
      </Heading>
      {filteredPriceOffers.map((priceOffer) => (
        <FlightCard key={priceOffer.uuid} {...priceOffer}></FlightCard>
      ))}

      {filteredPriceOffers.length === 0 && (
        <Card mb={4}>
          <CardBody>
            <Text fontSize={"large"} as="b" color={"pink.700"}>
              Sorry, currently there are no flights available from{" "}
              {filterByOrigin} to {filterByDestination}.
            </Text>
          </CardBody>
        </Card>
      )}
    </>
  );
}
