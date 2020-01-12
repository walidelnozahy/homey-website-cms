import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { withTranslation } from "react-i18next";
import { Container } from "../_common/Container/Container";
import styled from "styled-components";
import company from "../../_company/company";

import RenderImage from "../_common/Image/RenderImage";

const CategoriesProjects = ({ t, projectCategories }) => {
  const space = `70px;`;

  const CategoriesProjectsWrapper = styled.div`
    padding: 30px;
  `;
  const Title = styled.div`
    width: 400px;
    @media (max-width: 767px) {
      width: 100%;
    }
  `;
  const H1 = styled.h1`
    font-weight: ${props => (props.bold ? `800` : `auto`)};
    font-size: ${props => (props.bold ? `35px` : `auto`)};
  `;
  const CategoriesProjectsInner = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 120px;
    @media (max-width: 767px) {
      gap: 20px;
      grid-template-columns: 1fr;
    }
  `;
  const CategoriesProjectsEach = styled.div`
    padding: 16px;
    position: relative;
    transition: all 0.2s ease-in-out;
    &:first-child {
      margin-top: ${space};
      @media (max-width: 767px) {
        margin-top: 0;
      }
    }

    &:last-child {
      margin-top: -${space};
      @media (max-width: 767px) {
        margin-top: 0;
      }
    }
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 80px;
      height: 80px;
      background-color: ${company.colorSecondary};
      z-index: 1;
    }
    &:hover {
      transform: translateY(-5px);
    }
  `;
  const CategoriesProjectsEachImage = styled.div`
    position: relative;
    z-index: 2;
    width: 100%;
    height: 340px;
    img {
      height: 100%;
      width: auto !important;
    }
  `;
  const CategoriesProjectsText = styled.div`
    display: grid;
    grid-template-columns: 10% 90%;
    gap: 10px;
    padding-top: 20px;
  `;
  const Line = styled.div`
    height: 2px;
    background-color: red;
    width: 100%;
    margin-top: 10px;
  `;
  const CategoriesProjectsTextInner = styled.div``;
  const P = styled.p`
    font-weight: 100;
    font-size: 13px;
    color: black;
  `;
  if (!projectCategories) {
    return null;
  }
  return (
    <CategoriesProjectsWrapper>
      <Container>
        <Title data-aos="fade-left">
          <H1>{projectCategories.heading}</H1>
          <H1 bold>{projectCategories.subheading}</H1>
        </Title>
        <CategoriesProjectsInner>
          {projectCategories.categories.map(
            ({ image, title, text, link }, key) => (
              <CategoriesProjectsEach key={key} data-aos="fade-up">
                <Link to={`${link}`}>
                  <CategoriesProjectsEachImage>
                    <RenderImage image={image} width="100%" />
                  </CategoriesProjectsEachImage>
                  <CategoriesProjectsText data-aos="fade-right">
                    <Line />
                    <CategoriesProjectsTextInner>
                      <h2>{title}</h2>
                      <P>{text}</P>
                    </CategoriesProjectsTextInner>
                  </CategoriesProjectsText>
                </Link>
              </CategoriesProjectsEach>
            )
          )}
        </CategoriesProjectsInner>
      </Container>
    </CategoriesProjectsWrapper>
  );
};

CategoriesProjects.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation()(CategoriesProjects);
