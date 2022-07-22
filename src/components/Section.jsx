import React from "react";
import styled from "styled-components";

function Section() {
  return (
    <Wrap>
      <ItemText>
        <h1 className="text-5xl font-semibold py-2">Model S</h1>
        <p className="text-lg">Order Online for Touchless Delivery</p>
      </ItemText>
      <Buttons>
        <ButtonGroup>
          <LeftButton>Custom Order</LeftButton>
          <RightButton>Existing Inventory</RightButton>
        </ButtonGroup>
        <DownArrow src="/images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("/images/model-s.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  margin: 8px;
  cursor: pointer;
`;

const RightButton = styled(LeftButton)`
  background-color: #fff;
  opacity: 0.70;
  color: black;
  font-weight: bold;
`;

const DownArrow = styled.img`
  margin-top: 20px;
  width: 100%;
  height: 40px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
`;

const Buttons = styled.div`
  padding-bottom: 2vh;
`;
