import { getCountries } from "@/src/api/countriesApi";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type CountryPageProps = {
  params: Promise<{
    alpha3Code: string;
  }>;
};

const BackIcon = () => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 23 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        d="M6.93514 3.97748L8.32216 5.3033L3.745 9.67852L21.2214 9.67852L21.2214 11.5535L3.745 11.5535L8.32216 15.9287L6.93514 17.2546L-1.52588e-05 10.616L6.93514 3.97748Z"
        fill="currentColor"
      />
    </svg>
  );
};

const CountryPage = async ({ params }: CountryPageProps) => {
  const { alpha3Code } = await params;

  const countries = await getCountries();

  const country = countries.find(
    (country) => country.alpha3Code === alpha3Code,
  );

  if (!country) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-10 md:px-8 lg:px-0 lg:py-20">
      <div className="flex h-202.5 w-full flex-col bg-red-500 md:h-210 lg:h-130.25">
        <Link
          href="/"
          className="flex h-8 w-26 items-center justify-center gap-2 rounded-[5px] border border-[#e5e5e5] bg-white text-[#111517] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0px_8px_24px_0px_rgba(0,0,0,0.12)] dark:border-transparent dark:bg-[#2b3945] dark:text-white dark:shadow-[0px_4px_16px_0px_rgba(0,0,0,0.2)] dark:hover:shadow-[0px_8px_24px_0px_rgba(0,0,0,0.35)] md:h-10 md:w-34"
        >
          <BackIcon />
          Back
        </Link>
        <div className="mt-16 flex w-full flex-col bg-white">
          <div className="w-full max-w-142.5 overflow-hidden rounded-lg">
            <div className="relative aspect-570/408 w-full">
              <Image
                src={country.flags.svg}
                alt={`${country.name} flag`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CountryPage;
