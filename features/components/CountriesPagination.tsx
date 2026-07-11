"use client";

import { getCountries } from "@/src/api/countriesApi";
import { Region } from "@/src/types/filter.types";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useEffect, useState } from "react";

type CountriesPaginationProps = {
  selectedRegion: Region | null;
};

const CountriesPagination = ({ selectedRegion }: CountriesPaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading, error } = useQuery({
    queryKey: ["countries"],
    queryFn: getCountries,
  });

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedRegion]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  const itemsPerPage = 8;

  const filteredCountries =
    selectedRegion === null
      ? data
      : data?.filter((country) => country.region === selectedRegion);

  const totalPages = Math.max(
    1,
    Math.ceil((filteredCountries?.length ?? 0) / itemsPerPage),
  );

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;

  const currentItems = filteredCountries?.slice(startIndex, endIndex);

  return (
    <section className="mt-20 flex h-auto w-66.25 flex-col items-center md:mt-26 md:w-150 lg:mt-10 lg:w-318">
      <div className="grid w-full grid-cols-1 place-items-center gap-10 md:grid-cols-2 md:gap-18 lg:grid-cols-4">
        {currentItems && currentItems.length > 0 ? (
          currentItems.map((country) => (
            <div
              className="flex h-84 w-66 cursor-pointer flex-col overflow-hidden rounded-[5px] border border-[#e5e5e5] bg-white shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0px_8px_24px_0px_rgba(0,0,0,0.12)] dark:border-transparent dark:bg-[#2b3945] dark:text-white dark:shadow-[0px_4px_16px_0px_rgba(0,0,0,0.2)] dark:hover:shadow-[0px_8px_24px_0px_rgba(0,0,0,0.35)]"
              key={country.alpha3Code}
            >
              <div className="relative h-40 w-full overflow-hidden border-b border-[#e5e5e5] bg-white dark:border-transparent dark:bg-[#2b3945]">
                <Image
                  src={country.flags.svg}
                  alt={country.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="mt-5.5 ml-6">
                <h2 className="mb-4 text-[18px] font-extrabold">
                  {country.name}
                </h2>

                <p className="text-[14px]">
                  <span className="font-medium">Population:</span>{" "}
                  {country.population}
                </p>

                <p className="text-[14px]">
                  <span className="font-medium">Region:</span> {country.region}
                </p>

                <p>
                  <span className="font-medium">Capital:</span>{" "}
                  {country.capital}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-[16px] font-semibold text-[#111517] dark:text-white">
            No countries found.
          </p>
        )}
      </div>

      <div className="mt-10 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="rounded-[5px] border border-[#e5e5e5] bg-white px-4 py-2 text-[14px] font-semibold text-[#111517] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#f8f8f8] hover:shadow-[0px_8px_24px_0px_rgba(0,0,0,0.12)] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0 disabled:hover:bg-white disabled:hover:shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] dark:border-transparent dark:bg-[#2b3945] dark:text-white dark:hover:bg-[#334756] dark:hover:shadow-[0px_8px_24px_0px_rgba(0,0,0,0.35)] dark:disabled:hover:bg-[#2b3945]"
        >
          Previous
        </button>

        <span className="text-[14px] font-semibold text-[#111517] dark:text-white">
          Page {currentPage} of {totalPages}
        </span>

        <button
          type="button"
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="rounded-[5px] border border-[#e5e5e5] bg-white px-4 py-2 text-[14px] font-semibold text-[#111517] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#f8f8f8] hover:shadow-[0px_8px_24px_0px_rgba(0,0,0,0.12)] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0 disabled:hover:bg-white disabled:hover:shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] dark:border-transparent dark:bg-[#2b3945] dark:text-white dark:hover:bg-[#334756] dark:hover:shadow-[0px_8px_24px_0px_rgba(0,0,0,0.35)] dark:disabled:hover:bg-[#2b3945]"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default CountriesPagination;
