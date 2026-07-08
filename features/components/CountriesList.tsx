"use client";

import { useQuery } from "@tanstack/react-query";
import { getCountries } from "@/src/api/countriesApi";
import Image from "next/image";

const CountriesList = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["countries"],
    queryFn: getCountries,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <div className="w-auto h-auto grid grid-cols-4 gap-18 mt-18">
      {data?.map((country) => (
        <div
          className="flex h-84 w-66 flex-col overflow-hidden rounded-[5px] border border-[#e5e5e5] bg-white shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)]"
          key={country.alpha3Code}
        >
          <div className="relative h-40 w-full overflow-hidden border-b border-[#e5e5e5] bg-white shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)]">
            <Image
              src={country.flags.svg}
              alt={country.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="mt-5.5 ml-6">
            <h2 className="text-[18px] font-extrabold mb-4">{country.name}</h2>
            <p className="text-[14px]">
              <span className="font-medium">Population:</span>
              {country.population}
            </p>
            <p className="text-[14px]">
              <span className="font-medium">Region:</span>
              {country.region}
            </p>
            <p>
              <span className="font-medium">Capital:</span>
              {country.capital}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountriesList;
