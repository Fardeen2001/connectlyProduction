import React from "react";
import stars from "../app/assets/stars.png";
import section from "../app/assets/sec3.png";
import bullet from "../app/assets/bullet.png";
import Image from "next/image";
const Section3 = () => {
  return (
    <div className="bg-white py-6">
      <section className="flex flex-col justify-between gap-3 sm:gap-10 md:gap-6 lg:flex-row px-4 md:px-8 ">
        {/* <!-- content - start --> */}
        <div className="flex flex-col justify-center text-left lg:py-12 lg:text-left xl:py-24">
          <p className="mb-2 font-semibold text-[#656565] text-sm md:text-lg xl:text-xl flex items-center sm:justify-start gap-2">
            <Image width={22} src={stars} /> Privacy
          </p>

          <h1 className="mb-1 text-3xl font-medium font-serif text-[#F45044] md:mb-3">
            We&apos;ve Got Your Back!
          </h1>

          <p className="mb-5 text-xs leading-relaxed text-gray-500 lg:w-4/5 xl:text-lg">
            Don&apos;t stress over privacy, we&apos;ve got you covered. Like a
            superhero&apos;s secret identity, your location stays your own
            unless you wish otherwise.
          </p>

          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-2 text-xs sm:text-base">
              <Image width={20} src={bullet} /> Vibe with your perfect match
              from our amazing singles.
            </li>
            <li className="flex items-center gap-2 text-xs sm:text-base">
              <Image width={20} src={bullet} /> Express yourself and let your
              vibes attract your tribe.
            </li>
            <li className="flex items-center gap-2 text-xs sm:text-base">
              <Image width={20} src={bullet} /> Your location and interests are
              as private as you want.
            </li>
          </ul>
        </div>
        {/* <!-- content - end --> */}

        <div>
          <Image src={section} />
        </div>
      </section>
    </div>
  );
};

export default Section3;
