import React from "react";

import styled from "styled-components";

export default function Button(props) {
  return <Container color={props.color}>{props.title}</Container>;
}

const Container = styled.div`
  background-color: ${(props) => {
    return props.color;
  }};
  display: inline-block;
  margin: 0.5rem;
  padding: 0.5rem;
`;
