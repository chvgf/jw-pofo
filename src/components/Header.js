import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { MdHome, MdPerson, MdAssignment } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";

const HeaderWrapper = styled.header`
  position: fixed;
  height: 100%;
  left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 50px;
  width: 200px;
  h4 {
    position: absolute;
    top: 25%;
    font-size: 30px;
    font-weight: 700;
    font-family: monospace;
  }
  li {
    list-style-type: none;
    ul {
      font-size: 44px;
      margin: 20px 0;
      color: #fff;
      font-weight: 700;
      cursor: pointer;
      .icon {
        background-color: #ffb400;
        border-radius: 33px;
        transition: 0.2s;
        &:hover {
          width: 66px;
          height: 66px;
          background-color: #ffb400;
          border-radius: 33px;
        }
      }
      span {
        font-size: 24px;
        margin-left: 10px;
      }
    }
  }
`;

function Header(props) {
  const navigate = useNavigate();
  return (
    <>
      <HeaderWrapper>
        {/* <h4>천준우</h4> */}
        <li>
          <ul
            onClick={() => {
              navigate("/");
            }}
          >
            <MdHome className="icon" />
            <span>Home</span>
          </ul>
          <ul
            onClick={() => {
              navigate("/about");
            }}
          >
            <MdPerson className="icon" />
            <span>About</span>
          </ul>
          <ul
            onClick={() => {
              navigate("/projects");
            }}
          >
            <MdAssignment className="icon" />
            <span>projects</span>
          </ul>
          <ul>
            <a href="https://github.com/chvgf/" target="blank">
              <AiFillGithub className="icon" />
            </a>
          </ul>
        </li>
      </HeaderWrapper>
    </>
  );
}

export default Header;
