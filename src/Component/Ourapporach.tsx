import React from "react";
import styled from "styled-components";
import { HiOutlineShieldCheck } from "react-icons/hi";

interface props {
  row: string;
  image : string
}

const Ourapporach: React.FC<props> = ({ row, image }) => {
  return (
    <Container>
      <Wrapper row={row}>
        <Div1>
          <h6>Our Approach</h6>
          <br />
          <div>
            <nav>
              <HiOutlineShieldCheck />
            </nav>
            <span>Market-infomed course and curriculum development</span>
          </div>
          <div>
            <nav>
              <HiOutlineShieldCheck />
            </nav>
            <span>parthnership for beneficiary selection</span>
          </div>
          <div>
            <nav>
              <HiOutlineShieldCheck />
            </nav>
            <span>Tranning and skil development</span>
          </div>
          <div>
            <nav>
              <HiOutlineShieldCheck />
            </nav>
            <span>virtual intenship</span>
          </div>
          <div>
            <nav>
              <HiOutlineShieldCheck />
            </nav>
            <span>job readiness</span>
          </div>
          <div>
            <nav>
              <HiOutlineShieldCheck />
            </nav>
            <span>job linkages through parthnership</span>
          </div>
        </Div1>

        <Div2>
          <Image src={image} />
        </Div2>
      </Wrapper>
    </Container>
  );
};

export default Ourapporach;

const Image = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  border-radius: 15px;
`;

const Div1 = styled.div`
  width: 40%;

  h6 {
    font-size: 20px;
    color: darkblue;
    margin: 0;
    padding-bottom: 5px;
  }

  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    color: green;
    margin-right: 4px;
    font-size: 16px;
    cursor: pointer;
  }

  div {
    display: flex;
    padding-bottom: 13px;
  }

  span {
    font-size: 15px;
    font-weight: 500;
    color: rgb(0, 0, 0, 0.6);
  }
`;
const Div2 = styled.div`
  width: 50%;
  height: 80%;
`;

const Wrapper = styled.div<{ row: string }>`
  width: 80%;
  height: 75%;
  border: 1px solid lightgreen;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${({ row }) => (row ? "row-reverse" : "row")};
  justify-content: space-around;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 600px;
  background-color: whitesmoke;
`;
