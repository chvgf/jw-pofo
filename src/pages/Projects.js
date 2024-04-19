import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { GONIMINTON, MYMUNG, POFO } from "../imges";
import Header from "../components/Header";
import GonimintonModal from "../components/GonimintonModal";
import MymungModal from "../components/MymungModal";

const ProjectsWrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 70%;
  max-width: 1100px;
  padding: 4rem 2rem 2rem;
  margin: 0 auto;
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
  }
  h4 {
    font-size: 30px;
    text-align: center;
  }
`;
const ContentBox = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 30px;

  .contentItem {
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 10px;
    width: 950px;
    height: 350px;
    margin: 50px 10px;
    border: 1px solid #eee;
    color: #fff;
    transition: 0.2s;
    cursor: pointer;
    @media (max-width: 1200px) {
      flex-direction: column;
      width: 100%;
      height: 700px;
    }
    &:hover {
      border: 1px solid #ffb400;
      scale: calc(1.03);
    }
    img {
      width: 450px;
      height: 270px;
      margin-right: 20px;
    }
    p {
      font-size: 16px;
      margin: 20px 0;
      span {
        font-size: 16px;
        font-weight: 700;
        color: #ffb400;
      }
    }
  }
`;

function Projects(props) {
  let a = "inTest";
  let b = "outTest";
  let c = "timeOut1";
  let d = "timeOut2";
  let e = "titleAni1";
  let f = "titleAni2";
  const [pageAni, setPageAni] = useState(false);
  const [timeOut, setTimeOut] = useState(false);
  const [TitleAni, setTitleAni] = useState(false);

  const [thumModal1, setThumModal1] = useState(false);
  const [thumModal2, setThumModal2] = useState(false);

  const handleOpenModal = (num) => {
    switch (num) {
      case "1":
        setThumModal1(true);
        break;
      case "2":
        setThumModal2(true);
        break;

      default:
        break;
    }
  };
  const handleCloseMadal = (num) => {
    switch (num) {
      case "1":
        setThumModal1(false);
        break;
      case "2":
        setThumModal2(false);
        break;

      default:
        break;
    }
  };

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

  const currentUrl = window.location.href;
  window.localStorage.setItem("proUrl", currentUrl);

  return (
    <ProjectsWrapper>
      <Header />
      <Title className={`${timeOut ? d : c}`}>
        <h1 className={`${TitleAni ? f : e}`}>
          MY <span>PROJECTS</span>
        </h1>
      </Title>
      <ContentBox className={`${timeOut ? d : c}`}>
        <div
          className="contentItem"
          onClick={() => {
            handleOpenModal("1");
          }}
        >
          {/* 고니민턴 */}
          <img src={GONIMINTON} />
          <div>
            <p>
              <span>고니민턴: </span>
              배드민턴을 치는 사람들이 보다 쉽게 게임 매칭을 하고,
              <br />
              운동을 게임처럼 즐길 수 있도록 컨텐츠를 제공하는
              <br />
              커뮤니티 웹입니다.
              <br />
              주요 기능으로는 실력별 유저간 랜덤 매칭과,
              <br />
              유저간의 커뮤니티입니다.
            </p>
            <p className="URL">
              <a href="https://goniminton.netlify.app/" target="blank">
                <span>URL:</span> https://goniminton.netlify.app
              </a>
            </p>
            <p className="URL">
              <a href="https://github.com/chvgf/teamstrong1000" target="blank">
                <span>Github:</span> https://github.com/chvgf/teamstrong1000
              </a>
            </p>
          </div>
        </div>
        {thumModal1 ? <GonimintonModal /> : ""}
        {thumModal1 ? <GonimintonModal handleCloseMadal={() => handleCloseMadal("1")} /> : ""}
        <div
          className="contentItem"
          onClick={() => {
            handleOpenModal("2");
          }}
        >
          {/* 마이멍 */}
          <img src={MYMUNG} />
          <div>
            <p>
              <span>마이멍: </span>
              초보 견주들이 강아지를 올바르게 키울 수 있도록
              <br />
              맞춤 서비스를 제공하고,
              <br />
              같은 고민을 하는 사람들을 위한 웹입니다.
              <br />
              주요 기능으로는 자신의 강아지 기입 시
              <br />
              품종및 나이등에 맞추어 사료와 물품이 추천됩니다.
            </p>
            <p>
              <a href="https://jwc-mymung.netlify.app/" target="blank">
                <span>URL:</span> https://jwc-mymung.netlify.app
              </a>
            </p>
            <p>
              <a href="https://github.com/chvgf/finalProject" target="blank">
                <span>Github:</span> https://github.com/chvgf/finalProject
              </a>
            </p>
          </div>
        </div>
        {thumModal2 ? <MymungModal /> : ""}
        {thumModal2 ? <MymungModal handleCloseMadal={() => handleCloseMadal("2")} /> : ""}
        <div className="contentItem">
          {/* 포폴사이트 */}
          <img src={POFO} />
          <div>
            <p>천준우 포트폴리오 사이트</p>
            <p>
              <a href="https://jwc-portfolio.netlify.app/" target="blank">
                <span>URL:</span> https://jwc-portfolio.netlify.app
              </a>
            </p>
            <p>
              <a href="https://github.com/chvgf/jw-pofo" target="blank">
                <span>Github:</span> https://github.com/chvgf/jw-pofo
              </a>
            </p>
          </div>
        </div>
      </ContentBox>
      <div className={`${pageAni ? a : b}`}></div>
    </ProjectsWrapper>
  );
}

export default Projects;
