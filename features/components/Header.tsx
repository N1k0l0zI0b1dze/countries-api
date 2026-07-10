"use client";

import Image from "next/image";
import { useTheme } from "next-themes";

const Header = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  const handleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <header className="sticky top-0 z-50 flex h-20 w-full items-center justify-center bg-white shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] dark:bg-[#2b3945] md:h-24">
      <div className="flex w-full max-w-7xl items-center justify-between px-4 md:px-8 lg:px-0">
        <h1 className="text-[18px] font-extrabold leading-none text-[#111517] dark:text-white md:text-[22px] lg:text-[24px]">
          Where in the world?
        </h1>

        <button type="button" onClick={handleTheme}>
          {isDark ? (
            <div className="flex items-center gap-2 whitespace-nowrap">
              <Image
                src="/assets/images/header/LightMode.svg"
                alt=""
                width={15}
                height={15}
                aria-hidden="true"
              />
              <p className="text-[14px] text-white md:text-[16px]">
                Light Mode
              </p>
            </div>
          ) : (
            <div className="flex items-center gap-2 whitespace-nowrap">
              <Image
                src="/assets/images/header/DarkMode.svg"
                alt=""
                width={15}
                height={14}
                aria-hidden="true"
              />
              <p className="text-[14px] text-[#111517] dark:text-white md:text-[16px]">
                Dark Mode
              </p>
            </div>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
