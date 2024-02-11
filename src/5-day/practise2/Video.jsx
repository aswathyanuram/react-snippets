import React from "react";
import styled from "styled-components";

export default function Video({ video }) {
  const {
    image,
    title,
    views,
    publishedTime,
    channelName,
    description,
    channelImage,
  } = video;

  return (
    <Container>
      <ImageContainer image={image}></ImageContainer>
      <DataContainer>
        <Title>{title}</Title>
        <Data>
          <View>{views}</View>
          <Dot>
            <InnerDot />
          </Dot>
          <Time>{publishedTime}</Time>
        </Data>
        <Channel>
          <Image image={channelImage}></Image>
          <Name>{channelName}</Name>
        </Channel>
        <Description>{description}</Description>
      </DataContainer>
    </Container>
  );
}

const Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  width: 24px;
  background-image: ${(props) => `url(${props.image})`};
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 1rem;
  margin: 0.5rem 0.5rem 0.5rem 0;
`;

const Name = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  font-weight: bold;
`;

const InnerDot = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3px;
  height: 3px;
  border-radius: 2px;
  background-color: black;
`;

const Dot = styled.div`
  display: flex;
  align-items: center;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  justify-content: center;
`;

const View = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
`;

const Time = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
`;

const Data = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.25rem 0;
`;

const Channel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.25rem;
  font-size: 0.75rem;
`;

const Description = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
`;

const DataContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  padding: 1rem;
  min-height: 170px;
  flex: 1;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  min-height: 170px;
  background-image: ${(props) => `url(${props.image})`};
  background-size: contain;
  background-repeat: no-repeat;
`;

const Container = styled.div`
  display: flex;
  width: 70%;
  align-items: center;
  justify-content: center;
  min-height: 170px;
  margin: 0.5rem 1rem 0.5rem 1rem;
  padding: 0rem 0.25rem;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.25);
  cursor: pointer;

  &:hover {
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.25);
  }
`;
