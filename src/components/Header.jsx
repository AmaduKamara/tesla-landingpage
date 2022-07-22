/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

import styled from "styled-components";

import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { BsGlobe } from "react-icons/bs";

function Header() {
  const [burgerOpen, setBurgerOpen] = useState(false);

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
        <CustomMenu onClick={() => setBurgerOpen(true)} className="text-2xl" />
      </RightMenu>
      <BurgerNavWrapper show={burgerOpen}>
        <BurgerNav>
          <CloseWrapper onClick={() => setBurgerOpen(false)}>
            <CustomeClose
              onClick={() => setBurgerOpen(false)}
              className="text-5xl rounded-full hover:bg-gray-100 transition-all duration-500 p-2 z-40 cursor-pointer"
            />
          </CloseWrapper>
          <li onClick={() => setBurgerOpen(false)}>Model S</li>
          <li onClick={() => setBurgerOpen(false)}>Model 3</li>
          <li onClick={() => setBurgerOpen(false)}>Model X</li>
          <li onClick={() => setBurgerOpen(false)}>Model Y</li>
          <li onClick={() => setBurgerOpen(false)}>Solar Roof</li>
          <li onClick={() => setBurgerOpen(false)}>Solar Pannels</li>
          <li onClick={() => setBurgerOpen(false)}>Trade-In</li>
          <li onClick={() => setBurgerOpen(false)}>Test Drive</li>
          <li onClick={() => setBurgerOpen(false)}>Insurance</li>
          <li onClick={() => setBurgerOpen(false)}>Powerwall</li>
          <li onClick={() => setBurgerOpen(false)}>Commercial Energy</li>
          <li onClick={() => setBurgerOpen(false)}>Utilities</li>
          <li onClick={() => setBurgerOpen(false)}>Charging</li>
          <li onClick={() => setBurgerOpen(false)}>Find Us</li>
          <li onClick={() => setBurgerOpen(false)}>Support</li>
          <li onClick={() => setBurgerOpen(false)}>Investors Relationship</li>
          <li onClick={() => setBurgerOpen(false)}>Shop</li>
          <li onClick={() => setBurgerOpen(false)}>Account</li>
          <li onClick={() => setBurgerOpen(false)}>More...</li>
          <li
            onClick={() => setBurgerOpen(false)}
            className="mt-24 flex items-baseline"
          >
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
  background-color: #00000053;
  z-index: 10;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.4s;
  backdrop-filter: blur(6px);
`;

const BurgerNav = styled.ul`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: #fff;
  width: 300px;
  z-index: 100;
  transition: transform 0.4s;

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

const CustomeClose = styled(IoMdClose)`
  cursor: pointer;
`;
