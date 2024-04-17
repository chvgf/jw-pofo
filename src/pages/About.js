import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { MdCall, MdSchool, MdPerson } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import HTML from "../imges/HTML";
import { AWS, CSS, JS, REACT, REDUX, NEXTJS, NODEJS, EXPRESSJS, MONGODB, NETLIFY, CLOUDTYPE, TRELLO, FIGMA, GITHUB } from "../imges";
import Header from "../components/Header";

const AboutWrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;

  .aboutBox {
    width: 70%;
    max-width: 1100px;
    padding: 4rem 2rem 2rem;
    justify-content: center;
    text-align: center;
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
      justify-content: center;
      align-items: center;
      margin: 0 auto;
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
        font-size: 14px;
        font-family: "GongGothicMedium";
      }
    }
    // skill
    .info > .skillInfoBox {
      width: 200px;
      height: 280px;
      min-width: 245px;
      font-size: 20px;
      display: flex;
      align-items: center;
      flex-direction: column;
      padding: 15px;
      box-shadow: rgba(149, 160, 165, 0.4) 0px 8px 24px;
      border-radius: 20px;
      margin: 12px;
      &:hover {
        scale: 1.1;
        transition: 0.2s ease-out;
      }

      .icon {
        height: 75px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
        .img {
          width: 65px;
          height: 65px;
          border-radius: 15px;
        }
        span {
          color: #ffb400;
          font-size: 15px;
        }
      }
      .skillContent {
        text-align: left;
      }
      .skillTextbox {
        display: flex;
        margin: 15px 0;
      }
      .skillTextbox::before {
        content: "ㅡ";
        margin: 0 10px;
        color: #ffb400;
      }
      .skillText {
        font-size: 14px;
        line-height: 19px;
        letter-spacing: 1px;
        font-weight: 300;
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
    span {
      color: #ffb400;
    }
  }
  h3 {
    font-size: 40px;
    text-align: center;
    margin-top: 60px;
    margin-bottom: 10px;
    text-decoration: underline 1px;
    text-underline-offset: 20px;
  }
  h4 {
    font-size: 30px;
    text-align: center;
    margin: 60px 0 15px 0;
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
      width: 100px;
      height: auto;
    }
  }
`;

function About(props) {
  let a = "inTest";
  let b = "outTest";
  let c = "timeOut1";
  let d = "timeOut2";
  let e = "titleAni1";
  let f = "titleAni2";
  const [pageAni, setPageAni] = useState(false);
  const [timeOut, setTimeOut] = useState(false);
  const [TitleAni, setTitleAni] = useState(false);

  setTimeout(() => {
    setTimeOut(true);
  }, 500);

  useEffect(() => {
    setPageAni(true);
    setTitleAni(true);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <AboutWrapper>
      <Header />
      <div className="aboutBox">
        <Title className={`${timeOut ? d : c}`}>
          <h1 className={`${TitleAni ? f : e}`}>
            ABOUT <span>ME</span>
          </h1>
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
          {/* skill */}
          <h3>SKILLS</h3>
          <br />
          <br />
          {/* Frontend */}
          <h4>Frontend</h4>
          <div className="info">
            {/* html */}
            <div className="skillInfoBox">
              <div className="icon">
                <HTML className="img" alt="HTML" />
                <span>&nbsp;:HTML/CSS</span>
              </div>
              <div className="skillContent">
                <div className="skillTextbox">
                  <span className="skillText"> 원하는 UI를 실용적이고, 익숙하게 만들어낼 수 있습니다.</span>
                </div>
                <div className="skillTextbox">
                  <span className="skillText"> 시멘틱 태그를 활용한 명시적인 구조의 설계가 가능합니다.</span>
                </div>
                <div className="skillTextbox">
                  <span className="skillText"> 최신 css 문법을 숙지하여 트렌디한 UI를 만들 수 있습니다.</span>
                </div>
              </div>
            </div>
            {/* js */}
            <div className="skillInfoBox">
              <div className="icon">
                <img className="img" src={JS} alt="JS" />
                <span>&nbsp;:Javascript</span>
              </div>
              <div className="skillContent">
                <div className="skillTextbox">
                  <span className="skillText"> ES6와 최신의 자바스크립트 문법을 사용할 수 있습니다.</span>
                </div>
                <div className="skillTextbox">
                  <span className="skillText"> jQuery등을 사용하지 않고 Vanilla Js 의 웹 제작이 가능합니다.</span>
                </div>
                <div className="skillTextbox">
                  <span className="skillText"> 여러가지 메서드 활용을 통한 간결하고 직관적인 코딩이 가능합니다.</span>
                </div>
              </div>
            </div>
            {/* react */}
            <div className="skillInfoBox">
              <div className="icon">
                <img className="img" src={REACT} alt="REACT" />
                <span>&nbsp;:React</span>
              </div>
              <div className="skillContent">
                <div className="skillTextbox">
                  <span className="skillText"> 컴포넌트의 생명주기와 속성을 이해하여 활용할 수 있습니다.</span>
                </div>
                <div className="skillTextbox">
                  <span className="skillText"> 다양한 훅 사용을 통한 여러가지 방식의 react활용이 가능합니다.</span>
                </div>
                <div className="skillTextbox">
                  <span className="skillText"> Component를 자유롭게 나눌 수 있으며 props의 흐름을 이해하고 있습니다.</span>
                </div>
              </div>
            </div>
            {/* redux */}
            <div className="skillInfoBox">
              <div className="icon">
                <img className="img" src={REDUX} alt="REDUX" />
                <span>&nbsp;:rdeux</span>
              </div>
              <div className="skillContent">
                <div className="skillTextbox">
                  <span className="skillText"> Redux Store를 통해 전역 상태 관리를 할 수 있습니다.</span>
                </div>
              </div>
            </div>
            {/* nextJs */}
            <div className="skillInfoBox">
              <div className="icon">
                <img className="img" src={NEXTJS} alt="NEXTJS" />
                <span>:Next.js</span>
              </div>
              <div className="skillContent">
                <div className="skillTextbox">
                  <span className="skillText"> SSR 방식의 서버 렌더링을 활용하여 검색엔진을 최적화 시킬 수 있습니다.</span>
                </div>
                <div className="skillTextbox">
                  <span className="skillText"> 파일 시스템 기반의 라우팅 구조를 이해하여 쉽게 페이지를 생성, 관리할 수 있습니다.</span>
                </div>
              </div>
            </div>
          </div>
          {/* Backend */}
          <h4>Backend</h4>
          <div className="info">
            {/* Node.js */}
            <div className="skillInfoBox">
              <div className="icon">
                <img className="img" src={NODEJS} alt="NODEJS" />
                <span>&nbsp;:Node.js</span>
              </div>
              <div className="skillContent">
                <div className="skillTextbox">
                  <span className="skillText"> 모델, 라우터, 컨트롤러, 서비스를 나누어 구조화된 서버를 만들 수 있습니다.</span>
                </div>
                <div className="skillTextbox">
                  <span className="skillText"> Js를 활용한 Node.js 의 작동 방식을 이해하고 활용할 수 있습니다.</span>
                </div>
                <div className="skillTextbox">
                  <span className="skillText"> ejs 문법을 사용할 수 있습니다.</span>
                </div>
              </div>
            </div>
            {/* Express.js */}
            <div className="skillInfoBox">
              <div className="icon">
                <img className="img" src={EXPRESSJS} alt="EXPRESSJS" />
                <span>&nbsp;:Express.js</span>
              </div>
              <div className="skillContent">
                <div className="skillTextbox">
                  <span className="skillText"> Express 프레임워크를 활용하여 Restful API 서버를 만들 수 있습니다.</span>
                </div>
              </div>
            </div>
            {/* MongoDb */}
            <div className="skillInfoBox">
              <div className="icon">
                <img className="img" src={MONGODB} alt="MONGODB" />
                <span>&nbsp;:MongoDB</span>
              </div>
              <div className="skillContent">
                <div className="skillTextbox">
                  <span className="skillText"> NoSQL을 이해하고 MongoDB Atlas를 사용 할 수 있습니다.</span>
                </div>
                <div className="skillTextbox">
                  <span className="skillText"> 비교,논리,쿼리 연산자등을 활용하여 데이터를 서버에 업데이트할 수 있습니다. </span>
                </div>
              </div>
            </div>
          </div>
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
      {<div className={`${window.localStorage.getItem("proUrl") ? (pageAni ? b : a) : pageAni ? a : b}`}></div>}
      {/* <div className={`${pageAni ? b : a}`}></div> */}
    </AboutWrapper>
  );
}

export default About;
