import React from "react";
import styled from "styled-components";

export default function Button({ title, color, onClick }) {
  return (
    <Container color={color} onClick={onClick}>
      {title}
    </Container>
  );
}

const Container = styled.button`
  padding: 1rem;
  background-color: ${(props) => props.color};
  border: none;
  cursor: pointer;
  color: #fefefe;
  margin: 1rem;
  outline: none;

  &:hover {
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
`;
