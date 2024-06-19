import Image from "next/image";
import React from "react";
import stars from "../app/assets/stars.png";
import contact from "../app/assets/contact.png";

const Contact = () => {
  return (
    <div className="flex flex-col items-center sm:flex-row justify-around py-[5rem] px-10 md:gap-3">
      <div>
        <Image
          src={contact}
          className="w-[25rem] h-[20rem] sm:w-[40rem] sm:h-[30rem]"
        />
      </div>

      {/* <!-- content - start --> */}
      <div className="flex flex-col justify-center text-left md:w-[30rem]">
        <p className="font-semibold text-[#656565] md:text-lg xl:text-xl flex items-center gap-2 mb-4">
          <Image width={22} src={stars} /> Join Now!
        </p>

        <h1 className="mb-5 text-2xl sm:text-3xl font-medium font-serif text-[#F45044]">
          Simply pop in your email & let the best adventures on the cosmos land
          in your inbox.
        </h1>

        <p className="mb-5 leading-relaxed text-xs md:text-sm text-gray-500 ">
          Stop being a lone wolf in an interactive cosmos! Try VibeMatch now and
          bid those lonely spaces adieu.
        </p>

        <div className="flex flex-col gap-5">
          <div className="flex gap-5 w-full">
            <input
              type="text"
              placeholder="First name"
              className="w-full px-3 py-1 border-[1px] border-[#737373] rounded-md"
            />
            <input
              type="text"
              placeholder="Last name"
              className="w-full px-3 py-1 border-[1px] border-[#737373] rounded-md"
            />
          </div>

          <input
            type="email"
            placeholder="Email"
            className="w-full px-3 py-1 border-[1px] border-[#737373] rounded-md"
          />

          <div>
            <button
              href="#"
              className="flex items-center rounded-full bg-[#00AEF0] px-10 py-3 text-center text-sm font-semibold text-black "
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      {/* <!-- content - end --> */}
    </div>
  );
};

export default Contact;
