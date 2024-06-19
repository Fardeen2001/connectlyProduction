import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="text-black  bg-black fixed bottom-0 w-screen">
        <div className="py-5 flex items-center justify-center">
          <Link
            href={"/"}
            className="flex text-black  items-center md:justify-start justify-center"
          >
            <h1 className="text-black ">©Connectly</h1>
          </Link>
          <p className="text-sm ml-1 sm:py-2 sm:mt-0 mt-4">
            2024, All Rights Reserved
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
