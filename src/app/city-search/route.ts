import { NextResponse } from "next/server";
import Papa from "papaparse";

const citiesUrl = "https://cdn.weatherbit.io/static/exports/cities_20000.csv";

export async function GET() {
  try {
    const response = await fetch(citiesUrl);
    const text = await response.text();

    const parsed = Papa.parse(text, { header: true });

    return NextResponse.json(parsed.data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch city data" },
      { status: 500 }
    );
  }
}
