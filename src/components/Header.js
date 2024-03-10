import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { MdHome, MdPerson, MdAssignment } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";

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
      font-size: 40px;
      margin: 20px 0;
      color: #000;
      font-weight: 700;
      cursor: pointer;
      &:hover {
        color: blue;
        transition: 0.2s;
        width: 200px;
        background-color: yellow;
        border-radius: 33px;
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
              <MdHome />
            </ul>
            <ul
              onClick={() => {
                navigate("/about");
              }}
            >
              <MdPerson />
            </ul>
            <ul
              onClick={() => {
                navigate("/projects");
              }}
            >
              <MdAssignment />
            </ul>
            <ul>
              <a href="https://github.com/chvgf/" target="blank">
                <AiFillGithub />
              </a>
            </ul>
          </li>
        </HeaderWrapper>
      </header>
    </>
  );
}

export default Header;
