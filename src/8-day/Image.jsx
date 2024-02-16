import React from "react";
import styled from "styled-components";

export default function Image({ movie }) {
  const { title, image, subtitle, link } = movie;
  return (
    <Container url={image}>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <Link>{link}</Link>
    </Container>
  );
}

const Link = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 1rem;
  left: 0;
  padding: 1rem 2rem;
  color: #fefefe;
  font-size: 1.25rem;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Subtitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 3rem;
  left: 0;
  padding: 1rem 2rem;
  color: #fefefe;
  font-size: 1.25rem;
  font-weight: bold;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  padding: 1rem 2rem;
  color: #fefefe;
  font-size: 2rem;
  font-weight: bolder;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 800px;
  min-height: 500px;
  background-image: ${(props) => `url(${props.url})`};
  background-size: cover;
  position: relative;
`;
