import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import Swiper from "react-id-swiper";
// import "react-id-swiper/lib/styles/css/swiper.css";
import TitleProject from "../TitleProject/TitleProject";

const CarouselVideos = ({ item, t }) => {
  const params = {
    loop: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  };
  const CarouselVideosWrapper = styled.div`
    margin-top: 30px;
  `;

  if (item.videos && item.videos.length > 0) {
    return (
      <CarouselVideosWrapper dir="ltr">
        <TitleProject title="Project Video" center />
        <Swiper {...params}>
          {item.videos.map((url, key) => (
            <div className="Carousel_Video_each" key={key}>
              <ReactPlayer
                url={url}
                controls
                light
                width={"100%"}
                height={"400px"}
              />
            </div>
          ))}
        </Swiper>
      </CarouselVideosWrapper>
    );
  }
  return null;
};
export default CarouselVideos;
