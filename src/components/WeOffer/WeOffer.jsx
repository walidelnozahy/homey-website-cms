import React from "react";
import styled from "styled-components";
import i18n from "i18next";
import { withTranslation } from "react-i18next";
import company from "../../_company/company";
import CustomButton from "../_common/CustomButton/CustomButton";
import { CustomP } from "../_common/Elements";
import ReactPlayer from "react-player";
const WeOffer = ({ t, aboutCompany }) => {
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
  const ThirdSection = styled.div`
    background-color: ${company.colorSecondary};
    width: 90%;
    padding: 60px;
    margin: 60px 0 auto auto;
    @media (max-width: 767px) {
      width: 100%;
      padding: 30px;
    }
  `;
  const ThirdSection_Inner = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 50px;
    margin-top: 50px;
    @media (max-width: 767px) {
      grid-template-columns: 1fr;
      margin-top: 10px;
    }
  `;
  const ThirdSection_Inner_each = styled.div`
    color: #fff;
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
      <ThirdSection>
        <h1
          style={{
            color: `#fff`,
            textAlign: `center`,
            fontSize: `35px`,
            fontWeight: `300`
          }}
          data-aos="fade-down"
        >
          {aboutCompany.thirdHeading}
        </h1>
        <ThirdSection_Inner>
          {aboutCompany.sections.map((i, key) => (
            <ThirdSection_Inner_each data-aos="fade-up" key={key}>
              <h3 style={{ color: `#fff` }}>{i.title}</h3>
              <CustomP color="#fff">{i.text}</CustomP>
            </ThirdSection_Inner_each>
          ))}
        </ThirdSection_Inner>
      </ThirdSection>
    </WeOfferWrapper>
  );
};

export default withTranslation()(WeOffer);
