"use client";

import {
  Card,
  CardBody,
  FormControl,
  FormLabel,
  Heading,
  Select,
} from "@chakra-ui/react";
import { FlightCard } from "./FlightCard";

import { RiArrowDownSFill } from "react-icons/ri";

interface FlightSearchProps {
  priceOffers: PriceOffer[];
}

export default function FlightSearch({ priceOffers }: FlightSearchProps) {
  return (
    <>
      <Heading fontSize={22} mt={16} mb={4}>
        Filters
      </Heading>

      <Card mb={8}>
        <CardBody>
          <form>
            <FormControl>
              <FormLabel fontWeight={800} fontSize={16}>
                Filter by origin
              </FormLabel>
              <Select
                bg={"white"}
                icon={<RiArrowDownSFill />}
                placeholder="Select origin"
                borderColor={"gray.500"}
                fontSize={14}
              >
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </FormControl>

            <FormControl mt={6}>
              <FormLabel fontWeight={800} fontSize={16}>
                Filter by destination
              </FormLabel>
              <Select
                bg={"white"}
                icon={<RiArrowDownSFill />}
                placeholder="Select origin"
                borderColor={"gray.500"}
                fontSize={14}
              >
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </FormControl>
          </form>
        </CardBody>
      </Card>

      <Heading fontSize={22} mt={16} mb={4}>
        Results
      </Heading>

      {priceOffers.map((priceOffer) => (
        <FlightCard key={priceOffer.uuid} {...priceOffer}></FlightCard>
      ))}
    </>
  );
}
