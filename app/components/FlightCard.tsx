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
import { useFormatDayMonth } from "@/app/hooks/useFormatDateDayMonth";
import { useFormatLocalizePrice } from "@/app/hooks/useFormatLocalizePrice";

export const FlightCard = ({
  departureDate,
  destination,
  origin,
  price,
  returnDate,
  seatAvailability,
}: PriceOffer) => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const formattedLocalizedPrice = useFormatLocalizePrice(price);
  const formattedDepartureDate = useFormatDayMonth(departureDate);
  const formattedReturnDate = useFormatDayMonth(returnDate);

  return (
    <Card mb={4}>
      <CardBody>
        <Flex justifyContent={"space-between"}>
          <Flex>
            <Box textAlign={"center"}>
              <Text fontSize={"large"} as="b" color={"pink.700"}>
                {origin}
              </Text>
              <Text fontSize={"small"}>{formattedDepartureDate}</Text>
            </Box>
            <Center>
              <Icon as={TbArrowMoveRight} w={10} h={6} />
            </Center>
            <Box textAlign={"center"}>
              <Text fontSize={"large"} as="b" color={"pink.700"}>
                {destination}
              </Text>
              <Text fontSize={"small"}>{formattedReturnDate}</Text>
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
