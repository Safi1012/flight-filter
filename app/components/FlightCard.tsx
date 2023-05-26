"use client";

import {
  Card,
  CardBody,
  Text,
  Flex,
  Box,
  Icon,
  Center,
  Badge,
  useMediaQuery,
} from "@chakra-ui/react";
import { TbArrowMoveRight } from "react-icons/tb";
import { formatDateToDayMonth } from "@/app/utils/date";

export const FlightCard = ({
  departureDate,
  destination,
  origin,
  price,
  returnDate,
  seatAvailability,
}: PriceOffer) => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const formattedLocalizedPrice = new Intl.NumberFormat(navigator.language, {
    style: "currency",
    currency: price.currency,
    maximumFractionDigits: 0,
  }).format(price.amount);

  return (
    <Card mb={4}>
      <CardBody>
        <Flex justifyContent={"space-between"}>
          <Flex>
            <Box textAlign={"center"}>
              <Text fontSize={"large"} as="b" color={"pink.700"}>
                {origin}
              </Text>
              <Text fontSize={"small"}>
                {formatDateToDayMonth(departureDate)}
              </Text>
            </Box>
            <Center>
              <Icon as={TbArrowMoveRight} w={10} h={6} />
            </Center>
            <Box textAlign={"center"}>
              <Text fontSize={"large"} as="b" color={"pink.700"}>
                {destination}
              </Text>
              <Text fontSize={"small"}>{formatDateToDayMonth(returnDate)}</Text>
            </Box>
          </Flex>

          {!isMobile && seatAvailability < 10 && (
            <Center>
              <Badge
                variant="outline"
                colorScheme="yellow"
                textTransform="lowercase"
              >
                only {seatAvailability} seats available
              </Badge>
            </Center>
          )}
          <Center>
            <Text fontSize={"large"} as="b">
              {formattedLocalizedPrice}
            </Text>
          </Center>
        </Flex>
      </CardBody>

      {isMobile && seatAvailability < 10 && (
        <CardBody h={0} p={0}>
          <Text
            p={1}
            fontSize={"x-small"}
            textAlign={"center"}
            color={"white"}
            bg={"tomato"}
            fontWeight={"bold"}
            borderBottomLeftRadius={3}
            borderBottomRightRadius={3}
          >
            only {seatAvailability} seats available
          </Text>
        </CardBody>
      )}
    </Card>
  );
};
