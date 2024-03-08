import React from "react";
import styled from "styled-components";
import mainImg from "../logo.svg";

const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SectionInfo = styled.section`
  width: 600px;
  height: 100vh;
  margin: 0 50px;
  background-color: aquamarine;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    margin: 10px 0;
  }
`;
const SectionImg = styled.section`
  width: 350px;
  height: 100vh;
  margin: 0 50px;
  background-color: azure;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 300px;
    height: 70vh;
  }
`;

function Main(props) {
  return (
    <MainWrapper>
      <SectionInfo>
        <p>천준우우우우우</p>
        <p>개발자를 꿈꾸는 천준우\입니다.</p>
        <p>개발자를 꿈꾸는 천준우\입니다.</p>
        <p>개발자를 꿈꾸는 천준우\입니다.</p>
        <p>개발자를 꿈꾸는 천준우\입니다.</p>
        <p>개발자를 꿈꾸는 천준우\입니다.</p>
      </SectionInfo>
      <SectionImg>
        <img src={mainImg}></img>
      </SectionImg>
    </MainWrapper>
  );
}

export default Main;
