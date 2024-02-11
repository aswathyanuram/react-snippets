import React, { useState } from "react";
import styled from "styled-components";
import {
  ICON_FAN,
  ICON_SWITCH_OFF,
  ICON_SWITCH_ON,
  getIconForName,
} from "../helpers/iconHelper.jsx";
import { COLOR_GREEN, COLOR_RED } from "../helpers/colorHelper.js";

export default function Fan() {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const toggleFan = () => {
    setIsSwitchOn((old) => !old);
  };

  return (
    <Container on={isSwitchOn}>
      <Light1 on={isSwitchOn}></Light1>
      <Light2 on={isSwitchOn}></Light2>
      <FanInner on={isSwitchOn}>{getIconForName(ICON_FAN)}</FanInner>
      {isSwitchOn && (
        <Switch color={COLOR_GREEN} onClick={toggleFan}>
          {getIconForName(ICON_SWITCH_ON)}
        </Switch>
      )}
      {!isSwitchOn && (
        <Switch color={COLOR_RED} onClick={toggleFan}>
          {getIconForName(ICON_SWITCH_OFF)}
        </Switch>
      )}
    </Container>
  );
}

const Light1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 10rem;
  left: 10rem;
  width: 300px;
  height: 15px;
  background-color: ${(props) => (props.on ? "#fff07f" : "#fff07f00")};
  animation: ${(props) =>
    props.on ? "glow-animation 2s infinite alternate" : ""};

  @keyframes glow-animation {
    0% {
      box-shadow: 0 0 10px #fff07f, 0 0 20px #fff07f, 0 0 30px #fff07f,
        0 0 40px #fff07f, 0 0 50px #fff07f, 0 0 60px #fff07f, 0 0 70px #fff07f;
    }
    100% {
      box-shadow: 0 0 20px #fff07f, 0 0 30px #fff07f, 0 0 40px #fff07f,
        0 0 50px #fff07f, 0 0 60px #fff07f, 0 0 70px #fff07f, 0 0 80px #fff07f;
    }
  }
`;
const Light2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 10rem;
  right: 10rem;
  width: 250px;
  height: 15px;
  background-color: ${(props) => (props.on ? "#fff07f" : "#fff07f00")};
  animation: ${(props) =>
    props.on ? "glow-animation 2s infinite alternate" : ""};

  @keyframes glow-animation {
    0% {
      box-shadow: 0 0 10px #fff07f, 0 0 20px #fff07f, 0 0 30px #fff07f,
        0 0 40px #fff07f, 0 0 50px #fff07f, 0 0 60px #fff07f, 0 0 70px #fff07f;
    }
    100% {
      box-shadow: 0 0 20px #fff07f, 0 0 30px #fff07f, 0 0 40px #fff07f,
        0 0 50px #fff07f, 0 0 60px #fff07f, 0 0 70px #fff07f, 0 0 80px #fff07f;
    }
  }
`;

const Switch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  font-size: 3rem;
  color: ${(props) => props.color ?? "#000"};
`;

const FanInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  font-size: 10rem;
  animation: ${(props) => (props.on ? "spin 1s linear infinite" : "")};

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background-color: #333;
  position: relative;
`;
