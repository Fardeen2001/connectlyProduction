import "./globals.css";
import {
  Post,
  SideBar,
  StoryCard,
  CreatePost,
  RightNav,
  Footer,
} from "../components";
import { useEffect, useLayoutEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  useLayoutEffect(() => {
    router.replace("/feed");
  }, []);
  return (
    <>
      {/* <div className="grid-container relative">
        <div className="p-5 flex items-center gap-5 story-card">
          <StoryCard />
        </div>
        <div className="sidebar-left">
          <SideBar />
        </div>
        <div className="sidebar-right p-5">
          <RightNav />
        </div>
        <div className="feed-section mx-auto">
          <div className="flex items-center justify-center flex-col ">
            <CreatePost />
            <Post />
          </div>
        </div>
      </div>
      <Footer /> */}
    </>
  );
}
