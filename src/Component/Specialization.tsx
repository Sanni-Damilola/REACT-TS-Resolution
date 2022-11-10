import React from "react";
import styled from "styled-components";
import { IoTelescopeSharp } from "react-icons/io5";
import { FiMonitor } from "react-icons/fi";
import { BsGlobe } from "react-icons/bs";
import { BiChevronRight } from "react-icons/bi";

const SpecializationComp = () => {
  return (
    <Container id="Services">
      <h1>Our Specialization</h1>
      <Stroke></Stroke>

      <CardHolder>
        <Card>
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24,-23.1C34.4,-19.8,48.5,-15.4,50.7,-8.2C52.8,-0.9,43.1,9.1,36.5,21.6C29.9,34,26.5,48.7,18.7,51.8C10.8,54.9,-1.5,46.3,-18.2,43.1C-34.9,40,-56.1,42.3,-60.3,34.8C-64.6,27.4,-52,10.2,-42,-0.6C-32,-11.5,-24.6,-16,-18,-20C-11.5,-23.9,-5.7,-27.4,0.5,-28C6.8,-28.6,13.5,-26.4,24,-23.1Z"
              transform="translate(100 100)"
            />
          </svg>

          <Hold>
            {" "}
            <h2>Strategy & Research</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
              consectetur voluptatem, molestias consequuntur excepturi
              architecto facilis reiciendis veniam animi minus perferendis
              praesentium laborum placeat sed?
            </p>
          </Hold>
          <Circle>
            <Icon>
              <BiChevronRight />
            </Icon>
          </Circle>
        </Card>
        <Card>
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24,-23.1C34.4,-19.8,48.5,-15.4,50.7,-8.2C52.8,-0.9,43.1,9.1,36.5,21.6C29.9,34,26.5,48.7,18.7,51.8C10.8,54.9,-1.5,46.3,-18.2,43.1C-34.9,40,-56.1,42.3,-60.3,34.8C-64.6,27.4,-52,10.2,-42,-0.6C-32,-11.5,-24.6,-16,-18,-20C-11.5,-23.9,-5.7,-27.4,0.5,-28C6.8,-28.6,13.5,-26.4,24,-23.1Z"
              transform="translate(100 100)"
            />
          </svg>
          <Hold>
            {" "}
            <h2>Strategy & Research</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
              consectetur voluptatem, molestias consequuntur excepturi
              architecto facilis reiciendis veniam animi minus perferendis
              praesentium laborum placeat sed?
            </p>
          </Hold>
          <Circle>
            <Icon>
              <BiChevronRight />
            </Icon>
          </Circle>
        </Card>
        <Card>
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24,-23.1C34.4,-19.8,48.5,-15.4,50.7,-8.2C52.8,-0.9,43.1,9.1,36.5,21.6C29.9,34,26.5,48.7,18.7,51.8C10.8,54.9,-1.5,46.3,-18.2,43.1C-34.9,40,-56.1,42.3,-60.3,34.8C-64.6,27.4,-52,10.2,-42,-0.6C-32,-11.5,-24.6,-16,-18,-20C-11.5,-23.9,-5.7,-27.4,0.5,-28C6.8,-28.6,13.5,-26.4,24,-23.1Z"
              transform="translate(100 100)"
            />
          </svg>
          <Hold>
            {" "}
            <h2>Strategy & Research</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
              consectetur voluptatem, molestias consequuntur excepturi
              architecto facilis reiciendis veniam animi minus perferendis
              praesentium laborum placeat sed?
            </p>
          </Hold>
          <Circle>
            <Icon>
              <BiChevronRight />
            </Icon>
          </Circle>
        </Card>
        <Icon1>
          <IoTelescopeSharp />
        </Icon1>
        <Icon2>
          <FiMonitor />
        </Icon2>
        <Icon3>
          <BsGlobe />
        </Icon3>
      </CardHolder>
    </Container>
  );
};

export default SpecializationComp;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
`;

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-radius: 50%;
  border: 1px solid #ff0066;
  margin-bottom: 50px;
`;

const Icon1 = styled.div`
  font-size: 50px;
  position: absolute;
  top: 36%;
  color: #ff0066;

  :hover {
    color: white;
  }
`;
const Icon2 = styled.div`
  font-size: 50px;
  color: #ff0066;
  position: absolute;

  left: 18%;
  top:36%;
`;
const Icon3 = styled.div`
  font-size: 50px;
  color: #ff0066;
  position: absolute;
  right: 18%;
  top: 36%;
  :hover {
    color: white;
  }
`;

const Hold = styled.div`
  h2 {
    color: #1f2470;
  }
  p {
    color: #1f2470;
    font-weight: 500;
    font-size: 15px;
  }
`;

const Card = styled.div`
  width: 370px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 5px;
  margin-left: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  :hover {
    color: red;
    cursor: pointer;
  }

  path {
    fill: #f7cbdd;
    :hover {
      fill: #ff0066;
      transition: all 350ms;
    }
  }
`;
const CardHolder = styled.div`
  display: flex;
  width: 88%;
  justify-content: space-around;
`;

const Stroke = styled.div`
  height: 10px;
  width: 250px;
  border-radius: 5px;
  background-image: linear-gradient(
    90deg,
    rgba(230, 37, 125, 1) 49%,
    rgba(242, 112, 4, 1) 94%
  );
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
  justify-content: space-around;
  margin-bottom: 30px;
`;
