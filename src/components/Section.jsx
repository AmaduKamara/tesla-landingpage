import React from "react";
import styled from "styled-components";

function Section({
  title,
  description,
  backgroundImage,
  leftButtonText,
  rightButtonText,
}) {
  return (
    <Wrap bgImage={backgroundImage}>
      <ItemText>
        <h1 className="text-5xl font-semibold py-2">{title}</h1>
        <p className="text-lg">{description}</p>
      </ItemText>
      <Buttons>
        <ButtonGroup>
          <LeftButton>{leftButtonText}</LeftButton>
          {rightButtonText && <RightButton>{rightButtonText}</RightButton>}
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
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
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
  opacity: 0.7;
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
