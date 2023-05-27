import { NextResponse } from "next/server";
import data from "@/app/api/price-offer/data.json";

export async function GET() {
  return NextResponse.json(data);
}
