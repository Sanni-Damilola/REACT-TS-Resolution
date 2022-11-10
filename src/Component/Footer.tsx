import React from "react";
import styled from "styled-components";
import { FaFacebook } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { CiCircleMore } from "react-icons/ci";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { Link } from "react-scroll";

import { HiArrowUp } from "react-icons/hi";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Div>
          <h6>resolution</h6>
          <span>
            Maecenas pellentesque placerat quam, in finibus nisl tincidunt sed.
            Aliquam magna augue, malesuada ut feugiat eget, cursus eget felis.
          </span>
          <Icon>
            <P>
              <FaFacebook />
            </P>
            <P>
              {" "}
              <AiFillInstagram />
            </P>
            <P>
              <AiFillTwitterCircle />
            </P>
          </Icon>
        </Div>
        <Div>
          <h6>Our Link</h6>
          <Nav smooth={true} duration={500} to="home">
            <div>Home</div>
          </Nav>
          <Nav smooth={true} duration={500} to="home">
            <div>about</div>
          </Nav>
          <Nav smooth={true} duration={500} to="home">
            <div>services</div>
          </Nav>
          <Nav smooth={true} duration={500} to="home">
            <div> team</div>
          </Nav>
          <Nav smooth={true} duration={500} to="home">
            <div> blog</div>
          </Nav>
        </Div>
        <Div>
          <h6>Our Service</h6>
          <Nav smooth={true} duration={500} to="home">
            <div>strategy & research</div>
          </Nav>
          <Nav smooth={true} duration={500} to="home">
            <div> web development</div>
          </Nav>
          <Nav smooth={true} duration={500} to="home">
            <div>web solution</div>
          </Nav>
          <Nav smooth={true} duration={500} to="home">
            <div> digital marketing</div>
          </Nav>
          <Nav smooth={true} duration={500} to="home">
            <div>app design</div>
          </Nav>
        </Div>
        <Div>
          <h6>other links</h6>
          <Nav smooth={true} duration={500} to="home">
            <div> FAQ</div>
          </Nav>
          <Nav smooth={true} duration={500} to="home">
            <div>portfolio</div>
          </Nav>
          <Nav smooth={true} duration={500} to="home">
            <div>privacy policy</div>
          </Nav>
          <Nav smooth={true} duration={500} to="home">
            <div>
              terms & <br /> conditions
            </div>
          </Nav>
          <Nav smooth={true} duration={500} to="home">
            <div>support</div>
          </Nav>
        </Div>
        <Div>
          <h6>Our Link</h6>
          <Cw>
            <Circle>
              <BsFillTelephoneFill />
            </Circle>
            <Wrap>
              <div>+234-818-338-9407</div>
              <div>+234-818-338-9407</div>
            </Wrap>
          </Cw>
          <Cw>
            <Circle>
              <IoMail />
            </Circle>
            <Wrap>
              <div>Email: sannfortune</div>
              <div>11@gmai.com</div>
            </Wrap>
          </Cw>
          <Cw>
            <Circle>
              <CiCircleMore />
            </Circle>
            <Wrap>
              <div>https://codelab-</div>
              <div>student.web.app/</div>
            </Wrap>
          </Cw>
        </Div>
      </Wrapper>
      <Techsis>
        © 2022 <span>TechSis</span>. All Right Reserved
      </Techsis>

      <Up smooth={true} duration={500} to="home">
        <div>
          <HiArrowUp />
        </div>
      </Up>
    </Container>
  );
};

export default Footer;

const Up = styled(Link)`
  padding: 16px 17px;
  border-radius: 4px;
  cursor: pointer;
  background-color: #ef1f76;
  right: 1%;
  box-shadow: #ef1f76 0px 8px 24px;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }
  position: fixed;
  bottom: 2%;
`;

const Wrap = styled.div``;

const Cw = styled.div`
  display: flex;
  width: 92%;
  height: 60px;
  justify-content: center;
  align-items: center;
  justify-content: space-between;

  div {
    color: white;
    cursor: pointer;
    font-weight: 500;
    :hover {
      text-decoration: underline;
    }
  }
`;

const Circle = styled.div`
  width: 40px;
  height: 40px;
  background-color: #f1296d;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const P = styled.div`
  padding: 3px 6px;
  color: #ff0066;
  font-size: 20px;
  background-color: white;
  cursor: pointer;

  :hover {
    background-color: transparent;
    color: whitesmoke;
    transition: all 350ms;
  }
`;

const Icon = styled.div`
  width: 52%;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const Techsis = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #111941;
  color: white;
  font-weight: 500;
  span {
    text-decoration: underline;
    margin: 5px;
    color: white;
    font-weight: 500;
    cursor: pointer;
    :hover {
      text-decoration: none;
      transition: all 400ms;
    }
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  height: 400px;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  background-color: #51257c;
  position: relative;
`;
const Wrapper = styled.div`
  display: grid;
  width: 80%;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
  margin-top: 50px;
`;
const Div = styled.div`
  h6 {
    margin: 0;
    font-weight: 700;
    font-size: 23px;
    color: white;
    text-transform: capitalize;
    padding-bottom: 20px;
  }

  span {
    font-size: 15px;
    color: white;
  }
`;
const Nav = styled(Link)`
  div {
    padding-bottom: 10px;
    color: white;
    font-weight: 500;
    cursor: pointer;
    text-transform: capitalize;
    :hover {
      text-decoration: underline;
    }
  }
`;
