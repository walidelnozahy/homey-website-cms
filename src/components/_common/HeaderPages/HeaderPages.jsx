import React from "react";
import styled from "styled-components";
import { withTranslation } from "react-i18next";
import { Container } from "../Container/Container";
import company from "../../../_company/company";

import RenderImage from "../Image/RenderImage";

const HeaderPages = ({ title, image, t }) => {
  const HeaderPagesWrapper = styled.div`
    background-color: ${company.colorPrimary};
    background-position: center;
    background-size: cover;
    background-image: url("https://res.cloudinary.com/dqbgnn5hf/image/upload/v1571475728/background-blue.jpg");

    height: 50vh;

    @media (max-width: 992px) {
      height: 70vh;
    }
  `;
  const HeaderPagesInner = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

    gap: 30px;
    @media (max-width: 992px) {
      grid-template-columns: 1fr;
      gap: 10px;
    }
  `;

  const HeaderTitle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    @media (max-width: 992px) {
    }
  `;
  const H1 = styled.h1`
    font-size: 70px;
    color: #fff;
    @media (max-width: 992px) {
      font-size: 50px;
      text-align: center;
    }
  `;
  const CharacterWrapper = styled.div`
    text-align: center;
    height: 50vh;
    overflow: hidden;
  `;

  return (
    <HeaderPagesWrapper>
      <Container>
        <HeaderPagesInner>
          <HeaderTitle data-aos="fade-right">
            <H1>{title}</H1>
          </HeaderTitle>
          <CharacterWrapper data-aos="fade-left">
            {/* <Character src={image} /> */}
            <RenderImage image={image} width="60%" />
            {/* {image &&
            image.childImageSharp &&
            image.childImageSharp.fluid &&
            image.childImageSharp.fluid.src ? (
              <Character src={image.childImageSharp.fluid.src} />
            ) : (
              <PreviewCompatibleImage imageInfo={image} />
            )} */}
          </CharacterWrapper>
        </HeaderPagesInner>
      </Container>
    </HeaderPagesWrapper>
  );
};

export default withTranslation()(HeaderPages);
