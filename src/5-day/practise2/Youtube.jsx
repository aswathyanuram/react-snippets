import React from "react";
import Video from "./Video";
import styled from "styled-components";

export default function Youtube({ videos }) {
  return (
    <Container>
      {videos.map((video) => {
        return <Video video={video} />;
      })}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
