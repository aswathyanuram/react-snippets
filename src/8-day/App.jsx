import React from "react";
import styled from "styled-components";
import Image from "./Image";
import ProductCards from "./ProductCards";

export default function App() {
  const movie = {
    image:
      "https://www.wallpaperflare.com/static/89/717/68/rajnikanth-kaala-kaala-karikaalan-tamil-wallpaper.jpg",
    title: "Prime Video: Recommended for you",
    subtitle: "Kaala - Season 1",
    link: "Start watching on Prime Video",
  };

  const productCardDetails = {
    title: "Categories to explore",
    products: [
      {
        image: "https://m.media-amazon.com/images/I/41NHBKgWZiL._MCnd_AC_.jpg",
        title: "Shampoos",
      },
      {
        image: "https://m.media-amazon.com/images/I/21hmZxE3omL._MCnd_AC_.jpg",
        title: "Stationery products",
      },
      {
        image: "https://m.media-amazon.com/images/I/51Q6Qrh+zGL._MCnd_AC_.jpg",
        title: "Flat bed sheets",
      },
      {
        image: "https://m.media-amazon.com/images/I/314TLc0r6gL._MCnd_AC_.jpg",
        title: "Facial scrubs & products",
      },
    ],
  };

  return (
    <Container>
      <Image movie={movie} />
      <ProductCards productCardDetails={productCardDetails} />
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
