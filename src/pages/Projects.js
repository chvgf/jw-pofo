import React from "react";
import styled from "styled-components";
import { GONIMINTON, MYMUNG } from "../imges";

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
  return (
    <ProjectsWrapper>
      <Title>
        <h1>Projects</h1>
      </Title>
      <ContentBox>
        <div className="contentItem">
          <img src={GONIMINTON} />
          <div>
            <p>
              <span>고니민턴: </span> 초보 견주들이 강아지를 올바르게 키울 수 있도록
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
              <a href="https://goniminton.netlify.app/">
                <span>URL:</span> https://goniminton.netlify.app
              </a>
            </p>
            <p>
              <a href="https://github.com/chvgf/teamstrong1000">
                <span>Github:</span> https://github.com/chvgf/teamstrong1000
              </a>
            </p>
          </div>
        </div>
        <div className="contentItem">
          <img src={MYMUNG} />
          <div>
            <p>
              <span>마이멍: </span> 초보 견주들이 강아지를 올바르게 키울 수 있도록
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
              <a href="https://goniminton.netlify.app/">
                <span>URL:</span> https://goniminton.netlify.app
              </a>
            </p>
            <p>
              <a href="https://github.com/chvgf/teamstrong1000">
                <span>Github:</span> https://github.com/chvgf/finalProject
              </a>
            </p>
          </div>
        </div>
        <div className="contentItem">
          <img src={GONIMINTON} />
          <div>
            <p>설명aaaaaaaaaaaaaaa</p>
            <p>
              <a href="https://goniminton.netlify.app/">
                <span>URL:</span> https://goniminton.netlify.app
              </a>
            </p>
            <p>
              <a href="https://github.com/chvgf/teamstrong1000">
                <span>Github:</span> https://github.com/chvgf/teamstrong1000
              </a>
            </p>
          </div>
        </div>
      </ContentBox>
    </ProjectsWrapper>
  );
}

export default Projects;
