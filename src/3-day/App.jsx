import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import { BLUE_COLOR, RED_COLOR } from "../helpers/colorHelper";

export default function App() {
  const age = 17;
  return (
    <Container>
      {age >= 18 && "Eligible to drive"}

      {age < 18 && " Not eligible to drive"}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
