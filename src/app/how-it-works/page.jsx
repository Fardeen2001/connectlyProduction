import Image from "next/image";
import React from "react";
import stars from "../assets/stars.png";
import sec1 from "../assets/sec1.png";

const Page = () => {
  const works = [
    {
      title: "Getting Started:",
      subTitle: "Sign Up/Log In",
      li1: 'Click on the "Get Started" button on the landing page',
      li2: "Create an account using your email or sign up through Google verification",
      li3: "If you already have an account, simply log in.",
    },
    {
      title: "Setting Up Your Profile:",
      subTitle: "Profile Creation",
      li1: "After logging in, you&apos;ll be guided to set up your profile.",
      li2: " Fill in your personal information, upload a profile picture, and add a short bio.",
      li3: "Select your interests and preferences to help Connectly find like-minded people for you.",
    },
    {
      title: "Exploring the Feed",
      subTitle: "Feed Section",
      li1: "View posts, photos, videos, and stories from people you are connected with.",
      li2: "Like, comment, and share posts to interact with your connections.",
      li3: "At the top of your feed, you can upload and view stories that disappear after 24 hours.",
    },
    {
      title: "Finding Connections",
      subTitle: "Explore Section",
      li1: "Use the explore feature to search for new people based on your interests and preferences.",
      li2: "Send friend requests to people you want to connect with.",
      li3: "Once accepted, you can view their posts and interact with them.",
    },
    {
      title: "Your Profile",
      subTitle: "Profile Section",
      li1: "View your own posts, photos, and videos in a layout similar to Twitter.",
      li2: "Edit your profile details and update your preferences anytime.",
      li3: "Check who liked your posts and who commented on them.",
    },
    {
      title: "Real-Time Communication",
      subTitle: "Chat Feature",
      li1: "Chat with your friends in real-time using the messaging system.",
      li2: "To start a chat, click on a friend&apos;s profile and send a message.",
      li3: "If you want to chat with someone new, send them a friend request first. Once accepted, you can start chatting.",
    },
    {
      title: "Video Calling and Group Parties",
      subTitle: "Video Calls",
      li1: "Initiate one-on-one video calls with your connections directly from the chat interface.",
      li2: "Use the video call button to start a call and connect in real-time.",
      sec: true,
      subTitle2: "Group Parties",
      li1_1:
        "Create or join group video calls to interact with multiple friends at once.",
      li2_2:
        "Organize virtual parties and events, invite friends, and have fun together.",
    },
    {
      title: "Privacy and Preferences",
      subTitle: "Privacy Settings",
      li1: "Control your privacy by adjusting settings for who can see your profile and posts.",
      li2: "Turn off location sharing when you don&apos;t want to be found by nearby users.",
      sec: true,
      subTitle2: "Preferences",
      li1_1:
        "Update your preferences anytime to refine the type of content you see and the people you connect with.",
    },
    {
      title: "Notifications",
      subTitle: "Stay Updated*",
      li1: "Get real-time notifications for new messages, friend requests, likes, comments, and more.",
      li2: "Customize your notification settings to stay informed about what matters to you.",
      li3: "",
    },
    {
      title: " Enjoy and Engage",
      subTitle: "Participate",
      li1: "Engage with the community by sharing your experiences, stories, and interests.",
      li2: "Discover new connections, build relationships, and expand your network",
      li3: "",
    },
  ];

  return (
    <div className="px-4">
      <div className="w-[25rem] h-[15rem] md:w-[40rem] md:h-[22rem] mx-auto my-10">
        <Image src={sec1} className="w-full h-full" />
      </div>

      <div className="text-center">
        <h1 className="text-sm md:text-base font-medium">
          <span className="text-lg md:text-2xl text-[#F45044] font-semibold">
            {" "}
            Welcome to Connectly!
          </span>
          <br /> Here&apos;s a quick guide on how to make the most out of your
          experience:
        </h1>
      </div>

      {works.map((w, i) => {
        return (
          <>
            <div
              key={i}
              className="px-3 py-5 my-5 hover:shadow-xl hover:shadow-[#F45044]"
            >
              <h3 className="text-sm md:text-xl font-semibold text-[#F45044] mb-2 md:mb-4 flex items-center gap-1">
                <Image src={stars} className="w-5 h-5" /> {w.title}
              </h3>
              <ul className="pl-5">
                <li className="mb-1 md:mb-2 font-medium text-[0.8rem] md:text-base">
                  {" "}
                  <input type="checkbox" checked /> {w.subTitle}
                </li>
                <ol className="pl-5">
                  <li className='before:content-["-"] before:pr-2 before:text-[#00AEF0] text-xs md:text-base'>
                    {w.li1}
                  </li>
                  <li className='before:content-["-"] before:pr-2 before:text-[#00AEF0] text-xs md:text-base'>
                    {w.li2}
                  </li>
                  {w.li3 ? (
                    <li className='before:content-["-"] before:pr-2 before:text-[#00AEF0] text-xs md:text-base'>
                      {w.li3}
                    </li>
                  ) : null}
                </ol>
                {w.sec ? (
                  <>
                    <li className="mb-1 md:mb-2 font-medium text-[0.8rem] md:text-base">
                      {" "}
                      <input type="checkbox" checked /> {w.subTitle2}
                    </li>
                    <ol className="pl-5">
                      <li className='before:content-["-"] before:pr-2 before:text-[#00AEF0] text-xs md:text-base'>
                        {w.li1_1}
                      </li>
                      {w.li2_2 ? (
                        <li className='before:content-["-"] before:pr-2 before:text-[#00AEF0] text-xs md:text-base'>
                          {w.li2_2}
                        </li>
                      ) : null}
                      {w.li3_3 ? (
                        <li className='before:content-["-"] before:pr-2 before:text-[#00AEF0] text-xs md:text-base'>
                          {w.li3_3}
                        </li>
                      ) : null}
                    </ol>
                  </>
                ) : null}
              </ul>
            </div>

            <hr className="border border-[#F45044]" />
          </>
        );
      })}
    </div>
  );
};

export default Page;

export const metadata = {
  title: "Connectly - How it works",
  description: "Generated by create next app",
};
