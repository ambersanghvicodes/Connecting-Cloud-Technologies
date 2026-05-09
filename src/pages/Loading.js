import React from "react";
import loadingData from "../Animations/loading.json";
import Lottie from "react-lottie";
import styled from "styled-components";
import logo from "../logo/logo.png";

const StyledContainer = styled.div`
  height: 80vh;
  display: grid;
  place-items: center;
`;

export default function Loading(props) {
  return (
    <StyledContainer>
      <h2>{props.title}</h2>
      <img
        src={logo}
        alt="Connecting Cloud"
        style={{ height: "8rem", width: "8rem", marginTop : '-4rem' }}
      />
      <Lottie
        style={{ marginTop: "-7rem" }}
        options={{
          loop: true,
          autoplay: true,
          animationData: loadingData,
          // rendererSettings: {
          //   preserveAspectRatio: "xMidYMid slice",
          // },
        }}
        height={300}
        width={300}
      />
    </StyledContainer>
  );
}
