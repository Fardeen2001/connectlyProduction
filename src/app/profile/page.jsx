"use client";
import { Post, RightNav, SideBar } from "@/components";
import { Img, Pic, cover_profile } from "../assets";

import React, { useEffect, useState } from "react";

import TimeLine from "@/components/TimeLine";
import AboutProfile from "@/components/AboutProfile";
import MediaPost from "@/components/MediaPost";
import Cookies from "js-cookie";
import Loading from "@/components/Loading";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import Link from "next/link";
import { Edit } from "lucide-react";

const Profile = () => {
  const [request, setRequest] = useState(false);
  const [activeTab, setActiveTab] = useState("timeline");
  const [profileData, setProfileData] = useState(null);
  const token = Cookies.get("token");
  const router = useRouter();
  console.log(token);
  const { toast } = useToast();
  async function fetchProfileData() {
    const apiURL = process.env.NEXT_PUBLIC_API_URL;
    const response = await fetch(`${apiURL}/api/profile/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": `${token}`,
      },
    });

    const responseData = await response.json();
    console.log(responseData);
    if (response.status === 200) {
      setProfileData(responseData);
    }
  }

  useEffect(() => {
    if (token) {
      fetchProfileData();
    } else {
      toast({
        description: "Please, Login",
      });
      router.replace("/auth");
    }
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className="grid-container relative">
        {/* Image */}
        <div className="px-5 py-2 flex items-center story-card w-[50rem]">
          <div className="bg-white rounded-2xl h-[18rem]">
            <Image alt="connectly" src={cover_profile} className="h-[8rem]" />
            <div className="flex items-center h-[8rem]">
              {console.log(profileData)}
              <Image
                alt="connectly"
                src={
                  profileData?.profilePicture || "https://github.com/shadcn.png"
                }
                onError={""}
                width={100}
                height={50}
                className="w-[10rem] h-[10rem] relative left-5 bottom-10 rounded-full"
              />

              <div className="flex justify-between px-10 w-full">
                <div className="flex flex-col gap-1">
                  <h1 className="font-semibold text-lg">
                    {profileData.user.name}
                  </h1>
                  <div className="flex flex-col ">
                    <p className="text-sm text-black ">Bio</p>
                    <p className="text-xs w-[15rem]">{profileData.bio}</p>
                  </div>
                </div>
                {!request && (
                  <div className="flex items-center gap-6 mb-14 text-black ">
                    <div className="flex flex-col">
                      <p className="font-medium ">Posts</p>
                      <p className="font-medium ">55</p>
                    </div>
                    <div className="flex flex-col">
                      <p className="font-medium ">Friends</p>
                      <p className="font-medium ">12k</p>
                    </div>
                    <div className="flex flex-col">
                      <p className="font-medium ">Followers</p>
                      <p className="font-medium ">57k</p>
                    </div>
                    <Link
                      href={"/editProfile"}
                      className=" font-bold flex items-center gap-1"
                    >
                      <Edit /> edit
                    </Link>
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center gap-3 px-4">
              <button
                onClick={() => handleTabChange("timeline")}
                className={`font-medium hover:text-[#F45044]  ${
                  activeTab === "timeline"
                    ? "border-b-[1px] border-[#F45044] text-[#F45044] font-semibold "
                    : "font-medium"
                }`}
              >
                TimeLine
              </button>
              <button
                onClick={() => handleTabChange("about")}
                className={`font-medium hover:text-[#F45044]  ${
                  activeTab === "about"
                    ? "border-b-[1px] border-[#F45044] text-[#F45044] font-semibold "
                    : "font-medium"
                }`}
              >
                About
              </button>
              <button
                onClick={() => handleTabChange("media")}
                className={`font-medium hover:text-[#F45044]  ${
                  activeTab === "media"
                    ? "border-b-[1px] border-[#F45044] text-[#F45044] font-semibold "
                    : "font-medium"
                }`}
              >
                Media
              </button>
            </div>
          </div>
        </div>

        <div className="sidebar-left">
          {activeTab === "timeline" && <SideBar views={true} />}
          {activeTab === "about" && <SideBar edit={true} />}
          {activeTab === "media" && <SideBar edit={true} />}
        </div>
        <div className="sidebar-right h-[58rem] flex flex-col gap-6 py-2">
          <RightNav />
          <div className="flex flex-col gap-6">
            <div className="bg-white h-fit w-full px-4 py-3 rounded-lg">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">Photos</h3>
                <p className="border-b-2 border-[#F45044] text-[#F45044] text-sm">
                  See All
                </p>
              </div>

              {/* <div>
                <div class="grid grid-cols-3 gap-3 px-1 py-3">
                  {sidePhotos.map((sideP, index) => {
                    return <div key={index} className="">
                      <Image alt="connectly"
                        className="h-16 w-full rounded"
                        src={sideP}
                        
                      />
                    </div>
                  })}

                </div>
              </div> */}
            </div>
            <div className="bg-white h-fit w-full px-4 py-2 rounded-lg">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">Friends</h3>
                <p className="border-b-2 border-[#F45044] text-[#F45044] text-sm">
                  See All
                </p>
              </div>
              {/* <div class="grid grid-cols-2 gap-3 px-1 py-3">
                {friendsPhoto.map((fp, index) => {
                  return <div key={index} className="flex flex-col">
                    <Image alt="connectly"
                      className="h-20 w-20 rounded"
                      src={fp.img}
                      
                    />
                    <p className="text-xs text-black ">{fp.name}</p>
                  </div>
                })}

              </div> */}
            </div>
          </div>
        </div>

        <div className="feed-section mx-5 mb-5">
          <div className="flex items-center justify-center flex-col">
            {/* Images */}
            <div className="w-full h-full rounded-lg mx-auto">
              {activeTab === "timeline" && <TimeLine />}
              {activeTab === "about" && (
                <AboutProfile profileData={profileData} />
              )}
              {activeTab === "media" && <MediaPost />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
