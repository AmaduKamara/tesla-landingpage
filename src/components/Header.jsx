/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import styled from "styled-components";

import { FaBars } from "react-icons/fa";

function Header() {
  return (
    <Container>
      <a href="">
        <img src="/images/logo.svg" alt="Tesla Logo" />
      </a>
      <Menu>
        <a href="#">Model S</a>

        <a href="#">Model 3</a>

        <a href="#">Model X</a>

        <a href="#">Model Y</a>

        <a href="#">Solar Roof</a>

        <a href="#">Solar Panels</a>
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Account</a>
        <CustomMenu />
      </RightMenu>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: 400;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 5px;
  a {
    font-weight: 400;
    margin-right: 10px;
  }
`;

const CustomMenu = styled(FaBars)`
  cursor: pointer;
`;
