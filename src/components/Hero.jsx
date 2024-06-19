import Image from "next/image";
import React from "react";
import hero from "../app/assets/hero.png";
import stars from "../app/assets/stars.png";
import logo from "../app/assets/logo.png";
import button from "../app/assets/button.png";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <div className="bg-white py-6 sm:pb-8 lg:pb-12">
        <section className="flex flex-col justify-between gap-3 sm:gap-10 md:gap-6 lg:flex-row px-4 md:px-8">
          {/* <!-- content - start --> */}
          <div className="flex flex-col justify-center text-center lg:py-12 lg:text-left xl:py-24">
            <p className="mb-2 font-semibold text-[#656565] md:text-lg xl:text-xl flex items-center justify-center sm:justify-start gap-2">
              <Image width={82} src={logo} />
            </p>

            <h1 className="mb-1 text-3xl font-medium font-serif text-[#F45044] md:mb-5">
              Meet, Match, and More
            </h1>

            <p className="mb-4 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">
              You’ve just landed on the hottest space to mingle and jingle.
              Here, we believe love is all about vibes, and we’re all about
              matching yours. Let’s be honest, even sky isn’t the limit here.
            </p>

            <div className="flex items-center gap-2.5 mx-auto sm:mx-0">
              <Link
                href="/auth"
                className="flex items-center rounded-full bg-[#00AEF0] px-5 py-3 text-center text-sm font-semibold text-black "
              >
                Get Started
              </Link>

              <div className="hidden px-4 py-1 md:flex items-center gap-2 border-2 border-[#00AEF0] bg-[#00AEF033] rounded-full">
                <Image src={button} width={100} />
                <div className="text-sm">
                  10000+ <br /> Happy Customers
                </div>
              </div>
            </div>
          </div>
          {/* <!-- content - end --> */}

          <div>
            <Image src={hero} />
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;
