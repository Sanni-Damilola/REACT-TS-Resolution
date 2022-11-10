import React from "react";
import styled from "styled-components";
import AgencyImage from "./Asset/about-banner.png";
const AgencyComp = () => {
  return (
    <Container id="about">
      <First>
        <AgencyImg src={AgencyImage} />
      </First>
      <Second>
        <h1>Why Our Agency</h1>
        <Stroke></Stroke>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis,
          provident <br /> beatae, repellat asperiores sequi error esse
          assumenda quibusdam <br /> cumque, alias non earum explicabo sit
          officiis dignissimos architecto <br /> accusantium natus dolore nobis
          blanditiis consequatur! Sunt, at! <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
          quaerat. Quos reiciendis officiis nulla beatae illo deleniti molestias
          distinctio eius?
        </p>
        <CardHolder>
          <Card>
            <Numb>9875</Numb>
            <span>Satisfied Clients</span>
          </Card>
          <Card>
            <Numb>9875</Numb>
            <span>Satisfied Clients</span>
          </Card>
          <Card>
            <Numb>9875</Numb>
            <span>Satisfied Clients</span>
          </Card>
        </CardHolder>
      </Second>
    </Container>
  );
};

export default AgencyComp;

const CardHolder = styled.div`
  display: flex;
`;
const Numb = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
const Card = styled.div`
  height: 100px;
  width: 150px;
  margin-right: 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;

  h2 {
    margin-bottom: 5px;
  }
  :hover {
    cursor: pointer;

    transform: scale(1.1);
  }
`;

const Stroke = styled.div`
  background-image: linear-gradient(90deg, #e6257d, #fc8a4c);
  height: 5px;
  width: 200px;
  border-radius: 5px;
`;
const AgencyImg = styled.img`
  /* height: 100%;
  width: 100%;
  object-fit: cover; */
`;

const Container = styled.div`
  display: flex;
  height: 800px;
  width: 100%;
  position: relative;
  /* display: flex; */
  overflow: hidden;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
`;
const First = styled.div``;
const Second = styled.div`
  margin-top: 20px;
  h1 {
    color: #1f2470;
  }
  p {
    color: grey;
    font-size: 20px;
  }
`;
