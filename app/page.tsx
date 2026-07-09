import CountriesList from "@/features/components/CountriesList";
import CountriesPagination from "@/features/components/CountriesPagination";
import SearchAndFilter from "@/features/components/SearchAndFilter/SearchAndFilter";

export default function Home() {
  return (
    <main className="mx-auto w-full flex flex-col items-center max-w-7xl py-8">
      <SearchAndFilter />
      <CountriesPagination />
      {/* <CountriesList /> */}
    </main>
  );
}
