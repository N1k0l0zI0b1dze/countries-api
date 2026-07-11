"use client";

import { Region, regionOptions } from "@/src/types/filter.types";
import Image from "next/image";
import { useState } from "react";

type FilterProps = {
  selectedRegion: Region | null;
  onRegionChange: (region: Region | null) => void;
};

const Filter = ({ selectedRegion, onRegionChange }: FilterProps) => {
  const [filter, setFilter] = useState(false);

  const handleFilter = () => {
    setFilter((prev) => !prev);
  };

  const handleRegionClick = (region: Region) => {
    onRegionChange(region);
    setFilter(false);
  };

  return (
    <div className="relative mt-10 md:mt-0 md:ml-auto">
      <button
        type="button"
        onClick={handleFilter}
        className="flex h-12 w-50 cursor-pointer items-center justify-between gap-4 rounded-[5px] bg-white px-6 text-[#111517] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] dark:bg-[#2b3945] dark:text-white md:h-14"
      >
        {selectedRegion ?? "Filter by Region"}

        <Image
          src="/assets/images/filter/expand-more.svg"
          alt=""
          width={9}
          height={5.25}
          aria-hidden="true"
          className="block dark:hidden"
        />

        <Image
          src="/assets/images/filter/expand-more-white.svg"
          alt=""
          width={9}
          height={5.25}
          aria-hidden="true"
          className="hidden dark:block"
        />
      </button>

      {filter && (
        <div className="absolute left-0 top-14 z-50 flex w-50 flex-col gap-2 rounded-[5px] bg-white p-4 text-[#111517] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] dark:bg-[#2b3945] dark:text-white md:left-auto md:right-0 md:top-16">
          <button
            type="button"
            onClick={() => {
              onRegionChange(null);
              setFilter(false);
            }}
            className="text-left text-[14px] hover:text-gray-300"
          >
            All
          </button>

          {regionOptions.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => handleRegionClick(option.value)}
              className="text-left text-[14px] hover:text-gray-300"
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Filter;
