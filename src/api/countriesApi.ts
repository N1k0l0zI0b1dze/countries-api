import countriesData from "../data/data.countries.json";
import { type Country } from "../types/country.types";

export const getCountries = async (): Promise<Country[]> => {
  return countriesData as Country[];
};
