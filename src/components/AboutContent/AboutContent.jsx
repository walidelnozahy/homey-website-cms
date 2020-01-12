import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import { Container } from "../_common/Container/Container";
import { withTranslation } from "react-i18next";
import PreviewCompatibleImage from "../PreviewCompatibleImage";
const AboutContent = ({
  t,
  firstHeading,
  firstText,
  secondHeading,
  secondText,
  thirdHeading,
  thirdText,
  featuredimage,
  videoLink
}) => {
  const AboutContentWrapper = styled.div`
    margin-top: 30px;
  `;
  const FirstSection = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media (max-width: 992px) {
      grid-template-columns: 1fr;
    }
  `;
  const TextDiv = styled.div``;

  const SecondSection = styled.div`
    margin-top: 40px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    padding: 0 40px;
    @media (max-width: 992px) {
      grid-template-columns: 1fr;
    }
  `;
  const SecondSectionText = styled.div``;
  const VideoWrapper = styled.div`
    margin-top: 40px;
  `;

  return (
    <AboutContentWrapper>
      <Container>
        <FirstSection data-aos="fade-up">
          <TextDiv>
            <h2>{firstHeading}</h2>
            <p>{firstText}</p>
          </TextDiv>
          {featuredimage ? (
            // <ImageDiv image={featuredimage.childImageSharp.fluid.src} />
            <PreviewCompatibleImage imageInfo={featuredimage} />
          ) : null}
        </FirstSection>
        <SecondSection>
          <SecondSectionText data-aos="fade-right">
            <h2>{secondHeading}</h2>
            <p>{secondText}</p>
          </SecondSectionText>
          <SecondSectionText data-aos="fade-left">
            <h2>{thirdHeading}</h2>
            <p>{thirdText}</p>
          </SecondSectionText>
        </SecondSection>
        <VideoWrapper data-aos="fade-up">
          <ReactPlayer
            url={videoLink}
            controls
            width={"100%"}
            height={"600px"}
          />
        </VideoWrapper>
      </Container>
    </AboutContentWrapper>
  );
};
export default withTranslation()(AboutContent);
