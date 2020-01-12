import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import ArrowLeft from "../../components/_common/Arrows/ArrowLeft";
import ArrowRight from "../../components/_common/Arrows/ArrowRight";
import { withTranslation } from "react-i18next";
import Swiper from "react-id-swiper";
import { isMobile } from "react-device-detect";
import moment from "moment";
import { Container } from "../_common/Container/Container";
import { getMinPrice } from "real-estate-utils";
import { orderBy } from "lodash";
import i18n from "i18next";
// import withGlobalContext from "../../_context/withGlobalContext";

import "swiper/css/swiper.css";
import { toPath } from "../../_utils/functions";

const ListingsCarousel = ({
  listings
  // GlobalContext: {
  //   state: { currency }
  // }
}) => {
  const currency =
    global && global.window && localStorage && localStorage.currency
      ? JSON.parse(localStorage.currency)
      : null;
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
    slidesPerView: 4,
    spaceBetween: 40,
    breakpoints: {
      1024: {
        slidesPerView: 4,
        spaceBetween: 40
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 30
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 30
      }
    },
    renderPrevButton: () => <ArrowRight className="swiper-button-next-new" />,
    renderNextButton: () => <ArrowLeft className="swiper-button-prev-new" />
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true
    // }
  };

  const ListingsCarouselWrapper = styled.div`
    position: relative;
    padding 20px 0;
    .swiper-container {
        padding: 0 20px;
    }
    &:before {
      content: "";
      position: absolute;
      background-image: url("https://res.cloudinary.com/dqbgnn5hf/image/upload/v1569173530/background-sell.png");
      background-position: center;
      background-size: cover;
      width: 100%;
      height: 80%;
      left: 0;
      bottom: 0;
      z-index: -1;
    }
  `;
  const CarouselIEachDiv = styled.div`
    position: relative;
    padding-top: 20px;

    &:before {
      content: "";
      position: absolute;
      left: -12px;
      top: 3px;
      background-image: url(https://res.cloudinary.com/dqbgnn5hf/image/upload/v1569403199/Memphis.png);
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
      width: 30px;
      height: 70px;
      z-index: -1;
    }
  `;
  const CarouselImageEach = styled.div`
    background-image: url(${props => props.image});
    background-position: center;
    background-size: cover;
    width: 200px;
    height: 300px;

    position: relative;
    &:after {
      content: "";
      position: absolute;
      right: -12px;
      bottom: -16px;
      background-image: url(https://res.cloudinary.com/dqbgnn5hf/image/upload/v1569405883/Memphis-white.png);
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
      width: 30px;
      height: 70px;
      z-index: -1;
    }
    @media (max-width: 992px) {
      margin: auto;
      width: 100%;
    }
  `;
  const Text = styled.div``;
  const Price = styled.h3`
    color: #fff;
    margin: 0;
    padding: 10px;
  `;
  const TextGroup = styled.div`
    display: flex;
  `;
  const P = styled.p`
    color: #fff;
    font-weight: 100;
    padding: 0 10px;
    border-right: 1px solid #fff;
    font-size: 12px;
    &:last-child {
      border-right: none;
    }
  `;
  const lang = i18n.language;
  return (
    <ListingsCarouselWrapper dir="ltr">
      <Container>
        <Swiper {...params}>
          {orderBy(listings, "updatedAt", "desc").map(
            (
              {
                node: {
                  code,
                  coverImage,
                  types,
                  location,
                  installment,
                  delivery,
                  alternative_id
                }
              },
              key
            ) => {
              return (
                <CarouselIEachDiv key={key}>
                  <Link to={toPath(lang, `${code}`)}>
                    <CarouselImageEach
                      image={
                        coverImage
                          ? isMobile
                            ? coverImage.small
                            : coverImage.medium
                          : ""
                      }
                    />
                    <Text>
                      <Price>
                        {types.length
                          ? getMinPrice({
                              types,
                              currencyRate: currency ? currency.rate : 1
                            })
                          : ""}{" "}
                        {currency ? currency.value : "TRY"}
                      </Price>
                      <TextGroup>
                        {installment ? (
                          <P>{installment.payment}% </P>
                        ) : (
                          <P>Cash</P>
                        )}
                        {installment ? (
                          <P>{installment.period} months</P>
                        ) : null}
                        {delivery ? (
                          <P>{moment(delivery, "YYYY/MM").format("MM-YYYY")}</P>
                        ) : (
                          <P>Ready</P>
                        )}
                      </TextGroup>
                      <TextGroup>
                        <P>
                          {location.district}, {location.city}
                        </P>
                      </TextGroup>
                    </Text>
                  </Link>
                </CarouselIEachDiv>
              );
            }
          )}
        </Swiper>
      </Container>
    </ListingsCarouselWrapper>
  );
};
export default withTranslation()(ListingsCarousel);
