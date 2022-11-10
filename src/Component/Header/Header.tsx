import React from "react";
import styled from "styled-components";
import { BiChevronRight } from "react-icons/bi";
import { Link } from "react-scroll";

const Header = () => {
  const [show, setShow] = React.useState(false);

  const changeHeaderColor = () => {
    if (window.scrollY >= 70) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  window.addEventListener("scroll", changeHeaderColor);

  return (
    <>
      {show ? (
        <Container bg="white">
          <Wrapper>
            <Resolution cl="rgb(88, 43, 129)">Resolution</Resolution>
            <Div2 cl="rgb(88, 43, 129)">
              <Nav smooth={true} duration={500} to="home">
                home
              </Nav>
              <Nav smooth={true} duration={500} to="about">
                about
              </Nav>
              <Nav smooth={true} duration={500} to="Services">
                Services
              </Nav>
              <Nav smooth={true} duration={500} to="features">
                features
              </Nav>
              <Nav smooth={true} duration={500} to="blog">
                blog
              </Nav>
              <Nav smooth={true} duration={500} to="contact us">
                contact us
              </Nav>
              <Button>
                <div>
                  <BiChevronRight />
                </div>
                get a quote
              </Button>
            </Div2>
          </Wrapper>
        </Container>
      ) : (
        <Container bg="rgb(88, 43, 129)">
          <Wrapper>
            <Resolution cl="white">Resolution</Resolution>
            <Div2 cl="white">
              <Nav smooth={true} duration={500} to="home">
                home
              </Nav>
              <Nav smooth={true} duration={500} to="about">
                about
              </Nav>
              <Nav smooth={true} duration={500} to="Services">
                Services
              </Nav>
              <Nav smooth={true} duration={500} to="features">
                features
              </Nav>
              <Nav smooth={true} duration={500} to="blog">
                blog
              </Nav>
              <Nav smooth={true} duration={500} to="contact us">
                contact us
              </Nav>
              <Button>
                <div>
                  <BiChevronRight />
                </div>
                get a quote
              </Button>
            </Div2>
          </Wrapper>
        </Container>
      )}
    </>
  );
};

export default Header;

const Nav = styled(Link)`
  font-weight: 700;
  font-size: 16px;
  text-transform: capitalize;
  margin-right: 30px;
  cursor: pointer;
`;

const Button = styled.button`
  display: flex;
  background: linear-gradient(90deg, #f01f6e, #f65466);
  border: 0;
  padding: 14px 35px;
  border-radius: 0 20px 0 20px;
  outline: none;
  justify-content: space-around;
  align-items: center;
  color: white;
  text-transform: capitalize;
  font-weight: 600;
  cursor: pointer;

  :hover {
    background: linear-gradient(#f97461, #fc915c);
    /* background-color: black; */
    transition: all 400ms;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    color: white;
  }
`;
const Wrapper = styled.div`
  width: 87%;
  height: 100%;
  display: flex;
  justify-content: space-between;

  align-items: center;
`;

const Container = styled.div<{ bg: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80px;
  background-color: ${(props) => props.bg};
  position: sticky;
  top: 0;
  z-index: 999;
  transition: all 400ms;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const Resolution = styled.h1<{ cl: string }>`
  margin: 0;
  color: ${(props) => props.cl};
  cursor: pointer;
  font-weight: bold;
`;
const Div2 = styled.div<{ cl: string }>`
  color: ${(props) => props.cl};
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
