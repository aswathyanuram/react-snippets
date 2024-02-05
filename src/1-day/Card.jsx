import React from "react";
import styled from "styled-components";

export default function Card(props) {
  return <Container>{props.title}</Container>;
}

const Container = styled.div`
  color: #333;
`;
