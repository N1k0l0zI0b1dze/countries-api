import { Region } from "@/src/types/filter.types";
import Filter from "./Filter";
import SearchInput from "./SearchInput";

type SearchAndFilterProps = {
  selectedRegion: Region | null;
  onRegionChange: (region: Region | null) => void;
};

const SearchAndFilter = ({
  selectedRegion,
  onRegionChange,
}: SearchAndFilterProps) => {
  return (
    <section className="flex min-h-12 w-85.75 max-w-full flex-col md:min-h-14 md:w-172 md:flex-row md:justify-between lg:w-7xl">
      <SearchInput />

      <Filter selectedRegion={selectedRegion} onRegionChange={onRegionChange} />
    </section>
  );
};

export default SearchAndFilter;
