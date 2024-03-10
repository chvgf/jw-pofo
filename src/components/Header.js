import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { MdHome, MdPerson, MdAssignment } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";

const HeaderWrapper = styled.div`
  position: absolute;
  height: 100%;
  left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 50px;
  li {
    ul {
      font-size: 40px;
      margin: 20px 0;
      color: #fff;
      font-weight: 700;
      cursor: pointer;
      .icon {
        background-color: #ffb400;
        border-radius: 33px;
        &:hover {
          transition: 0.2s;
          width: 200px;
          background-color: #ffb400;
          border-radius: 33px;
        }
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
              <MdHome className="icon" />
            </ul>
            <ul
              onClick={() => {
                navigate("/about");
              }}
            >
              <MdPerson className="icon" />
            </ul>
            <ul
              onClick={() => {
                navigate("/projects");
              }}
            >
              <MdAssignment className="icon" />
            </ul>
            <ul>
              <a href="https://github.com/chvgf/" target="blank">
                <AiFillGithub className="icon" />
              </a>
            </ul>
          </li>
        </HeaderWrapper>
      </header>
    </>
  );
}

export default Header;
