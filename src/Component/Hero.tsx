import React from "react";
import styled from "styled-components";
import imgg from "./Asset/hero.png";
const Hero = () => {
  return (
    <Container id="home">
      <Wrapper2>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </Wrapper2>
      <Content>
        <First>
          <h3>We are Web Developers from Nigeria</h3>

          <h1>
            We build and Deploy <br /> websites that Users <br /> Love
          </h1>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda,
            <br />
            laboriosam. Ad quas odio quibusdam iure reiciendis sapiente, rerum{" "}
            <br />
            ducimus perspiciatis.
          </p>
          <Button>Learn More</Button>
        </First>
        <Second>
          <img src={imgg} />
        </Second>
      </Content>
    </Container>
  );
};

export default Hero;
const Button = styled.div`
  height: 45px;
  width: 150px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0px 20px 0px 20px;
  /* background-image: linear-gradient(
    90deg,
    rgba(230, 37, 125, 1) 49% rgba(242, 112, 4, 1) 94%
  ); */
  background-image: linear-gradient(90deg, #e6257d, #fc8a4c);
  transition: all 0.5s ease;
  border: 0;
  margin-left: 10px;
  margin-right: 10px;

  :hover {
    cursor: pointer;
  }
`;
const First = styled.div``;
const Second = styled.div`
  margin-left: 20px;
  width: 45%;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
const Content = styled.div`
  position: absolute;
  width: 86%;
  display: flex;
  /* align-items: center;
   */

  h3 {
    color: orange;
  }

  p {
    color: white;
    font-size: 18px;
  }
  h1 {
    color: white;
    font-size: 60px;
  }
`;
const Container = styled.div`
  height: 800px;
  width: 100%;
  position: relative;
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div``;
const Wrapper2 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;

  svg {
    position: relative;
    display: block;
    width: calc(294% + 1.3px);
    height: 800px;
    transform: rotateY(180deg);
  }
  path {
    fill: rgb(88, 43, 129);
  }
`;
