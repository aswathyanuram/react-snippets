import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import { BLUE_COLOR, RED_COLOR } from "../helpers/colorHelper";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const changeLogin = () => {
    console.log("JEEVA");
    setIsLoggedIn((old) => !old);
  };

  return (
    <Container>
      {!isLoggedIn && (
        <Button
          title="Login"
          color={!isLoggedIn ? BLUE_COLOR : RED_COLOR}
          onClick={changeLogin}
        />
      )}
      {isLoggedIn && (
        <Button
          title="Logout"
          color={!isLoggedIn ? BLUE_COLOR : RED_COLOR}
          onClick={changeLogin}
        />
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
