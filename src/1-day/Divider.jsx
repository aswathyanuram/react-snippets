import React from "react";
import styled from "styled-components";

export default function Divider() {
  return <Container></Container>;
}

const Container = styled.div`
  min-width: 100%;
  min-height: 1px;
  background-color: #33333333;
  margin: 1rem 0;
`;
