import Image from "next/image";

const SearchInput = () => {
  return (
    <div className="flex h-12 w-full items-center gap-4 rounded-[5px] bg-white px-6 shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] dark:bg-[#2b3945] md:h-14 md:w-120 md:gap-6 md:px-8">
      <Image
        src="/assets/images/search/search.svg"
        alt=""
        width={18}
        height={18}
        aria-hidden="true"
        className="shrink-0"
      />

      <input
        type="text"
        placeholder="Search for a country..."
        className="w-full bg-transparent text-[14px] text-[#111517] outline-none placeholder:text-[#848484] dark:text-white dark:placeholder:text-white/70"
      />
    </div>
  );
};

export default SearchInput;
