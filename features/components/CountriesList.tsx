"use client";

import { useQuery } from "@tanstack/react-query";
import { getCountries } from "@/src/api/countriesApi";

const CountriesList = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["countries"],
    queryFn: getCountries,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <div>
      {data?.map((country) => (
        <div key={country.alpha3Code}>
          <h2>{country.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default CountriesList;
