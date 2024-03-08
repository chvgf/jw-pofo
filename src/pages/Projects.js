import React from "react";
import styled from "styled-components";

const ProjectsWrapper = styled.main`
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

function Projects(props) {
  return (
    <ProjectsWrapper>
      <Title>
        <h1>제모ㅓ모모모곡</h1>
      </Title>
      <ContentBox>
        <div>프로젝트1</div>
        <div>프로젝트2</div>
        <div>프로젝트3</div>
      </ContentBox>
    </ProjectsWrapper>
  );
}

export default Projects;
