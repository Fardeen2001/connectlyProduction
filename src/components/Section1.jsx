import Image from "next/image";
import React from "react";
import section_img from "../app/assets/sec1.png";
import stars from "../app/assets/stars.png";

const Section1 = () => {
  return (
    <>
      <div className="flex flex-col items-center sm:flex-row justify-between py-[5rem]">
        <div>
          <Image
            src={section_img}
            className="w-[30rem] h-[15rem] sm:w-[40rem] sm:h-96"
          />
        </div>

        {/* <!-- content - start --> */}
        <div className="flex flex-col justify-center text-left md:w-[40rem]">
          <p className="font-semibold text-[#656565] md:text-lg xl:text-xl flex items-center gap-2 mb-1">
            <Image width={22} src={stars} /> The Focus
          </p>

          <h1 className="mb-1 text-2xl sm:text-3xl font-medium font-serif text-[#F45044]">
            Post, Peek, Poke, Repeat!
          </h1>

          <p className="mb-5 leading-relaxed text-sm md:text-lg text-gray-500 ">
            Share your thoughts, sneak a peek on others&apos; posts, vibe with
            like-minded souls, and keep the cycle going on!
          </p>

          <p className="leading-relaxed text-sm md:text-lg text-gray-500 ">
            Don&apos;t stress over privacy, we&apos;ve got you covered. Like a
            superhero&apos;s secret identity, your location stays your own
            unless you wish otherwise.
          </p>
        </div>
        {/* <!-- content - end --> */}
      </div>
    </>
  );
};

export default Section1;
