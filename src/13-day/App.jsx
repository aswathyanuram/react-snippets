import React, { useState } from "react";
import styled from "styled-components";

export default function App() {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <Container>
      <Navigation>
        <Tab
          onClick={() => {
            setSelectedTab(0);
          }}
        >
          Homepage
        </Tab>
        <Tab
          onClick={() => {
            setSelectedTab(1);
          }}
        >
          Projects
        </Tab>
        <Tab
          onClick={() => {
            setSelectedTab(2);
          }}
        >
          Experience
        </Tab>
        <Tab
          onClick={() => {
            setSelectedTab(3);
          }}
        >
          About Me
        </Tab>
        <Tab
          onClick={() => {
            setSelectedTab(4);
          }}
        >
          Contact Me
        </Tab>
      </Navigation>
      <Content>
        {selectedTab == 0 && "Homepage"}
        {selectedTab == 1 && "Projects"}
        {selectedTab == 2 && "Experience"}
        {selectedTab == 3 && "About Me"}
        {selectedTab == 4 && "Contact Me"}
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 98vw;
  height: 98vh;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;
const Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 0.5rem 1rem;
`;

const Content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  flex: 1;
  padding: 1rem;
`;

const Tab = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.25rem;
  padding: 0.25rem;
  background-color: #674a9c;
  color: #fefefe;
  cursor: pointer;
  border-radius: 4px 4px 0 0;

  &:hover {
    background-color: #9d5bf3;
  }
`;
