import React from "react";
import stars from "../app/assets/stars.png";
import vibes1 from "../app/assets/vibes1.png";
import vibes2 from "../app/assets/vibes2.png";
import vibes3 from "../app/assets/vibes3.png";
import vibes4 from "../app/assets/vibes4.png";
import Image from "next/image";

const Section2 = () => {
  return (
    <>
      <div className="">
        <div className="flex flex-col items-center">
          <p className="font-semibold text-sm text-[#656565] md:text-lg xl:text-xl flex items-center gap-2 mb-1 text-center">
            <Image width={22} src={stars} /> The Mission
          </p>

          <h1 className="mb-1 text-2xl sm:text-3xl font-medium font-serif text-[#F45044]">
            Find Your Vibe
          </h1>
        </div>

        {/* <!-- component --> */}
        <section className="my-5">
          <div className="relative mx-auto h-full sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
            <div className="mx-auto max-w-7xl relative">
              <div className="grid grid-cols-1 gap-y-10 gap-x-5 sm:grid-cols-2">
                <div className="bg-white shadow-md shadow-[#EC0D621F] hover:shadow-xl hover:shadow-[#EC0D621F]">
                  <div className="flex justify-between relative">
                    <div className="p-5 flex flex-col w-2/3">
                      <h1 className="text-sm sm:text-2xl font-semibold mb-5">
                        Trending Vibes
                      </h1>
                      <p className="text-xs sm:text-lg">
                        Discover what’s currently sweeping across the platform
                        and hop onto the trend!
                      </p>
                    </div>

                    <Image
                      src={vibes1}
                      className="h-20 w-20 sm:h-32 absolute bottom-0 right-2 sm:w-32"
                    />
                  </div>
                </div>
                <div className="bg-white shadow-md shadow-[#EC0D621F] hover:shadow-xl hover:shadow-[#EC0D621F]">
                  <div className="flex justify-between relative">
                    <div className="p-5 flex flex-col w-2/3">
                      <h1 className="text-sm sm:text-2xl font-semibold mb-5">
                        Friends & Super Vibe
                      </h1>
                      <p className="text-xs sm:text-lg">
                        Find friends and spark connections that really hit the
                        vibe.
                      </p>
                    </div>

                    <Image
                      src={vibes2}
                      className="h-20 w-20 sm:h-32 absolute bottom-0 right-2 sm:w-32"
                    />
                  </div>
                </div>
                <div className="bg-white shadow-md shadow-[#EC0D621F] hover:shadow-xl hover:shadow-[#EC0D621F]">
                  <div className="flex justify-between relative">
                    <div className="p-5 flex flex-col w-2/3">
                      <h1 className="text-sm sm:text-2xl font-semibold mb-5">
                        User Posts Feed
                      </h1>
                      <p className="text-xs sm:text-lg">
                        Stay up-to-date with your friends’ daily escapades
                        through visually appealing post cards.
                      </p>
                    </div>

                    <Image
                      src={vibes3}
                      className="h-20 w-20 sm:h-32 absolute bottom-0 right-2 sm:w-32"
                    />
                  </div>
                </div>
                <div className="bg-white shadow-md shadow-[#EC0D621F] hover:shadow-xl hover:shadow-[#EC0D621F]">
                  <div className="flex justify-between relative">
                    <div className="p-5 flex flex-col w-2/3">
                      <h1 className="text-sm sm:text-2xl font-semibold mb-5">
                        Customizable Profiles
                      </h1>
                      <p className="text-xs sm:text-lg">
                        Your profile is a chance to show the world who you are.
                        Personalize it to suit your style!
                      </p>
                    </div>

                    <Image
                      src={vibes4}
                      className="h-20 w-20 sm:h-32 absolute bottom-0 right-2 sm:w-32"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Section2;
