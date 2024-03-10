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
  width: 888px;
  margin: 0 auto;
  margin-bottom: 30px;

  .contentItem {
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 10px;
    width: 850px;
    height: 350px;
    margin: 50px 10px;
    border: 1px solid #eee;
    color: #fff;
    img {
      width: 500px;
      height: 300px;
      margin-right: 20px;
    }
    p {
      font-size: 20px;
      margin: 20px 0;
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
            <p>설명aaaaaaaaaaaaaaa</p>
            <p>설명</p>
            <p>설명</p>
          </div>
        </div>
        <div className="contentItem">
          <img src={MYMUNG} />
          <div>
            <p>설명aaaaaaaaaaaaaaa</p>
            <p>설명</p>
            <p>설명</p>
          </div>
        </div>
        <div className="contentItem">
          <img src={GONIMINTON} />
          <div>
            <p>설명aaaaaaaaaaaaaaa</p>
            <p>설명</p>
            <p>설명</p>
          </div>
        </div>
      </ContentBox>
    </ProjectsWrapper>
  );
}

export default Projects;
