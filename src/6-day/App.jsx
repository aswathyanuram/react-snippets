import React from "react";
import styled from "styled-components";
import Fan from "./Fan";

export default function App() {
  return (
    <Container>
      <Fan />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
`;
