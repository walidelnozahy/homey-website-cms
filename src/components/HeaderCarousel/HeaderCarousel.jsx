import React from "react";
import Swiper from "react-id-swiper";
import styled from "styled-components";

import ArrowLeft from "../../components/_common/Arrows/ArrowLeft";
import ArrowRight from "../../components/_common/Arrows/ArrowRight";
// import PreviewCompatibleImage from "../PreviewCompatibleImage";
// import SearchDiv from "../SearchDiv/SearchDiv";
import RenderImage from "../../components/_common/Image/RenderImage";
import i18n from "i18next";
// import company from "../../_company/company";
// import { isMobile } from "react-device-detect";
import "swiper/css/swiper.css";

const seachPadding = `40px`;
const HeaderCarouselWrapper = styled.div`
  position: relative;
`;
const HeaderCarouselEach = styled.div``;
const HeaderCarouselEachInner = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  height: 90vh;
  width: 100vw;
  grid-auto-flow: dense
  background: transparent linear-gradient(180deg, #0f6193 0%, #124970 100%) 0%
    0% no-repeat padding-box;
  @media (max-width: 992px) {
    display: flex;
    flex-direction: column-reverse;
    height:auto;
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
  z-index: 2;
  text-align: ${props =>
    props.currenctLang === `ar` || props.currenctLang === `pr`
      ? `right`
      : `left`} !important;
`;
const H1 = styled.h1`
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
  renderPrevButton: () => <ArrowRight className="swiper-button-next-new" />,
  renderNextButton: () => <ArrowLeft className="swiper-button-prev-new" />
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
              <HeaderCarouselEachInner>
                <HeaderCarouseLeft data-aos="fade-right">
                  <Text currenctLang={currenctLang}>
                    <H1
                      currenctLang={currenctLang}
                      dir={
                        currenctLang === `ar` || currenctLang === `pr`
                          ? `rtl`
                          : `ltr`
                      }
                    >
                      {item.text}
                    </H1>
                  </Text>
                </HeaderCarouseLeft>
                <HeaderCarouseRight data-aos="fade-left">
                  {/* <PreviewCompatibleImage imageInfo={item} /> */}
                  {item.image ? (
                    <RenderImage image={item.image} width="100%" />
                  ) : null}

                  {/* <Image image={i.coverImage ? i.coverImage.large : ""} /> */}
                </HeaderCarouseRight>
              </HeaderCarouselEachInner>
            </HeaderCarouselEach>
          ))
        ) : (
          <HeaderCarouselEach>
            <HeaderCarouselEachInner>
              <HeaderCarouseLeft data-aos="fade-right">
                <Text>
                  <H1>Homey Real Estate</H1>
                </Text>
              </HeaderCarouseLeft>
              <HeaderCarouseRight data-aos="fade-left">
                <Image image="https://res.cloudinary.com/drdxjay2t/image/upload/v1553171134/hp-header.jpg" />
              </HeaderCarouseRight>
            </HeaderCarouselEachInner>
          </HeaderCarouselEach>
        )}
      </Swiper>
    </HeaderCarouselWrapper>
  );
};
export default HeaderCarousel;
