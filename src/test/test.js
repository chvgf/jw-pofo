import React from "react";
import Slider from "react-slick";
import { AWS, JS, REACT, REDUX, NEXTJS, NODEJS, EXPRESSJS, MONGODB, NETLIFY, CLOUDTYPE, TRELLO, FIGMA, GITHUB, GITHUB2 } from "../imges";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestWapper = styled(Slider)`
  /* position: relative; */
  & div {
    position: relative;
  }

  .slick-list {
    width: 240px;
    height: 200;
    /* margin: 0 auto; */
    background-color: #cccccc;
    overflow: hidden;
  }

  .slick-prev,
  .slick-next {
    position: absolute;
    z-index: 1;
  }
  .slick-prev {
    left: 30px;
  }
  .slick-next {
    right: 48px;
  }

  .slick-prev:before,
  .slick-next:before {
    /* position: relative; */
    font-family: "slick";
    font-size: 40px;
    line-height: 1;
    opacity: 0.75;
    /* color: #c9bbbb; */
    color: #fff;
    -webkit-font-smoothing: antialiased;
  }
  /* .slick-prev:before:hover, .slick-next:before:hover {
    color: #333;
  } */
  .img {
    width: 250px;
    height: 200px;
  }
`;

function Test(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <TestWapper {...settings}>
      <div>
        <img className="img" src={NODEJS} alt="NODEJS" />
        설명설명ㅁㅁㅁ설명설명ㅁㅁㅁ설명설명ㅁㅁㅁ
      </div>
      <div>
        <img className="img" src={REACT} alt="NODEJS" />
        설명설명ㅁㅁㅁ설명설명ㅁㅁㅁ설명설명ㅁㅁㅁ
      </div>
      <div>
        <img className="img" src={REDUX} alt="NODEJS" />
        설명설명ㅁㅁㅁ설명설명ㅁㅁㅁ설명설명ㅁㅁㅁ
      </div>
    </TestWapper>
  );
}

export default Test;
