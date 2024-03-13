import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { MdCall, MdSchool, MdPerson } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import HTML from "../imges/HTML";
import { AWS, CSS, JS, REACT, REDUX, NEXTJS, NODEJS, EXPRESSJS, MONGODB, NETLIFY, CLOUDTYPE, TRELLO, FIGMA, GITHUB } from "../imges";
import { useLocation } from "react-router-dom";

const AboutWrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  .aboutBox {
    width: 70%;
    max-width: 1100px;
    padding: 4rem 2rem 2rem;
    h3 {
      font-size: 48px;
      font-family: "GongGothicBold";
      text-decoration: underline 1px;
      text-underline-offset: 20px;
      padding: 10px 0;
      margin-bottom: 60px;
    }
    ul {
      width: 70%;
      padding: 30px 0;
      margin: 0 auto;
      background-color: #fff;
      border-radius: 30px;
      box-shadow: rgba(149, 160, 165, 0.2) 0px 8px 24px;
      font-size: 20px;

      li span.underline {
        font-size: 30px;
        background: linear-gradient(
          90deg,
          rgba(2, 0, 36, 1) 0%,
          rgba(94, 182, 45, 1) 0%,
          rgba(76, 186, 139, 0.9) 50%,
          rgba(0, 212, 255, 1) 100%
        );
        background-position: bottom;
        background-size: 100% 30%;
        background-repeat: no-repeat;
      }
      li + li {
        margin-top: 30px;
      }
    }
    .info {
      width: 100%;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      padding: 30px;
      justify-content: center;
      align-items: center;
    }
    .info > .infoBox {
      width: 330px;
      height: 130px;
      min-width: 245px;
      font-size: 20px;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      padding: 30px;
      box-shadow: rgba(149, 160, 165, 0.4) 0px 8px 24px;
      border-radius: 20px;
      margin: 14px;

      .icon {
        font-size: 40px;
      }
      .content {
        font-family: "GongGothicBold";
      }
      .text {
        font-size: 16px;
        font-family: "GongGothicMedium";
      }
    }
  }
`;
const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    font-size: 60px;
    font-weight: 700;
    margin: 30px 0;
    text-align: center;
  }
  h3 {
    font-size: 40px;
    text-align: center;
    margin-top: 30px;
  }
  h4 {
    font-size: 30px;
    text-align: center;
  }
`;
const ContentBox = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 888px;
  margin: 0 auto;
  margin-bottom: 30px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    width: 200px;
    height: 150px;
    margin: 20px 10px;
    border: 1px solid #eee;
    color: #fff;
    .img {
      width: 150px;
      height: 150px;
    }
  }
`;

function About(props) {
  let a = "inTest";
  let b = "outTest";
  let c = "timeOut1";
  let d = "timeOut2";
  const [pageAni, setPageAni] = useState(false);
  const [timeOut, setTimeOut] = useState(false);
  setTimeout(() => {
    setTimeOut(true);
  }, 200);
  useEffect(() => {
    setPageAni(true);
  }, []);
  const loc = useLocation();
  // console.log(loc);
  return (
    <AboutWrapper className={`${timeOut ? d : c}`}>
      <div className="aboutBox">
        <Title>
          <h1>ABOUT ME</h1>
          <div className="info">
            <div className="infoBox">
              <div className="icon">
                <MdPerson />
              </div>
              <div className="content">
                Name:
                <span className="text"> 천준우</span>
                <br />
                <hr />
                DOB:
                <span className="text"> 1996.08.05</span>
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
                <span className="text">chvgf @naver.com</span>
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
          <br />
          <br />
          <h4>FrontEnd</h4>
          <ContentBox>
            <div>
              <HTML className="img" alt="HTML" />
            </div>
            <div>
              <img className="img" src={CSS} alt="CSS" />
            </div>
            <div>
              <img className="img" src={JS} alt="JS" />
            </div>
            <div>
              <img className="img" src={REACT} alt="REACT" />
            </div>
            <div>
              <img className="img" src={REDUX} alt="REDUX" />
            </div>
            <div>
              <img className="img" src={NEXTJS} alt="NEXTJS" />
            </div>
          </ContentBox>
          <h4>Backend</h4>
          <ContentBox>
            <div>
              <img className="img" src={NODEJS} alt="NODEJS" />
            </div>
            <div>
              <img className="img" src={EXPRESSJS} alt="EXPRESSJS" />
            </div>
            <div>
              <img className="img" src={MONGODB} alt="MONGODB" />
            </div>
          </ContentBox>
          <h4>Deployment</h4>
          <ContentBox>
            <div>
              <img className="img" src={AWS} alt="AWS" />
            </div>
            <div>
              <img className="img" src={NETLIFY} alt="NETLIFY" />
            </div>
            <div>
              <img className="img" src={CLOUDTYPE} alt="CLOUDTYPE" />
            </div>
          </ContentBox>
          <h4>Cooperation</h4>
          <ContentBox>
            <div>
              <img className="img" src={TRELLO} alt="TRELLO" />
            </div>
            <div>
              <img className="img" src={FIGMA} alt="FIGMA" />
            </div>
            <div>
              <img className="img" src={GITHUB} alt="GITHUB" />
            </div>
          </ContentBox>
        </Title>
      </div>
      <div className={`${pageAni ? a : b}`}></div>
    </AboutWrapper>
  );
}

export default About;
