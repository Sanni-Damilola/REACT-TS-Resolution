import React from "react";
import styled from "styled-components";

interface props {
  h6text: string;
  pg: string;
  Iconp: any;
}

const Featuresprops: React.FC<props> = ({ h6text, pg, Iconp }) => {
  return (
    <Container>
      <Icon>{Iconp}</Icon>
      <Text>
        <H6>{h6text}</H6>
        <P>{pg}</P>
      </Text>
    </Container>
  );
};

export default Featuresprops;

const H6 = styled.div`
  color: #1f2470;
  font-size: 23px;
  font-weight: 700;
`;
const P = styled.p`
  font-weight: 500;
  font-size: 17px;
  color: #1f2470;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Text = styled.div`
  width: 65%;
`;
const Icon = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  background-color: #412374;
  color: white;
`;
