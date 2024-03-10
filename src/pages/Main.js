import styled from "styled-components";
import mainImg from "../imges/cjw1.jpg";
import Typewriter from "typewriter-effect";

const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 100px;

  /* .test {
    position: absolute;
    width: 10000px;
    height: 500px;
    top: -400px;
    background-color: yellow;
    transition: 2s;
    &:hover {
      transform: translateY(300%);
    }
  } */
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
  return (
    <MainWrapper>
      <SectionInfo>
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
          맡은 일에 자부심을 갖고 도전을 경험할 수 있는 회사에서 일하고 싶습니다.!
        </p>
      </SectionInfo>
      <SectionImg>
        <img src={mainImg}></img>
      </SectionImg>
    </MainWrapper>
  );
}

export default Main;
