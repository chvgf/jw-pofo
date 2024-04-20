import React, { useState } from "react";
import { styled } from "styled-components";
import { FaGithub } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { mungChatting, mungDaily, mungMain, mungPer, mungShop, mungShopPayment, mungToktok, mungVin } from "../imges";

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
  .zoomImg {
    cursor: pointer;
    width: 72vw;
    height: auto;
  }
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
  .slick-dots {
    position: absolute;
    bottom: -60px;
    background-color: transparent;
  }
  .slick-dots button {
    position: absolute;
    background-color: #cccccc;
    border-radius: 33px;
  }
  .slick-active button::before {
    background-color: #ffb400;
    border-radius: 33px;
  }
  /* button::before {
    background-color: #eee;
    border-radius: 33px;
  } */

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
    cursor: pointer;
    @media (max-width: 960px) {
      width: 180px;
      height: 130px;
    }
  }
  .slideSummary {
    font-size: 12px;
    line-height: 1rem;
    letter-spacing: 0.5px;
    display: block;
  }
`;

function MymungModal({ handleCloseMadal }) {
  const [isZoomed, setIsZoomed] = useState(false);
  const [clickImg, setClickImg] = useState("");

  const toggleZoom = (clickImg) => {
    setIsZoomed(!isZoomed);
    setClickImg(clickImg);
  };

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
      {isZoomed ? (
        <img
          className="zoomImg"
          src={clickImg}
          alt="zoomImg"
          onClick={() => {
            toggleZoom();
          }}
        />
      ) : (
        <ModalBox>
          <div className="headerBox">
            <p className="closeBtn" onClick={() => handleCloseMadal()}>
              ✖
            </p>
            <h1>GoniMinton</h1>
            <p>🐶가입자의 반려견 맞춤 정보와 상품 추천 및 애견인 켜뮤니티 제공 웹 서비스</p>
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
                <span className="toolText be">Socket.io</span>
                <span className="toolText be">AWS S3</span>
              </p>
              <a href="https://github.com/chvgf/finalProject" target="_blank" rel="noreferrer noopener" className="toolText git">
                <FaGithub /> Github FE
              </a>
              <a href="https://github.com/chvgf/finalProjectServer" target="_blank" rel="noreferrer noopener" className="toolText git">
                <FaGithub /> Github BE
              </a>
              <p className="summaryHeader">* Summary</p>
              <div className="summaryTextBox">
                <p>· 팀원 구성: ProntEnd 4, BackEnd 2</p>
                <p className="summaryInfo">
                  <span>키우는 반려견의 종과 나이 등에 맞추어 추천 제품과 정보등을 한눈에 볼 수 있게하기 위하여 개발하게 되었습니다.</span>
                  <span>가입자가 입력한 반려견의 견종, 나이 등 정보를 토대로 커뮤니티의 글들과 중고거래, 샵의 제품들을 추천받습니다. </span>
                  <span>정보공유, 일상공유 등의 커뮤니티가 활성되어 있습니다.</span>
                  <span>쇼핑몰에서 카테고리별 상품을 검색하고 장바구니, 리뷰, 실시간 결제 등이 가능합니다.</span>
                  <span>kakaoMap Api를 사용하여 인근 산책로, 동물병원 등 검색이 가능합니다.</span>
                  <span>Socket.io로 실시간 채팅 1:1이 가능합니다.</span>
                  <span>회원가입 시 비밀번호를 bcrypt로 암호화하고 Regex를 사용하여 유효성 검사를 실행합니다.</span>
                  <span>FE에선 Redux Store, BE에서는 passport로 미들웨어를 설정해 회원을 식별합니다.</span>
                </p>
              </div>
            </div>
            <StyledSlide {...settings}>
              <div>
                <img
                  className="img"
                  src={mungMain}
                  alt="mungMain"
                  onClick={() => {
                    toggleZoom(mungMain);
                  }}
                />
                <br />
                <p>
                  <span className="slideSummary">
                    고니민턴 메인화면입니다.
                    <br /> 게시된 경기목록을 확인할 수 있습니다.
                  </span>
                </p>
              </div>
              <div>
                <img
                  className="img"
                  src={mungPer}
                  alt="mungPer"
                  onClick={() => {
                    toggleZoom(mungPer);
                  }}
                />
                <br />
                <p>
                  <span className="slideSummary">
                    고니민턴 경기목록 디테일화면입니다.
                    <br /> 경기 내용확인과 신청이 가능합니다.
                  </span>
                </p>
              </div>
              <div>
                <img
                  className="img"
                  src={mungToktok}
                  alt="mungToktok"
                  onClick={() => {
                    toggleZoom(mungToktok);
                  }}
                />
                <br />
                <p>
                  <span className="slideSummary">
                    고니민턴 랜덤매칭 화면입니다. <br />
                    등록된 경기중 구력별 랜덤매칭이 가능합니다.
                  </span>
                </p>
              </div>
              <div>
                <img
                  className="img"
                  src={mungDaily}
                  alt="mintonCommunity"
                  onClick={() => {
                    toggleZoom(mungDaily);
                  }}
                />
                <br />
                <p>
                  <span className="slideSummary">고니민턴 커뮤니티 화면입니다.</span>
                </p>
              </div>
              <div>
                <img
                  className="img"
                  src={mungVin}
                  alt="mungVin"
                  onClick={() => {
                    toggleZoom(mungVin);
                  }}
                />
                <br />
                <p>
                  <span className="slideSummary">고니민턴 클럽 화면입니다.</span>
                </p>
              </div>
              <div>
                <img
                  className="img"
                  src={mungShop}
                  alt="mungShop"
                  onClick={() => {
                    toggleZoom(mungShop);
                  }}
                />
                <br />
                <p>
                  <span className="slideSummary">
                    고니민턴 명예의전당 입니다. <br />
                    클럽별 순위와 승률을 표시합니다.
                  </span>
                </p>
              </div>
              <div>
                <img
                  className="img"
                  src={mungShopPayment}
                  alt="mungShopPayment"
                  onClick={() => {
                    toggleZoom(mungShopPayment);
                  }}
                />
                <br />
                <p>
                  <span className="slideSummary">
                    고니민턴 지도입니다. <br />
                    거주지역 인근 체육관을 표시합니다.
                  </span>
                </p>
              </div>
              <div>
                <img
                  className="img"
                  src={mungChatting}
                  alt="mungChat"
                  onClick={() => {
                    toggleZoom(mungChatting);
                  }}
                />
                <br />
                <p>
                  <span className="slideSummary">
                    고니민턴 캘린더입니다. <br />
                    신청한 경기일정을 표시합니다.
                  </span>
                </p>
              </div>
            </StyledSlide>
          </div>
        </ModalBox>
      )}
    </ModalBg>
  );
}

export default MymungModal;
