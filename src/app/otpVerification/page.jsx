"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { authReducer } from "@/redux/reducers/auth";

const OtpVerification = () => {
  const [otp1, setOtp1] = useState();
  const [otp2, setOtp2] = useState();
  const [otp3, setOtp3] = useState();
  const [otp4, setOtp4] = useState();
  const [otp5, setOtp5] = useState();
  const [otp6, setOtp6] = useState();
  const userEmail = useSelector((state) => state.auth.email);
  //console.log(userEmail);
  const router = useRouter();
  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
    const apiURL = process.env.NEXT_PUBLIC_API_URL;
    const otp = otp1 + otp2 + otp3 + otp4 + otp5 + otp6;
    if (otp.length === 6 && userEmail) {
      try {
        const response = await axios.post(
          `${apiURL}/api/auth/verify-otp`,
          { email: userEmail, otp },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        //alert(response.data.message);
        console.log(response);
        // Redirect to OTP page
        dispatch(
          authReducer({
            token: response?.data?.token,
          })
        );

        Cookies.set("token", response.data.token);
        //create user profile
        try {
          // Making the profile creation request
          const profileResponse = await axios.post(
            `${apiURL}/api/profile`,
            {},
            {
              headers: {
                "x-auth-token": response.data.token,
              },
            }
          );

          // Logging the response for debugging
          console.log(profileResponse);

          // Redirecting to the profile page
          router.replace("/profile");
        } catch (error) {
          // Handling any errors that occur during the request
          console.error("Error creating profile:", error);
        }
      } catch (error) {
        console.log(error);
        console.error("Error response:", error.response);
        //alert(`Error: ${error.response.data.message}`);
      }
    } else {
      alert("Please confirm your password");
    }
  };
  return (
    <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-primary-300 py-12">
      <div class="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
        <div class="mx-auto flex w-full max-w-md flex-col space-y-16">
          <div class="flex flex-col items-center justify-center text-center space-y-2">
            <h1 className="text-xl font-bold text-black ">CONNECTLY</h1>
            <div class="font-semibold text-black  text-3xl">
              <p>Email Verification</p>
            </div>
            <div class="flex flex-row text-sm font-medium text-gray-800">
              <p>We have sent a code to your email {userEmail}</p>
            </div>
          </div>

          <div>
            <form onSubmit={submitHandler}>
              <div class="flex flex-col space-y-16">
                <div class="flex flex-row items-center justify-between mx-auto w-full max-w-xs space-x-2">
                  <div class="w-16 h-16 ">
                    <input
                      class="w-full h-full text-black  flex flex-col items-center justify-center text-center px-3 outline-none rounded-xl border border-gray-200 text-lg bg-transparent focus:bg-gray-50 focus:ring-1 ring-primary-700"
                      type="text"
                      name=""
                      id=""
                      maxLength={1}
                      value={otp1}
                      onChange={(event) => setOtp1(event.target.value)}
                    />
                  </div>
                  <div class="w-16 h-16 ">
                    <input
                      class="w-full h-full text-black  flex flex-col items-center justify-center text-center px-3 outline-none rounded-xl border border-gray-200 text-lg bg-transparent focus:bg-gray-50 focus:ring-1 ring-primary-700"
                      type="text"
                      name=""
                      id=""
                      maxLength={1}
                      value={otp2}
                      onChange={(event) => setOtp2(event.target.value)}
                    />
                  </div>
                  <div class="w-16 h-16 ">
                    <input
                      class="w-full h-full text-black  flex flex-col items-center justify-center text-center px-3 outline-none rounded-xl border border-gray-200 text-lg bg-transparent focus:bg-gray-50 focus:ring-1 ring-primary-700"
                      type="text"
                      name=""
                      id=""
                      maxLength={1}
                      value={otp3}
                      onChange={(event) => setOtp3(event.target.value)}
                    />
                  </div>
                  <div class="w-16 h-16 ">
                    <input
                      class="w-full h-full flex text-black  flex-col items-center justify-center text-center px-3 outline-none rounded-xl border border-gray-200 text-lg bg-transparent focus:bg-gray-50 focus:ring-1 ring-primary-700"
                      type="text"
                      name=""
                      id=""
                      maxLength={1}
                      value={otp4}
                      onChange={(event) => setOtp4(event.target.value)}
                    />
                  </div>
                  <div class="w-16 h-16 ">
                    <input
                      class="w-full h-full text-black  flex flex-col items-center justify-center text-center px-3 outline-none rounded-xl border border-gray-200 text-lg bg-transparent focus:bg-gray-50 focus:ring-1 ring-primary-700"
                      type="text"
                      name=""
                      id=""
                      maxLength={1}
                      value={otp5}
                      onChange={(event) => setOtp5(event.target.value)}
                    />
                  </div>
                  <div class="w-16 h-16 ">
                    <input
                      class="w-full h-full text-black  flex flex-col items-center justify-center text-center px-3 outline-none rounded-xl border border-gray-200 text-lg bg-transparent focus:bg-gray-50 focus:ring-1 ring-primary-700"
                      type="text"
                      name=""
                      id=""
                      maxLength={1}
                      value={otp6}
                      onChange={(event) => setOtp6(event.target.value)}
                    />
                  </div>
                </div>

                <div class="flex flex-col space-y-5">
                  <div>
                    <Button class="flex flex-row items-center mx-auto justify-center text-center w-full border rounded-xl outline-none py-5  border-none shadow-sm">
                      Verify Account
                    </Button>
                  </div>

                  <div class="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-700 ">
                    <p>Didn&apos;t recieve code?</p>{" "}
                    <Link
                      class="flex flex-row items-center text-black "
                      href="#"
                    >
                      Resend
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpVerification;
