import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import { IoIosRefresh } from "react-icons/io";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const getProducts = (url) => {
    setLoading(true);
    setTimeout(() => {
      axios
        .get(url)
        .then((response) => {
          const data = response.data;
          const products = data?.products ?? [];
          setProducts(products);
          setLoading(false);
        })
        .catch((error) => {});
    }, 3000);
  };

  return (
    <Container>
      <Button
        onClick={() => {
          getProducts("https://dummyjson.com/products");
        }}
      >
        GET PRODUCTS
      </Button>
      {loading && (
        <Icon>
          <IoIosRefresh />
        </Icon>
      )}
      {!loading &&
        products.map((product) => {
          const { title, description } = product;
          return (
            <Product>
              <Title>{title}</Title>
              <Description>{description}</Description>
            </Product>
          );
        })}
    </Container>
  );
}

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  font-weight: bold;
`;

const Description = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
`;
const Product = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  flex-direction: column;
  width: 400px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin-bottom: 0.5rem;
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  font-size: 2rem;
  animation: spin 0.5s linear infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: darkblue;
  color: #fefefe;
  padding: 0.5rem;
  margin-bottom: 1rem;
  cursor: pointer;

  &:active {
    transform: translate(2px, 2px);
  }
`;
