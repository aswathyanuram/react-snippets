import React from "react";
import styled from "styled-components";

export default function Product({ product }) {
  const { title, image } = product;
  return (
    <Container>
      <Image image={image}></Image>
      <Title>{title}</Title>
    </Container>
  );
}

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 0.85rem;
  padding: 0.5rem 0.5rem;
  width: 100%;
`;

const Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 105px;
  min-height: 150px;
  background-image: ${(props) => `url(${props.image})`};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  padding: 1rem;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: 0.5rem;
  flex: 1;
  min-height: 250px;
  max-height: 200px;
  padding: 0.5rem 0;
  background-color: #fff;
`;
