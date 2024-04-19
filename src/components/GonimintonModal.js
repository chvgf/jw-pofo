import React from "react";
import { styled } from "styled-components";
import { FaGithub } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AWS, JS, REACT, REDUX, NEXTJS, NODEJS, EXPRESSJS, MONGODB, NETLIFY, CLOUDTYPE, TRELLO, FIGMA, GITHUB, GITHUB2 } from "../imges";

const ModalBg = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: gray;
  background-color: rgba(0, 0, 0, 0.7);
  background-attachment: fixed;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalBox = styled.div`
  width: 60rem;
  height: 30rem;
  border-radius: 30px;
  padding: 50px 50px;
  @media (max-width: 960px) {
    height: 45rem;
  }

  .headerBox {
    position: relative;
    text-align: center;
    margin-bottom: 30px;
  }
  .headerBox .closeBtn {
    position: absolute;
    right: 0;
    font-size: 40px;
    cursor: pointer;
    transition: 1s;
    &:hover {
      color: #ffb400;
      transition: 0.5s;
    }
  }

  .headerBox p {
    font-family: "Gowun Batang", serif;
    font-weight: 400;
    font-style: normal;
    font-size: 1.2rem;
  }

  .detailBox {
    display: flex;
    align-items: center;
    gap: 20px;
    @media (max-width: 960px) {
      flex-direction: column;
    }
  }
  .textBox .toolTextIcon {
    font-size: 18px;
  }
  .textBox p {
    @media (max-width: 740px) {
      font-size: 12px;
    }
  }

  .toolText.be {
    background: #bcbcbc69;
  }
  .textBox .toolText {
    display: inline-block;
    font-family: "Gowun Batang", serif;
    font-weight: 400;
    font-style: normal;
    border-radius: 8px;
    border: 1px solid gray;
    padding: 3px 3px;
    margin-left: 5px;
    margin-bottom: 5px;
  }

  .git {
    text-decoration: none;
    margin-top: 10px;
    background: black;
    color: white;
    border: none;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background: gray;
      transition: 0.3s;
    }
  }

  .summaryHeader {
    margin: 10px 0 20px 0;
  }
  .summaryTextBox {
    font-weight: 400;
    font-style: normal;
    padding-left: 10px;
    font-size: 14px;
  }
  .summaryTextBox p + p {
    margin-top: 5px;
  }
  .summaryInfo span {
    line-height: 1.2rem;
    margin-top: 10px;
  }
  .summaryInfo span {
    display: flex;
    &::before {
      content: "ㅡ";
      margin: 0 10px;
      color: #ffb400;
      /* display: block; */
    }
  }
  .sliderBox {
    width: 300px;
    height: auto;
  }
`;

const StyledSlide = styled(Slider)`
  & div {
    position: relative;
  }

  .slick-list {
    width: 240px;
    background-color: #cccccc;
    overflow: hidden;
  }

  .slick-prev,
  .slick-next {
    position: absolute;
    z-index: 1;
  }
  .slick-prev {
    left: 30px;
    @media (max-width: 960px) {
      left: 0;
    }
  }
  .slick-next {
    right: 48px;
    @media (max-width: 960px) {
      right: 80px;
    }
  }
  .slick-active button::before {
    background-color: #ffb400;
    border-radius: 33px;
  }
  button::before {
    background-color: #eee;
    border-radius: 33px;
  }

  .slick-prev:before,
  .slick-next:before {
    font-family: "slick";
    font-size: 40px;
    line-height: 1;
    opacity: 0.75;
    color: #ffb400;
    background-color: transparent;
    -webkit-font-smoothing: antialiased;
  }
  .img {
    width: 250px;
    height: 200px;
    @media (max-width: 960px) {
      width: 180px;
      height: 130px;
    }
  }
  .slideSummary {
    font-size: 14px;
    line-height: 1.2rem;
    letter-spacing: 0.5px;
  }
`;

function goniModal({ handleCloseMadal }) {
  const settings = {
    arrows: true, // 양 끝 화살표 생성여부
    dots: true, // 슬라이더 아래에 슬라이드 개수를 점 형태로 표시
    infinite: true, // 슬라이드가 맨 끝에 도달했을 때 처음 슬라이드를 보여줄지 여부
    slidesToShow: 1, // 화면에 한번에 표시할 슬라이드 개수 설정
    slidesToScroll: 1, // 옆으로 스크롤할 때 보여줄 슬라이드 수 설정
    speed: 500, // 슬라이드 넘길 때 속도
    autoplay: true, // 슬라이드를 자동으로 넘길지 여부
    autoplaySpeed: 3000, // 자동으로 넘길 시 시간 간격
  };

  return (
    <ModalBg>
      <ModalBox>
        <div className="headerBox">
          <p className="closeBtn" onClick={() => handleCloseMadal()}>
            ✖
          </p>
          <h1>GoniMinton</h1>
          <p>🏸배드민턴 매칭 및 커뮤니티 웹서비스</p>
        </div>
        <div className="detailBox">
          <div className="imgBox"></div>
          <div className="textBox">
            <p>
              <span className="toolTextIcon">* 기술스택: </span>
              <span className="toolText">React</span>
              <span className="toolText">Rudex</span>
              <span className="toolText">Aioxs</span>
              <span className="toolText">styled-components</span>
              <span className="toolText">react-router-dom</span>
              <span className="toolText be">MongoDB</span>
              <span className="toolText be">Node.js</span>
              <span className="toolText be">Express</span>
              <span className="toolText be">Passport</span>
            </p>
            <a href="https://github.com/chvgf/teamstrong1000" target="_blank" rel="noreferrer noopener" className="toolText git">
              <FaGithub /> Github FE
            </a>
            <a href="https://github.com/chvgf/teamServer" target="_blank" rel="noreferrer noopener" className="toolText git">
              <FaGithub /> Github BE
            </a>
            <p className="summaryHeader">* Summary</p>
            <div className="summaryTextBox">
              <p>· 팀원 구성: 풀스택2, 디자인+풀스택1</p>
              <p className="summaryInfo">
                <span>동네에서 배드민턴을 간편하게 게임처럼 즐길 수 있으면 어떨까 하는 생각에서 개발하게 되었습니다.</span>
                <span>유저간의 소통을 위한 커뮤니티 기능이 있습니다. </span>
                <span>경기 모집글을 등록해 청을 받고 경기가 끝난 후 승패 여부를 기록하여 승률을 기록합니다.</span>
                <span>경기 등록/신청/종료 시 내일정 calender에 실시간 기록됩니다.</span>
                <span>클럽을 개설하여 클럽원을 모집하고 클럽들 간의 순위를 표기합니다.</span>
                <span>회원가입 시 비밀번호를 bcrypt로 암호화하고 Regex를 사용하여 유효성 검사를 실행합니다.</span>
                <span>지도는 NaverMap api를 사용하여 현재 위치와 인근 배드민턴장을 표시합니다.</span>
                <span>FullCalendar 라이브러리에 google calendar api를 적용하였습니다.</span>
                <span>FE에선 Redux Store, BE에서는 passport로 미들웨어를 설정해 회원을 식별합니다.</span>
              </p>
            </div>
          </div>
          <StyledSlide {...settings}>
            <div>
              <img className="img" src={NODEJS} alt="NODEJS" />
              <br />
              <p>
                <span className="slideSummary">설명설명야ㅕ영ㅇㅇ오여오여여</span>
                <span className="slideSummary">설명설명야ㅕ영ㅇㅇ오여오여여</span>
                <span className="slideSummary">설명설명야ㅕ영ㅇㅇ오여오여여</span>
              </p>
            </div>
            <div>
              <img className="img" src={REACT} alt="NODEJS" />
              <br />
              <p>
                <span className="slideSummary">설명설명야ㅕ영ㅇㅇ오여오여여</span>
                <span className="slideSummary">설명설명야ㅕ영ㅇㅇ오여오여여</span>
                <span className="slideSummary">설명설명야ㅕ영ㅇㅇ오여오여여</span>
              </p>
            </div>
          </StyledSlide>
        </div>
      </ModalBox>
    </ModalBg>
  );
}

export default goniModal;
