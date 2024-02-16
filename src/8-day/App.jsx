import React from "react";
import styled from "styled-components";
import Image from "./Image";

export default function App() {
  const movie = {
    image:
      "https://www.wallpaperflare.com/static/89/717/68/rajnikanth-kaala-kaala-karikaalan-tamil-wallpaper.jpg",
    title: "Prime Video: Recommended for you",
    subtitle: "Kaala - Season 1",
    link: "Start watching on Prime Video",
  };

  return (
    <Container>
      <Image movie={movie} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  min-width: 90vw;
  min-height: 90vh;
  flex-direction: column;
`;
