import styled from "styled-components";
import mainImg from "../imges/cjw1.jpg";
import Typewriter from "typewriter-effect";
import { useEffect, useState } from "react";
import Header from "../components/Header";

const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SectionInfo = styled.section`
  width: 600px;
  height: 100vh;
  margin: 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .p1 {
    font-size: 26px;
    margin: 30px 0;
    line-height: 30px;
    letter-spacing: 1px;
  }
  .p2 {
    font-size: 36px;
    margin: 10px 0;
    line-height: 30px;
    letter-spacing: 1px;
    display: flex;
    span {
      color: #ffb400;
    }
  }
  .p3 {
    font-size: 22px;
    margin: 30px 0;
    line-height: 30px;
    letter-spacing: 1px;
  }
`;
const SectionImg = styled.section`
  width: 350px;
  height: 100vh;
  margin: 0 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 50vh;
  }
`;

function Main(props) {
  let a = "inTest";
  let b = "outTest";
  let c = "timeOut1";
  let d = "timeOut2";
  const [pageAni, setPageAni] = useState(false);
  const [timeOut, setTimeOut] = useState(false);

  setTimeout(() => {
    setTimeOut(true);
  }, 500);

  useEffect(() => {
    setPageAni(true);
    window.localStorage.removeItem("proUrl");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <MainWrapper>
      <Header />
      <SectionInfo className={`${timeOut ? d : c}`}>
        <p className="p1">Hi! how are you?</p>
        <p className="p2">
          <p>I'm</p>
          &nbsp;
          <Typewriter
            options={{
              strings: [" JunWoo Cheon", " Web Developer"],
              autoStart: true,
              loop: true,
            }}
          />
        </p>
        <p className="p3">
          안녕하세요, 저는 천준우입니다. 😀
          <br />
          새로운 기술에 관심이 많으며 동료들과의 커뮤니케이션과 상호 피드백 및 리뷰를 좋아합니다.
          <br />
          현재 프론트엔드 개발자로 구직중입니다.
          <br />
          맡은 일에 자부심을 갖고 도전을 경험할 수 있는 회사에서 일하고 싶습니다!
        </p>
      </SectionInfo>
      <SectionImg className={`${timeOut ? d : c}`}>
        <img src={mainImg}></img>
      </SectionImg>
      <div className={`${pageAni ? b : a}`}></div>
    </MainWrapper>
  );
}

export default Main;
