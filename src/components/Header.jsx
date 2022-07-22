/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import styled from "styled-components";

import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { BsGlobe } from "react-icons/bs";

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
      <BurgerNavWrapper>
        <BurgerNav>
          <CloseWrapper>
            <IoMdClose className="text-5xl rounded-full hover:bg-gray-100 transition-all duration-500 p-2 z-40 cursor-pointer" />
          </CloseWrapper>
          <li>Model S</li>
          <li>Model 3</li>
          <li>Model X</li>
          <li>Model Y</li>
          <li>Solar Roof</li>
          <li>Solar Pannels</li>
          <li>Trade-In</li>
          <li>Test Drive</li>
          <li>Insurance</li>
          <li>Powerwall</li>
          <li>Commercial Energy</li>
          <li>Utilities</li>
          <li>Charging</li>
          <li>Find Us</li>
          <li>Support</li>
          <li>Investors Relationship</li>
          <li>Shop</li>
          <li>Account</li>
          <li>More...</li>
          <li className="mt-24 flex items-baseline">
            <BsGlobe />
            <div className="ml-4">
              <h3 className="font-semibold">United States</h3>
              <p>English</p>
            </div>
          </li>
        </BurgerNav>
      </BurgerNavWrapper>
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
  z-index: 1;
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
    color: black;
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
    color: black;
  }
`;

const CustomMenu = styled(FaBars)`
  cursor: pointer;
`;

const BurgerNavWrapper = styled.div`
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  position: fixed;
  background-color: #00000078;
  z-index: 10;
`;

const BurgerNav = styled.ul`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: #fff;
  width: 300px;
  z-index: 100;

  li {
    text-align: start;
    padding: 8px 20px;
    margin: 0 16px;
    border-radius: 6px;
  }

  li:hover {
    background-color: #f7f7f7;
    cursor: pointer;
  }
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: end;
  margin: 16px;
`;
