import React from "react";
import styled from "styled-components";
import i18n from "i18next";
import { withTranslation } from "react-i18next";
import company from "../../_company/company";
import CustomButton from "../_common/CustomButton/CustomButton";
import RenderImage from "../_common/Image/RenderImage";
import ReactPlayer from "react-player";
import Swiper from "react-id-swiper";
const WeOffer = ({ t, aboutCompany }) => {
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
  console.log("aboutCompany", aboutCompany);
  const WeOfferWrapper = styled.div`
    margin-top: 40px;
  `;

  const GridSection = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    background: ${props => props.background};
    position: relative;
    @media (max-width: 767px) {
      grid-template-columns: 1fr;
    }
  `;
  const Left = styled.div`
    padding: ${props => props.padding || `0`};
    position: relative;
    color: #fff;
  `;
  const Right = styled.div`
    padding: ${props => props.padding || `0`};
    display: flex;
  `;
  const LeftImage = styled.div`
    background-image: url("https://res.cloudinary.com/dqbgnn5hf/image/upload/q_auto:eco/v1574233957/basssin_area.png");
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 400px;
  `;
  const FloatingBtn = styled.div`
    position: absolute;
    right: ${i18n.language === "ar" || i18n.language === "pr"
      ? `auto`
      : `-10px`};
    left: ${i18n.language === "ar" || i18n.language === "pr"
      ? `-10px`
      : `auto`};
    bottom: 40px;
    @media (max-width: 767px) {
      right: 0px;
    }
  `;

  const FlexDiv = styled.div`
    margin: auto;
  `;
  const Testimonials = styled.div`
    background-image: url("https://res.cloudinary.com/dqbgnn5hf/image/upload/q_auto:eco/v1578832448/yellow-background.png");
    background-size: cover;
    background-position: center;
    width: 90%;
    padding: 30px 20px;
    margin: 60px 0 auto auto;
    @media (max-width: 767px) {
      width: 100%;
      padding: 30px;
    }
  `;
  const Testimonials_Inner = styled.div`
    display: grid;
    grid-template-columns: 30% 70%;
    gap: 0px;

    @media (max-width: 993px) {
      grid-template-columns: 1fr;
      margin-top: 10px;
    }
  `;
  const H1 = styled.h1`
    color: ${props => props.color || `#fff`};
    font-weight: ${props => props.weight || `auto`};
    font-size: ${props => props.size || `20px`};
    text-align: ${props => (props.center ? `center` : `auto`)};
  `;
  const Testimonials_Image_wrapper = styled.div`
    text-align: center;
    img {
      max-width: 200px;
    }
  `;

  const Testimonials_Text = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
  `;
  const TextInner = styled.p`
    color: #fff;
    background-color: ${company.colorPrimary};
    width: 80%;
    margin: auto;
    border-radius: 10px;
    line-height: 2.2;
    box-shadow: 0 0 0 10px ${company.colorPrimary};
    box-decoration-break: clone;
  `;
  const QoutesImage = styled.img`
    position: absolute;
    left: ${props => (props.right ? "auto" : `20px`)};
    right: ${props => (props.right ? `20px` : "auto")};
    top: ${props => (props.right ? "auto" : `20px`)};
    bottom: ${props => (props.right ? `20px` : "auto")};
    transform: rotateZ(${props => (props.right ? `180deg` : `0deg`)});
    z-index: 2;
    @media (max-width: 993px) {
      width: 40px;
    }
  `;
  const GradientBackground = styled.div`
    position: absolute;
    width: 100%;
    height: 150%;
    background: transparent linear-gradient(180deg, #0f6193 0%, #124970 100%) 0%
      0% no-repeat padding-box;
    z-index: -1;
  `;
  if (!aboutCompany) {
    return null;
  }
  return (
    <WeOfferWrapper>
      <GridSection>
        <Left data-aos="fade-right">
          <ReactPlayer
            url={aboutCompany.videoLink}
            controls
            width={"100%"}
            height={"400px"}
          />
          <FloatingBtn>
            <CustomButton text="watch" />
          </FloatingBtn>
        </Left>
        <Right padding="40px" data-aos="fade-left">
          <FlexDiv>
            <h1>{aboutCompany.firstHeading}</h1>
            <p>{aboutCompany.firstDescription}</p>
          </FlexDiv>
        </Right>
      </GridSection>
      <GridSection>
        <GradientBackground />
        <Left padding="40px" data-aos="fade-right">
          <FlexDiv>
            <h1 style={{ color: `#fff` }}>{aboutCompany.secondHeading}</h1>
            <p>{aboutCompany.secondDescription}</p>
          </FlexDiv>
        </Left>
        <Right data-aos="fade-left">
          <LeftImage />
        </Right>
      </GridSection>
      <Testimonials>
        <Swiper {...params}>
          {aboutCompany.testimonials
            ? aboutCompany.testimonials.map((i, key) => (
                <Testimonials_Inner>
                  <Testimonials_Image_wrapper>
                    <RenderImage image={i.image} />

                    <H1 color="#fff" weight="800">
                      {i.name}
                    </H1>
                    <H1 color={company.colorPrimary} weight="600">
                      {i.title}
                    </H1>
                  </Testimonials_Image_wrapper>
                  <Testimonials_Text>
                    <H1 color="#fff" weight="800" size="30px" center>
                      They Say About Us ,
                    </H1>
                    <QoutesImage src="https://res.cloudinary.com/dqbgnn5hf/image/upload/v1578833909/doubleqoutes.png" />
                    <TextInner>{i.description}</TextInner>
                    <QoutesImage
                      src="https://res.cloudinary.com/dqbgnn5hf/image/upload/v1578833909/doubleqoutes.png"
                      right
                    />
                  </Testimonials_Text>
                </Testimonials_Inner>
              ))
            : null}
        </Swiper>
      </Testimonials>
    </WeOfferWrapper>
  );
};

export default withTranslation()(WeOffer);
