"use client";

import CountriesPagination from "@/features/components/CountriesPagination";
import SearchAndFilter from "@/features/components/SearchAndFilter/SearchAndFilter";
import { Region } from "@/src/types/filter.types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const regionFromUrl = searchParams.get("region");

  const [selectedRegion, setSelectedRegion] = useState<Region | null>(
    Object.values(Region).includes(regionFromUrl as Region)
      ? (regionFromUrl as Region)
      : null,
  );

  useEffect(() => {
    if (Object.values(Region).includes(regionFromUrl as Region)) {
      setSelectedRegion(regionFromUrl as Region);
    } else {
      setSelectedRegion(null);
    }
  }, [regionFromUrl]);

  const handleRegionChange = (region: Region | null) => {
    setSelectedRegion(region);

    const params = new URLSearchParams(searchParams.toString());

    if (region) {
      params.set("region", region);
    } else {
      params.delete("region");
    }

    const queryString = params.toString();

    router.push(queryString ? `${pathname}?${queryString}` : pathname);
  };

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col items-center py-8">
      <SearchAndFilter
        selectedRegion={selectedRegion}
        onRegionChange={handleRegionChange}
      />

      <CountriesPagination selectedRegion={selectedRegion} />
    </main>
  );
}
