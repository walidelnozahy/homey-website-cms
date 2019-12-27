import React, { Component } from "react";
import Swiper from "react-id-swiper";
import styled from "styled-components";
import { Container } from "../_common/Container/Container";
import ArrowLeft from "../../components/_common/Arrows/ArrowLeft";
import ArrowRight from "../../components/_common/Arrows/ArrowRight";
import company from "../../_company/company";

const ProjectsCarousel = ({ project }) => {
  const params = {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next-new",
      prevEl: ".swiper-button-prev-new"
    },
    grabCursor: false,
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

  const ProjectCarouselWrapper = styled.div`
    max-width: 100%;

    overflow: hiddern;
    // .swiper-container {
    //   max-width: 100%;
    //   .swiper-wrapper {
    //     max-width: 100%;
    //     .swiper-slide {
    //       background-color: red;
    //       max-width: 100%;
    //     }
    //   }
    // }
    @media (max-width: 992px) {
      max-width: 99vw;
    }
    .swiper-button-next-new,
    .swiper-button-prev-new {
      position: absolute;
      top: 50%;
      z-index: 99999999 !important;
      box-shadow: 0 0 0 rgba(204, 169, 44, 0.4);
      animation-duration: 2s;
      animation-iteration-count: infinite;
      animation-timing-function: ease-in-out;
      width: 40px;
      height: 40px;
      background-color: ${company.colorPrimary};
      border-radius: 50%;
      display: flex;
      justify-content: space-around;
      cursor: pointer;
      opacity: 0.5;
      svg {
        margin: auto !important;
        transform: translateY(5px);
      }
    }

    @keyframes moveArrowRight {
      0% {
        background-color: rgba(64, 89, 93, 0.247);
        box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4);
        right: 10px;
      }

      70% {
        box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
      }

      100% {
        // background-color: white;
        right: 15px;
        box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
      }
    }

    @keyframes moveArrowLeft {
      0% {
        background-color: rgba(64, 89, 93, 0.247);
        left: 10px;
        box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4);
      }

      50% {
        left: 15px;
        box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
      }

      100% {
        // background-color: white;
        left: 10px;
        box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
      }
    }

    .swiper-button-next-new {
      animation-name: moveArrowRight;
    }

    .swiper-button-prev-new {
      animation-name: moveArrowLeft;
    }
  `;

  const SwiperSlide1 = styled.div`
  background-image: url('${props => props.image}');
  background-size: cover;
  background-position: center;
  // width: 100%;
  // max-width: 100%;
  height: 500px !important;
  // background-color: red;
  @media (max-width: 992px) {
    width: 100% !important;
    height: 300px !important;
  }
`;
  return (
    <ProjectCarouselWrapper data-aos="fade-up" dir="ltr">
      <Swiper {...params}>
        {project.images.map((image, index) => (
          <SwiperSlide1 image={image.medium} key={index}></SwiperSlide1>
        ))}
      </Swiper>
    </ProjectCarouselWrapper>
  );
};

export default ProjectsCarousel;
