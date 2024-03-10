import React from "react";
import styled from "styled-components";
import { MdCall, MdSchool, MdPerson } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { AWS } from "../imges";

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
        <h1>ABOUT ME</h1>
        <div className="info">
          <div className="infoBox">
            <div className="icon">
              <MdPerson />
            </div>
            <div className="content">
              이름
              <br />
              <hr />
              <span className="text">천준우</span>
            </div>
          </div>
          <div className="infoBox">
            <div className="icon">
              <MdCall />
            </div>
            <div className="content">
              연락처
              <br />
              <hr />
              <span className="text">010-3704-4593</span>
            </div>
          </div>
          <div className="infoBox">
            <div className="icon">
              <IoIosMail />
            </div>
            <div className="content">
              이메일
              <br />
              <hr />
              <span className="text">
                chvgf
                <br />
                @naver.com
              </span>
            </div>
          </div>
          <div className="infoBox">
            <div className="icon">
              <MdSchool />
            </div>
            <div className="content">
              학력
              <br />
              <hr />
              <span className="text">
                세명 대학교
                <br />
                글로벌경영학부
              </span>
            </div>
          </div>
        </div>
        <h3>SKILLS</h3>
        <ContentBox>
          <div>
            <img className="img" src={AWS} alt="AWS" />
          </div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
        </ContentBox>
      </Title>
    </AboutWrapper>
  );
}

export default About;
