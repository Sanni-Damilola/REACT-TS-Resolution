import React from "react";
import styled from "styled-components";
import Featuresprops from "./Featuresprops";
import img from "./Asset/feautres-banner.png";
import { BsLightbulb, BsCodeSlash } from "react-icons/bs";
import { IoColorPaletteOutline, IoRocketOutline } from "react-icons/io5";

const Features = () => {
  return (
    <Container id="features">
      <h6>Our Features</h6>
      <Stroke></Stroke>
      <Wrapper>
        <Rightdiv>
          <Div>
            <Featuresprops
              h6text="Idea & Analysis"
              pg="Praesent tincidunt congue est ut hendrerit. Pellentesque et eros sit amet ipsum venenatis."
              Iconp={<BsLightbulb />}
            />
          </Div>
          <Div>
            <Featuresprops
              h6text="Designing"
              pg="Praesent tincidunt congue est ut hendrerit. Pellentesque et eros sit amet ipsum venenatis."
              Iconp={<IoColorPaletteOutline />}
            />
          </Div>
        </Rightdiv>
        <Image src={img} />
        <Leftdiv>
          <Div>
            <Featuresprops
              h6text="Development"
              pg="Praesent tincidunt congue est ut hendrerit. Pellentesque et eros sit amet ipsum venenatis."
              Iconp={<BsCodeSlash />}
            />
          </Div>
          <Div>
            <Featuresprops
              h6text="Testing and Launching"
              pg="Praesent tincidunt congue est ut hendrerit. Pellentesque et eros sit amet ipsum venenatis."
              Iconp={<IoRocketOutline />}
            />
          </Div>
        </Leftdiv>
      </Wrapper>
    </Container>
  );
};

export default Features;

const Div = styled.div``;

const Stroke = styled.div`
  height: 10px;
  width: 250px;
  border-radius: 5px;
  background-image: linear-gradient(
    90deg,
    rgba(230, 37, 125, 1) 49%,
    rgba(242, 112, 4, 1) 94%
  );
  margin-top: 15px;
`;

const Wrapper = styled.div`
  width: 85%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-around;
`;

const Container = styled.div`
  width: 100%;
  height: 500px;
  flex-direction: column;
  display: flex;
  justify-content: center;
  justify-content: space-around;
  align-items: center;
  h6 {
    font-weight: 700;
    font-size: 40px;
    margin: 0;
    color: #1f2470;
  }
`;
const Rightdiv = styled.div`
  height: 90%;
  width: 34%;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const Leftdiv = styled.div`
  height: 90%;
  width: 34%;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const Image = styled.img`
  width: 30%;
  object-fit: cover;
`;
