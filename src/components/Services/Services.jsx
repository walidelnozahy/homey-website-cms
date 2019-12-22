import React from "react";
import styled from "styled-components";
import { withTranslation } from "react-i18next";
const Services = ({ t }) => {
  const services = [
    {
      name: t("real estate consultant"),
      icon:
        "https://res.cloudinary.com/dqbgnn5hf/image/upload/v1568902178/services-3.png"
    },
    {
      name: t("property managment"),
      icon:
        "https://res.cloudinary.com/dqbgnn5hf/image/upload/v1568902178/services-2.png"
    },
    {
      name: t("legal process"),
      icon:
        "https://res.cloudinary.com/dqbgnn5hf/image/upload/v1568902178/services-1.png"
    },
    {
      name: t("university applications"),
      icon:
        "https://res.cloudinary.com/dqbgnn5hf/image/upload/v1568902178/services-4.png"
    }
  ];
  const LandingServices = styled.div`
    text-align: center;
  `;
  const LandingServicesInner = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 30px;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 125px;
      background: transparent linear-gradient(180deg, #0f6193 0%, #124970 100%)
        0% 0% no-repeat padding-box;
      z-index: -1;
    }
    @media (max-width: 992px) {
      grid-template-columns: 1fr;
      &::before {
        display: none;
      }
    }
  `;
  const EachDiv = styled.div`
    text-align: center;
    @media (max-width: 992px) {
      position: relative;
      &::before {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 125px;
        background: transparent
          linear-gradient(180deg, #0f6193 0%, #124970 100%) 0% 0% no-repeat
          padding-box;
        z-index: -1;
      }
    }
  `;
  const Icon = styled.div`
    max-width: 100%;
  `;
  const Image = styled.img`
    width: 170px;
    height: 170px;
  `;
  const H2 = styled.h2`
    color: #fff;
  `;
  return (
    <LandingServices>
      <h1>{t("our services")}</h1>
      <LandingServicesInner>
        {services.map(({ name, icon }, key) => (
          <EachDiv key={key} data-aos="fade-down">
            <Icon>
              <Image src={icon} alt="" />
            </Icon>
            <H2>{name}</H2>
          </EachDiv>
        ))}
      </LandingServicesInner>
    </LandingServices>
  );
};

export default withTranslation()(Services);
