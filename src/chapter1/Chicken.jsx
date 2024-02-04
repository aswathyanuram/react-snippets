import React from "react";
import styled from "styled-components";
import { GiChicken } from "react-icons/gi";

export default function Chicken(props) {
  function generateRandomDecimal() {
    // Generate a random decimal number between 0.25 and 2
    return (Math.random() * (2 - 0.25) + 0.25).toFixed(2);
  }

  return (
    <Container color={props.color} timing={generateRandomDecimal()}>
      <GiChicken />
    </Container>
  );
}

const Container = styled.div`
  display: inline-block;
  font-size: 3rem;
  padding: 1rem;
  margin: 1rem;
  color: ${(props) => {
    return props.color;
  }};
  animation: ${(props) => `movement ${props.timing}s ease infinite`};

  @keyframes movement {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(20px);
    }
    100% {
      transform: translateX(0);
    }
  }
`;
