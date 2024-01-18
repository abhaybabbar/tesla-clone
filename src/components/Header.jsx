import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MdMenu, MdClose } from "react-icons/md";
import burgerNavData from "./../helper/burgerNav.json";

const Header = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const [showFullNav, setShowFullNav] = useState(true);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setShowFullNav(scrollTop < 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container>
      <Logo>
        <Link to="/">
          <img src="/images/logo.svg" alt="" />
        </Link>
      </Logo>
      {showFullNav && (
        <Menu>
          <Link to="/">Model S</Link>
          <Link to="/">Model 3</Link>
          <Link to="/">Model X</Link>
          <Link to="/">Model Y</Link>
        </Menu>
      )}
      <RightMenu>
        {showFullNav && (
          <>
            <Link to="/">Shop</Link>
            <Link to="/">Account</Link>
          </>
        )}
        <CustomMenu onClick={() => setBurgerOpen(true)} />
      </RightMenu>
      <BurgerNav show={burgerOpen}>
        <CustomClose onClick={() => setBurgerOpen(false)} />
        {burgerNavData.map(({ link, text }, index) => {
          return (
            <li>
              <Link to={link}>{text}</Link>
            </li>
          );
        })}
      </BurgerNav>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  z-index: 10;
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  width: 100%;
`;

const Logo = styled.div`
  flex-basis: 0;
  flex-grow: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }

  @media (max-width: 992px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  flex-basis: 0;
  flex-grow: 1;

  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 20px;
    flex-wrap: nowrap;
  }
`;

const CustomMenu = styled(MdMenu)`
  cursor: pointer;
  font-size: 22px;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  z-index: 100;
  padding: 20px;
  list-style: none;
  overflow-x: auto;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s ease-in;

  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
      font-weight: 600;
    }
  }
`;

const CustomClose = styled(MdClose)`
  display: flex;
  font-size: 22px;
  margin-left: auto;
  cursor: pointer;
`;
