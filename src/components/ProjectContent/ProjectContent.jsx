import React from "react";
import styled from "styled-components";
import { Container } from "../../components/_common/Container/Container";
import ContactForm from "../../components/ContactForm/ContactForm";
import ProjectCarousel from "../../components/ProjectCarousel/ProjectCarousel";
import FourSquares from "../FourSquares/FourSquares";
import Description from "../../components/Description/Description";
import Types from "../../components/Types/Types";
import Map from "../../components/Map/Map";
import ProjectAd from "../Ads/ProjectAd/ProjectAd";
import { isMobile } from "react-device-detect";
import CarouselVideos from "../../components/CarouselVideos/CarouselVideos";
import LocationInfo from "../LocationInfo/LocationInfo";

const ProjectContent = ({ props: { project, locale } }) => {
  const ProjectContentWrapper = styled.div``;
  const ProjectContentInner = styled.div`
    display: grid;
    grid-template-columns: 30% 70%;
    margin-top: 30px;
    gap: 30px;
    @media (max-width: 992px) {
      grid-template-columns: 1fr;
      gap: 10px;
      max-width: 100% !important;
    }
  `;
  const ContactColumn = styled.div``;
  const ProjectColumn = styled.div``;

  return (
    <ProjectContentWrapper>
      <Container>
        <ProjectContentInner>
          <ContactColumn data-aos="fade-up">
            <ContactForm title full />
            <ProjectAd />
          </ContactColumn>
          <ProjectColumn>
            <ProjectCarousel project={project} />

            <FourSquares item={project} />
            <Description project={project} text="description" />
            <Description project={project} text="nearbyDescription" />
            <Types project={project} />
            <LocationInfo item={project} />
            <Map item={project} title />
          </ProjectColumn>
        </ProjectContentInner>
      </Container>
      <Container>
        <CarouselVideos item={project} />
      </Container>
    </ProjectContentWrapper>
  );
};

export default ProjectContent;
