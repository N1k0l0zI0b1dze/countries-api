"use client";

import CountriesPagination from "@/features/components/CountriesPagination";
import SearchAndFilter from "@/features/components/SearchAndFilter/SearchAndFilter";
import { Region } from "@/src/types/filter.types";
import { useState } from "react";

export default function Home() {
  const [selectedRegion, setSelectedRegion] = useState<Region | null>(null);

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col items-center py-8">
      <SearchAndFilter
        selectedRegion={selectedRegion}
        onRegionChange={setSelectedRegion}
      />

      <CountriesPagination selectedRegion={selectedRegion} />
    </main>
  );
}
