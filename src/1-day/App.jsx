import { useState } from "react";
import "./App.css";
import styled from "styled-components";
import Card from "./chapter1/Card";
import Button from "./chapter1/Button";
import Chicken from "./chapter1/Chicken";

function App() {
  function generateRandomColor() {
    // Generate a random hexadecimal color code
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  }

  function generateRandomColors(numColors) {
    let colors = [];
    for (let i = 0; i < numColors; i++) {
      colors.push(generateRandomColor());
    }
    return colors;
  }

  const randomColors = generateRandomColors(100);

  return (
    <Container>
      {randomColors.map((color) => {
        return <Chicken color={color}></Chicken>;
      })}
    </Container>
  );
}

const Container = styled.div`
  padding: 1rem;
`;
export default App;
