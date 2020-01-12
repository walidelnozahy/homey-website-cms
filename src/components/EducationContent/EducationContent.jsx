import React from "react";
import styled from "styled-components";
import { Container } from "../_common/Container/Container";
import { withTranslation } from "react-i18next";
import RenderImage from "../_common/Image/RenderImage";
import Content from "../Content";
const EducationContent = ({ t, contentImage, description }) => {
  const EducationContentWrapper = styled.div``;
  const EducationContentInner = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    margin-top: 40px;
    @media (max-width: 992px) {
      grid-template-columns: 1fr;
      gap: 10px;
    }
  `;
  const ImageWrapper = styled.div`
    width: 100%;
    height: 100%;
  `;

  const TextWrapper = styled.div``;
  return (
    <EducationContentWrapper>
      <Container>
        <EducationContentInner>
          <ImageWrapper data-aos="fade-up">
            <RenderImage image={contentImage} width="100%" />
            {/* <Image src="https://res.cloudinary.com/dqbgnn5hf/image/upload/v1569519654/edu-girl.png" /> */}
          </ImageWrapper>
          <TextWrapper data-aos="fade-up">
            <h2>{t("education")}</h2>
            <Content className="content" content={description} />
            {/* <p>{t("education description")}</p> */}
          </TextWrapper>
        </EducationContentInner>
      </Container>
    </EducationContentWrapper>
  );
};

export default withTranslation()(EducationContent);
