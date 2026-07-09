import Filter from "./Filter";
import SearchInput from "./SearchInput";

const SearchAndFilter = () => {
  return (
    <section className="flex min-h-12 w-85.75 max-w-full flex-col md:min-h-14 md:w-172 md:flex-row md:justify-between lg:w-7xl">
      <SearchInput />
      <Filter />
    </section>
  );
};

export default SearchAndFilter;
