import React from "react";
import styled from "styled-components";
import Product from "./Product";

export default function ProductCards({ productCardDetails }) {
  const { title, products } = productCardDetails;
  return (
    <Container>
      <Title>{title}</Title>
      <ProductContainer>
        {products.map((product) => {
          return <Product product={product} />;
        })}
      </ProductContainer>
    </Container>
  );
}

const Title = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: flex-start;
  padding: 0rem 1rem 1rem 0;
`;

const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 350px;
  justify-content: flex-start;
  padding: 1rem;
  flex-direction: column;
  margin-top: 1rem;
  background-color: #eee;
`;
