import React from "react";
import styled from "styled-components";
import { withTranslation } from "react-i18next";
import company from "../../_company/company";
import TitleProject from "../TitleProject/TitleProject";

const Services = ({ t }) => {
  const services = [
    {
      name: t("real estate consultant"),
      icon:
        "https://res.cloudinary.com/dqbgnn5hf/image/upload/v1571925884/real-estate.png"
    },
    {
      name: t("property managment"),
      icon:
        "https://res.cloudinary.com/dqbgnn5hf/image/upload/v1571925885/managment.png"
    },
    {
      name: t("legal process"),
      icon:
        "https://res.cloudinary.com/dqbgnn5hf/image/upload/v1571925884/legal.png"
    },
    {
      name: t("university applications"),
      icon:
        "https://res.cloudinary.com/dqbgnn5hf/image/upload/v1571925885/universty.png"
    }
  ];
  const LandingServices = styled.div`
    text-align: center;
    margin-bottom: 100px;
  `;
  const LandingServicesInner = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 10px;
    position: relative;
    @media (max-width: 992px) {
      grid-template-columns: 1fr;
      gap: 150px;
      &::before {
        display: none;
      }
    }
  `;
  const EachDiv = styled.div`
    text-align: center;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      left: 50%;
      top: 60%;
      transform:  translate(-50%,-50%) rotateZ(45deg) ;
      width: 200px;
      height: 200px;
      background: #fff;
      border 2px solid  ${company.colorSecondary};
      border-radius: 20px;
      
      z-index: 1;
    }
    &::after {
      content: "";
      position: absolute;
      left: 50%;
      top: 60%;
      transform: translate(-50%,-50%) rotateZ(45deg) ;
      width: 190px;
      height: 190px;
      background: ${company.colorPrimary};
      
      border-radius: 20px;
      
      z-index: 2;
    }
  `;
  const Icon = styled.div`
    max-width: 100%;
    position: relative;
    z-index: 3;
  `;
  const Image = styled.img`
    width: 80px;
    height: 80px;
  `;
  const H2 = styled.h2`
    position: relative;
    z-index: 3;
    color: ${company.colorSecondary};
    font-weight: 100;
  `;
  return (
    <LandingServices>
      <TitleProject title={t("our services")} center />
      <br />
      <br />
      <br />
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
