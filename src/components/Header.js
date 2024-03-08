import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  position: absolute;
  height: 100%;
  left: 10px;
  border-right: 1px solid gray;
  font-family: "Teko", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 50px;
  background-color: antiquewhite;
  li {
    ul {
      margin: 20px 0;
      color: #000;
      font-weight: 700;
      cursor: pointer;
      &:hover {
        color: blue;
        transition: 0.2s;
      }
    }
  }
`;

function Header(props) {
  const navigate = useNavigate();
  return (
    <>
      <header>
        <HeaderWrapper>
          <li>
            <ul
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </ul>
            <ul
              onClick={() => {
                navigate("/about");
              }}
            >
              ABOUT
            </ul>
            <ul
              onClick={() => {
                navigate("/projects");
              }}
            >
              PROJECTS
            </ul>
            <ul>
              <a href="https://github.com/" target="blank">
                GITHUB
              </a>
            </ul>
          </li>
        </HeaderWrapper>
      </header>
    </>
  );
}

export default Header;
