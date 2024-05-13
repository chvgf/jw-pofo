import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { MdHome, MdPerson, MdAssignment } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";

const HeaderWrapper = styled.header`
  position: fixed;
  height: 100%;
  left: 10px;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 50px;
  width: 200px;
  z-index: 10;
  background-color: transparent;
  @media (max-width: 1550px) {
    left: -90px;
  }
  h4 {
    position: absolute;
    top: 25%;
    font-size: 30px;
    font-weight: 700;
    font-family: monospace;
  }
  li {
    list-style-type: none;
    background-color: transparent;

    ul {
      font-size: 44px;
      margin: 20px 0;
      color: #fff;
      font-weight: 700;
      background-color: transparent;
      a {
        background-color: transparent;
      }
      @media (max-width: 1550px) {
        font-size: 30px;
      }

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
          @media (max-width: 1550px) {
            width: 40px;
            height: 40px;
          }
        }
      }
      span {
        font-size: 24px;
        margin-left: 10px;
        background-color: transparent;
        @media (max-width: 1550px) {
          font-size: 10px;
        }
        @media (max-width: 1300px) {
          opacity: 0;
        }
      }
    }
  }
`;

function Header(props) {
  const navigate = useNavigate();
  let c = "timeOut1";
  let d = "timeOut2";
  const [timeOut, setTimeOut] = useState(false);
  setTimeout(() => {
    setTimeOut(true);
  }, 400);
  return (
    <>
      <HeaderWrapper className={`${timeOut ? d : c}`}>
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
            <span>Projects</span>
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
