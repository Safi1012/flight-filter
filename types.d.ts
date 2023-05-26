interface PriceOffer {
  origin: string;
  destination: string;
  departureDate: string;
  returnDate: string;
  seatAvailability: number;
  price: {
    amount: number;
    currency: string;
  };
  offerType: "amadeusBestPrice" | "ExactMatch";
  uuid: string;
}
