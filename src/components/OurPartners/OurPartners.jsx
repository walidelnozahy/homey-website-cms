import React from "react";
import styled from "styled-components";

import company from "../../_company/company";
import ArrowLeft from "../_common/Arrows/ArrowLeft";
import ArrowRight from "../_common/Arrows/ArrowRight";
import Swiper from "react-id-swiper";
import { withTranslation } from "react-i18next";
import RenderImage from "../_common/Image/RenderImage";
// import "swiper/css/swiper.css";

const OurPartners = ({ t, universities }) => {
  const params = {
    loop: true,
    // navigation: {
    //   nextEl: ".swiper-button-next-new",
    //   prevEl: ".swiper-button-prev-new"
    // },
    grabCursor: false,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    slidesPerView: 5,
    spaceBetween: 40,
    breakpoints: {
      1024: {
        slidesPerView: 5,
        spaceBetween: 40
      },
      768: {
        slidesPerView: 5,
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

  const OurPartnersMainWrapper = styled.div`
    margin-top: 20px;
  `;
  const OurPartnersWrapper = styled.div`
    background-color: #ebebeb;
    margin-top: 20px;
    padding: 20px 0;
  `;
  const OurPartnersInner = styled.div`
    // display: grid;
    // grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    gap: 40px;
    @media (max-width: 992px) {
      // grid-template-columns: 1fr 1fr 1fr;
    }
  `;
  const OurPartnersEach = styled.div`
    overflow: hidden;

    text-align: center;
    display: flex;
  `;
  const OurPartnersEachInner = styled.div`
    width: 200px !important;
    height: 200px !important;
    margin: auto;
    border: 5px solid ${company.colorPrimary};
    background-color: #fff;
    border-radius: 50%;
    display: flex;
  `;
  const H1 = styled.h1`
    text-align: center;
    background-color: ${company.colorSecondary};
    color: #fff;
    display: table;
    margin: auto;
    padding: 2px 10px;
  `;

  return (
    <OurPartnersMainWrapper data-aos="fade-up">
      <H1>{t("our partners")}</H1>
      <OurPartnersWrapper>
        {/* <Container> */}
        <OurPartnersInner dir="ltr">
          <Swiper {...params}>
            {universities.university.map(university => (
              <OurPartnersEach>
                <OurPartnersEachInner>
                  <RenderImage image={university.universityImage} width="60%" />
                </OurPartnersEachInner>
              </OurPartnersEach>
            ))}
          </Swiper>
        </OurPartnersInner>
        {/* </Container> */}
      </OurPartnersWrapper>
    </OurPartnersMainWrapper>
  );
};

export default withTranslation()(OurPartners);
