import React from "react";
import { useState } from "react";

export default function ImageGallery() {
  return (
    <div>
      <Gallery times={3} />
    </div>
  );
}

function Profile() {
  return <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />;
}

function Gallery({ times }) {
  return (
    <section>
      <h1>Amazing scientists</h1>
      {new Array(times).fill(1).map((item) => {
        return <Profile />;
      })}
    </section>
  );
}
