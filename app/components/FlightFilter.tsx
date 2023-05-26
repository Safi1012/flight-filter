"use client";

import { Card, CardBody, Center, GridItem, SimpleGrid } from "@chakra-ui/react";
import FormControlSelect from "./FormControlSelect";

interface FlightFilterProps {
  priceOffers: PriceOffer[];
  onOriginChange: (value: string) => void;
  onDestinationChange: (value: string) => void;
}

export default function FlightFilter({
  priceOffers,
  onOriginChange,
  onDestinationChange,
}: FlightFilterProps) {
  const origins = [
    ...new Set(priceOffers.map((priceOffer) => priceOffer.origin)),
  ];
  const destinations = [
    ...new Set(priceOffers.map((priceOffer) => priceOffer.destination)),
  ];

  return (
    <Card mb={8}>
      <CardBody>
        <form>
          <SimpleGrid
            columns={[1, 1, 2, 2]}
            columnGap={4}
            rowGap={4}
            alignItems={"flex-start"}
            w={"full"}
          >
            <GridItem colSpan={1} alignItems={"flex-start"}>
              <Center>
                <FormControlSelect
                  label="Filter by origin"
                  placeholder="Select origin"
                  options={origins}
                  onChange={(value) => onOriginChange(value)}
                ></FormControlSelect>
              </Center>
            </GridItem>

            <GridItem colSpan={1} alignItems={"flex-start"}>
              <Center>
                <FormControlSelect
                  label="Filter by destination"
                  placeholder="Select destination"
                  options={destinations}
                  onChange={(value) => onDestinationChange(value)}
                ></FormControlSelect>
              </Center>
            </GridItem>
          </SimpleGrid>
        </form>
      </CardBody>
    </Card>
  );
}
