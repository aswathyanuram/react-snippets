import React, { useEffect } from "react";
import Youtube from "./Youtube";

export default function App() {
  const videos = [
    {
      image:
        "https://i.ytimg.com/vi/W6NZfCO5SIk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDOBWmb1XE5qRd1xinBxZPfYfXoEg",
      title: "JavaScript Tutorial for Beginners: Learn JavaScript in 1 Hour",
      views: "11M",
      publishedTime: "5 year ago",
      channelName: "Programming with Mosh",
      channelImage:
        "https://yt3.ggpht.com/ebu9ZksIXw0tUWBZd6rtk-It8VGSk8AdfSI_eGR-fl6WGet9LnVPngNQCmjdLJeGXpuylwYInQ=s68-c-k-c0x00ffffff-no-rj",
      description:
        "Want to learn more from me? Check out these links. Check my courses.",
    },
    {
      image:
        "https://i.ytimg.com/vi/SBmSRK3feww/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCWy3ysgkA5pOKh0bOcMfmljaCIKg",
      title: "JavaScript Full Course - Beginner to Pro - Part 1",
      views: "3.5M",
      publishedTime: "10 months ago",
      channelName: "SuperSimpleDev",
      channelImage:
        "https://yt3.ggpht.com/ytc/AIf8zZSoN0PkqajCSfsSJT8C0zd9kgJ5zI-JR_K7BOJ3=s68-c-k-c0x00ffffff-no-rj",
      description:
        "This course wil cover everything that you need to learn Javascript",
    },
    {
      image:
        "https://i.ytimg.com/vi/PkZNo7MFNFg/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCWGmAFXkqN3F-QqhVaqBWJY2ltFw",
      title: "Learn JavaScript - Full Course for Beginners",
      views: "16M",
      publishedTime: "5 Years ago",
      channelName: "freeCodeCamp.org",
      channelImage:
        "https://yt3.ggpht.com/ytc/AIf8zZTDkajQxPa4sjDOW-c3er1szXkSAO-H9TiF4-8u_Q=s68-c-k-c0x00ffffff-no-rj",
      description:
        "This complete 134 part Javascript tutorial for beginner will teach you everything..",
    },
  ];

  return (
    <div>
      <Youtube videos={videos} />
    </div>
  );
}
