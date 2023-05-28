"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Card, CardBody, Heading, Text } from "@chakra-ui/react";
import { FlightCard } from "@/app/components/FlightCard";
import FlightFilter from "@/app/components/FlightFilter";

interface FlightSearchProps {
  priceOffers: PriceOffer[];
}

export default function FlightSearch({ priceOffers }: FlightSearchProps) {
  const [filterByOrigin, setFilterByOrigin] = useState("");
  const [filterByDestination, setFilterByDestination] = useState("");
  const t = useTranslations("flight_search");

  const filteredPriceOffers = priceOffers.filter(
    (priceOffer) =>
      (filterByOrigin !== "" ? filterByOrigin === priceOffer.origin : true) &&
      (filterByDestination !== ""
        ? filterByDestination === priceOffer.destination
        : true)
  );

  return (
    <>
      <Heading fontSize={22} mt={28} mb={4}>
        {t("headline.filters")}
      </Heading>
      <FlightFilter
        priceOffers={priceOffers}
        onOriginChange={(origin) => setFilterByOrigin(origin)}
        onDestinationChange={(destination) =>
          setFilterByDestination(destination)
        }
      ></FlightFilter>

      <Heading fontSize={22} mt={[8, 12]} mb={4}>
        {t("headline.results")}
      </Heading>
      {filteredPriceOffers.map((priceOffer) => (
        <FlightCard key={priceOffer.uuid} {...priceOffer}></FlightCard>
      ))}

      {filteredPriceOffers.length === 0 && (
        <Card mb={4}>
          <CardBody>
            <Text fontSize={"large"} as="b" color={"pink.700"}>
              {t("results.no_match", { filterByOrigin, filterByDestination })}
            </Text>
          </CardBody>
        </Card>
      )}
    </>
  );
}
