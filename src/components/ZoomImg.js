import React, { useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";
const StyledSlide = styled(Slider)`
  & div {
    position: relative;
  }

  .slick-list {
    overflow: hidden;
    width: 70rem;
    height: auto;
    border-radius: 30px;
    padding: 50px 50px;
  }

  .slick-prev,
  .slick-next {
    position: absolute;
    z-index: 1;
  }
  .slick-prev {
    left: 30px;
    @media (max-width: 960px) {
      left: 0;
    }
  }
  .slick-next {
    right: 48px;
    @media (max-width: 960px) {
      right: 80px;
    }
  }
  .slick-dots {
    position: absolute;
    bottom: -60px;
    background-color: transparent;
  }
  .slick-dots button {
    position: absolute;
    background-color: #cccccc;
    border-radius: 33px;
  }
  .slick-active button::before {
    background-color: #ffb400;
    border-radius: 33px;
  }

  .slick-prev:before,
  .slick-next:before {
    font-family: "slick";
    font-size: 40px;
    line-height: 1;
    opacity: 0.75;
    color: #ffb400;
    background-color: transparent;
    -webkit-font-smoothing: antialiased;
  }
  img {
    width: 70rem;
    height: auto;
    cursor: pointer;
  }
`;

function ZoomImg(props) {
  const arr = props.imgList;
  let arrtest = [1, 2, 3];
  const settings = {
    arrows: true, // 양 끝 화살표 생성여부
    dots: true, // 슬라이더 아래에 슬라이드 개수를 점 형태로 표시
    infinite: true, // 슬라이드가 맨 끝에 도달했을 때 처음 슬라이드를 보여줄지 여부
    slidesToShow: 1, // 화면에 한번에 표시할 슬라이드 개수 설정
    slidesToScroll: 1, // 옆으로 스크롤할 때 보여줄 슬라이드 수 설정
    speed: 500, // 슬라이드 넘길 때 속도
    autoplay: true, // 슬라이드를 자동으로 넘길지 여부
    autoplaySpeed: 3000, // 자동으로 넘길 시 시간 간격
  };

  // 11111111111111111111111 xx
  // const [ttt, setTtt] = useState();

  // const test = (a) => {
  //   let q = a;
  //   if (a > 8) {
  //     q = 0;
  //     return;
  //   } else {
  //     q = a;
  //     return;
  //   }
  // };

  // 222222222222222222222222 xx
  // function* repeatedArray(arr) {
  //   let index = 0;
  //   while (true) {
  //     yield arr[index++ % arr.length];
  //   }
  // }
  // const gen = repeatedArray([1, 2, 3]);
  // console.log(gen.next());
  // gen.next();

  // console.log(props.imgList);
  // for (let i = 0; i < arr.length; i++) {
  //   const element = arr[i];
  //   console.log(element);
  // }

  return (
    // slide slick map 함수 사용법 확ㅇ이이이잉
    <StyledSlide {...settings}>
      <div
        onClick={() => {
          props.toggleZoom();
        }}
      >
        <img src={props.imgList[0]} alt="zoomImg" />
      </div>
      <div
        onClick={() => {
          props.toggleZoom();
        }}
      >
        <img src={props.imgList[1]} alt="zoomImg" />
      </div>
      <div
        onClick={() => {
          props.toggleZoom();
        }}
      >
        <img src={props.imgList[2]} alt="zoomImg" />
      </div>
      <div
        onClick={() => {
          props.toggleZoom();
        }}
      >
        <img src={props.imgList[3]} alt="zoomImg" />
      </div>
      <div
        onClick={() => {
          props.toggleZoom();
        }}
      >
        <img src={props.imgList[4]} alt="zoomImg" />
      </div>
      <div
        onClick={() => {
          props.toggleZoom();
        }}
      >
        <img src={props.imgList[5]} alt="zoomImg" />
      </div>
      <div
        onClick={() => {
          props.toggleZoom();
        }}
      >
        <img src={props.imgList[6]} alt="zoomImg" />
      </div>
      <div
        onClick={() => {
          props.toggleZoom();
        }}
      >
        <img src={props.imgList[7]} alt="zoomImg" />
      </div>
      <div
        onClick={() => {
          props.toggleZoom();
        }}
      >
        <img src={props.imgList[8]} alt="zoomImg" />
      </div>
    </StyledSlide>
  );
}

export default ZoomImg;
