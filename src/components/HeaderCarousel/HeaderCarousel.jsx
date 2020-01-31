import React from "react";
import Swiper from "react-id-swiper";
import { Link } from "gatsby";
import { Carousel } from "antd";

import styled from "styled-components";
import CustomButton from "../../components/_common/CustomButton/CustomButton";
import ArrowLeft from "../../components/_common/Arrows/ArrowLeft";
import ArrowRight from "../../components/_common/Arrows/ArrowRight";
import company from "../../_company/company";
// import PreviewCompatibleImage from "../PreviewCompatibleImage";
// import SearchDiv from "../SearchDiv/SearchDiv";
import RenderImage from "../../components/_common/Image/RenderImage";
import i18n from "i18next";
// import company from "../../_company/company";
// import { isMobile } from "react-device-detect";
import "swiper/css/swiper.css";
import "./HeaderCarousel.css";
const seachPadding = `40px`;
const HeaderCarouselWrapper = styled.div`
  position: relative;
  // .swiper-next,
  // .swiper-prev {
  //   position: absolute;
  //   b: 50%;
  //   z-index: 99999999 !important;
  //   box-shadow: 0 0 0 rgba(204, 169, 44, 0.4);
  //   animation-duration: 2s;
  //   animation-iteration-count: infinite;
  //   animation-timing-function: ease-in-out;
  //   width: 40px;
  //   height: 40px;
  //   background-color: ${company.colorPrimary};
  //   border-radius: 50%;
  //   display: flex;
  //   justify-content: space-around;
  //   cursor: pointer;
  //   opacity: 0.5;
  //   svg {
  //     margin: auto !important;
  //     transform: translateY(5px);
  //   }
  // }
  // @keyframes moveArrowRight {
  //   0% {
  //     background-color: rgba(64, 89, 93, 0.247);
  //     box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4);
  //     right: 10px;
  //   }

  //   70% {
  //     box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
  //   }

  //   100% {
  //     // background-color: white;
  //     right: 15px;
  //     box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
  //   }
  // }

  // @keyframes moveArrowLeft {
  //   0% {
  //     background-color: rgba(64, 89, 93, 0.247);
  //     left: 10px;
  //     box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4);
  //   }

  //   50% {
  //     left: 15px;
  //     box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
  //   }

  //   100% {
  //     // background-color: white;
  //     left: 10px;
  //     box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
  //   }
  // }

  // .swiper-next {
  //   animation-name: moveArrowRight;
  // }

  // .swiper-prev {
  //   animation-name: moveArrowLeft;
  // }
`;
const HeaderCarouselEach = styled.div``;
const HeaderCarouselEachInner = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  height: 90vh;
  width: 100vw;
  grid-auto-flow: dense;
  background: transparent linear-gradient(180deg, #0f6193 0%, #124970 100%) 0%
    0% no-repeat padding-box;
  @media (max-width: 992px) {
    display: flex;
    flex-direction: column-reverse;
    height: auto;
  }
`;
const HeaderCarouseLeft = styled.div`
  padding: ${seachPadding};
  @media (max-width: 992px) {
    padding: 10px;
    text-align: center;
  }
`;
const HeaderCarouseRight = styled.div`
  position: relative;
`;
const Image = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-image: url(${props => props.image});
  background-position: center;
  background-size: cover;
  z-index: 0;
  @media (max-width: 992px) {
    position: relative;
    width: 100%;
    height: 300px;
  }
`;
const Text = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 2;
  height: 100%;
  text-align: ${props =>
    props.currenctLang === `ar` || props.currenctLang === `pr`
      ? `right`
      : `left`} !important;
`;
const Title = styled.h1`
  color: #fff;
  font-size: 50px;
  font-weight: 300;
  text-align: ${props =>
    props.currenctLang === `ar` || props.currenctLang === `pr`
      ? `right`
      : `left`} !important;
  direction: ${props =>
    props.currenctLang === `ar` || props.currenctLang === `pr`
      ? `rtl`
      : `ltr`} !important;
  @media (max-width: 992px) {
    font-size: 30px;
  }
`;
const P = styled.p`
  color: #fff;
  font-weight: 100;
`;
const SearchWrapper = styled.div`
  position: absolute;
  max-width: 40%;
  left: ${seachPadding};
  bottom: 50px;
  z-index: 2;
  @media (max-width: 992px) {
    width: 90%;
    display: none;
    z-index: 2;
    max-width: 90%;
    left: 50%;
    transform: translateX(-50%);
  }
`;
const params = {
  loop: true,
  // effect: isMobile ? "slide" : "fade",
  navigation: {
    nextEl: ".swiper-button-next-new",
    prevEl: ".swiper-button-prev-new"
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  renderPrevButton: () => (
    <ArrowRight className="swiper-button-next-new bottom" />
  ),
  renderNextButton: () => (
    <ArrowLeft className="swiper-button-prev-new bottom" />
  )
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true
  // }
};
const HeaderCarousel = ({ carouselItems }) => {
  // const ImportantProjects = projects
  //   ? projects.filter(i => i.rate === 3)
  //   : null;
  const currenctLang = i18n.language;

  return (
    <HeaderCarouselWrapper dir="ltr">
      <SearchWrapper data-aos="fade-right">{/* <SearchDiv /> */}</SearchWrapper>
      {/* {carouselItems.map((item, key) => (
        <PreviewCompatibleImage imageInfo={item} />
      ))} */}

      <Swiper {...params}>
        {carouselItems ? (
          carouselItems.map((item, key) => (
            <HeaderCarouselEach key={key}>
              <HeaderCarouselEachInner className="HeaderCarouselEachInner">
                <HeaderCarouseLeft
                  data-aos="fade-right"
                  className="HeaderCarouseLeft"
                >
                  <Text currenctLang={currenctLang} className="Text">
                    <Title
                      currenctLang={currenctLang}
                      dir={
                        currenctLang === `ar` || currenctLang === `pr`
                          ? `rtl`
                          : `ltr`
                      }
                    >
                      {item.text}
                    </Title>
                    <Link to={item.link}>
                      <CustomButton text="more details" />
                    </Link>
                  </Text>
                </HeaderCarouseLeft>
                <HeaderCarouseRight data-aos="fade-left">
                  <Link to={item.link}>
                    {item.image ? (
                      <RenderImage image={item.image} width="100%" />
                    ) : null}
                  </Link>
                </HeaderCarouseRight>
              </HeaderCarouselEachInner>
            </HeaderCarouselEach>
          ))
        ) : (
          <HeaderCarouselEach>
            <HeaderCarouselEachInner>
              <HeaderCarouseLeft data-aos="fade-right">
                <Text>
                  <Title>Homey Real Estate</Title>
                </Text>
              </HeaderCarouseLeft>
              <HeaderCarouseRight data-aos="fade-left">
                <Image image="https://res.cloudinary.com/drdxjay2t/image/upload/v1553171134/hp-header.jpg" />
              </HeaderCarouseRight>
            </HeaderCarouselEachInner>
          </HeaderCarouselEach>
        )}
      </Swiper>
      {/* <Carousel autoPlay={true}>
        {carouselItems ? (
          carouselItems.map((item, key) => (
            <HeaderCarouselEach key={key}>
              <HeaderCarouselEachInner>
                <HeaderCarouseLeft data-aos="fade-right">
                  <Text currenctLang={currenctLang}>
                    <Title
                      currenctLang={currenctLang}
                      dir={
                        currenctLang === `ar` || currenctLang === `pr`
                          ? `rtl`
                          : `ltr`
                      }
                    >
                      {item.text}
                    </Title>
                    <Link to={item.link}>
                      <CustomButton text="more details" />
                    </Link>
                  </Text>
                </HeaderCarouseLeft>
                <HeaderCarouseRight data-aos="fade-left">
                  <Link to={item.link}>
                    {item.image ? (
                      <RenderImage image={item.image} width="100%" />
                    ) : null}
                  </Link>
                </HeaderCarouseRight>
              </HeaderCarouselEachInner>
            </HeaderCarouselEach>
          ))
        ) : (
          <HeaderCarouselEach>
            <HeaderCarouselEachInner>
              <HeaderCarouseLeft data-aos="fade-right">
                <Text>
                  <Title>Homey Real Estate</Title>
                </Text>
              </HeaderCarouseLeft>
              <HeaderCarouseRight data-aos="fade-left">
                <Image image="https://res.cloudinary.com/drdxjay2t/image/upload/v1553171134/hp-header.jpg" />
              </HeaderCarouseRight>
            </HeaderCarouselEachInner>
          </HeaderCarouselEach>
        )}
      </Carousel> */}
    </HeaderCarouselWrapper>
  );
};
export default HeaderCarousel;
