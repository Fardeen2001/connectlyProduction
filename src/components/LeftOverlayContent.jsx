import React from "react";

const LeftOverlayContent = ({ isAnimated, setIsAnimated }) => {
  return (
    <div className="p-8 text-center">
      <h1 className="text-6xl font-bold text-black  mb-4">
        Already have an account ?
      </h1>

      <h5 className="text-xl text-black ">
        Sign in with your email & password
      </h5>
      <div className="mt-16">
        <button
          className="py-3 px-6 bg-transparent rounded-full text-center text-black  text-xl font-bold uppercase ring-2 ring-white active:scale-110 transition-transform ease-in"
          onClick={(e) => {
            setIsAnimated(!isAnimated);
          }}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default LeftOverlayContent;
