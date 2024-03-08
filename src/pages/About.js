import React from "react";
import styled from "styled-components";

const AboutWrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.div`
  background-color: antiquewhite;
  h1 {
    font-size: 60px;
    font-weight: 700;
    margin: 30px 0;
    text-align: center;
  }
  h3 {
    color: aliceblue;
    font-size: 40px;
    margin: 30px 0;
    text-align: center;
  }
`;
const ContentBox = styled.section`
  background-color: bisque;
  display: flex;
  flex-wrap: wrap;
  width: 888px;
  margin: 30px 0;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 150px;
    margin: 20px 10px;
    background-color: #000;
    border: 1px solid blue;
    color: #fff;
  }
`;

function About(props) {
  return (
    <AboutWrapper>
      <Title>
        <h1>제모ㅓ모목</h1>
        <h3>부재모고곡</h3>
      </Title>
      <ContentBox>
        <div>기술1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
      </ContentBox>
    </AboutWrapper>
  );
}

export default About;
