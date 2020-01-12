import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import i18n from "i18next";
import { withTranslation } from "react-i18next";
import { Container } from "../_common/Container/Container";
import company from "../../_company/company";

const SellProperty = ({ t }) => {
  const SellPropertyWrapper = styled.div`
    text-align: center;
    position: relative;
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
    @media (max-width: 992px) {
      font-size: 40px;
      margin-top: 30px;
      text-align: center;
      &:before {
        height: 100%;
      }
    }
  `;
  const Grid = styled.div`
    display: grid;
    grid-template-columns: 60% 40%;
    @media (max-width: 992px) {
      grid-template-columns: 1fr;
    }
  `;
  const Heading1 = styled.h1`
    font-size: 90px;
    text-align: ${props => props.align || `left`};
    color: ${props => props.color || company.colorSecondary};
    margin: 0;
    @media (max-width: 992px) {
      font-size: 40px;
      text-align: center;
      margin: auto;
    }
  `;
  const Image = styled.img`
    max-width: 400px;
    @media (max-width: 767px) {
      max-width: 100%;
    }
  `;
  const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: auto;
  `;

  return (
    <SellPropertyWrapper>
      <Container>
        <Grid>
          <TextWrapper>
            <Heading1
              align={`${
                i18n.language === `ar` || i18n.language === `pr`
                  ? `right`
                  : `left`
              }`}
              data-aos="fade-up"
            >
              {t("let us")}
            </Heading1>
            <Heading1 color="#fff" align="center" data-aos="fade-up">
              {t("sell your")}
            </Heading1>
            <Heading1
              align={`${
                i18n.language === `ar` || i18n.language === `pr`
                  ? `left`
                  : `right`
              }`}
              data-aos="fade-up"
            >
              {t("property")}
            </Heading1>
          </TextWrapper>
          <div data-aos="fade-right">
            <Image
              src="https://res.cloudinary.com/dqbgnn5hf/image/upload/v1569173009/homey-realestate-sell.png"
              alt=""
            />
          </div>
        </Grid>
      </Container>
    </SellPropertyWrapper>
  );
};
SellProperty.propTypes = {
  t: PropTypes.func.isRequired
};
export default withTranslation()(SellProperty);
