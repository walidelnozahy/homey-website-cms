import React from "react";
import styled from "styled-components";
import { Container } from "../_common/Container/Container";
import { withTranslation } from "react-i18next";
// import WrappedRegistrationForm from "../ContactForm/ContactForm";
// import TitleYellow from "../TitleYellow/TitleYellow";
import company from "../../_company/company";
import PreviewCompatibleImage from "../PreviewCompatibleImage";

const OurServices = ({ t, services }) => {
  // const services = [
  //   {
  //     name: t("real estate consultant"),
  //     text: t("real estate consultant description"),
  //     icon:
  //       "https://res.cloudinary.com/dqbgnn5hf/image/upload/v1571925884/real-estate.png"
  //   },
  //   {
  //     name: t("property managment"),
  //     text: t("property managment description"),
  //     icon:
  //       "https://res.cloudinary.com/dqbgnn5hf/image/upload/v1571925885/managment.png"
  //   },
  //   {
  //     name: t("legal process"),
  //     text: t("legal process description"),
  //     icon:
  //       "https://res.cloudinary.com/dqbgnn5hf/image/upload/v1571925884/legal.png"
  //   },
  //   {
  //     name: t("university applications"),
  //     text: t("university applications description"),
  //     icon:
  //       "https://res.cloudinary.com/dqbgnn5hf/image/upload/v1571925885/universty.png"
  //   }
  // ];
  const iconSize = "130px";
  const OurServicesWrapper = styled.div`
  margin-top 40px;
  `;
  const OurServicesInner = styled.div`
    gap: 10px;

    @media (max-width: 992px) {
      grid-template-columns: 1fr;
    }
  `;
  const ServicesWrapper = styled.div``;
  const ServicesEachDiv = styled.div`
    display: grid;
    grid-template-columns: 20% 80%;
    gap: 20px;
    margin-top: 50px;
    @media (max-width: 992px) {
      grid-template-columns: 1fr;
    }
  `;
  const IconWrapper = styled.div`
    position: relative;
    text-align: center;
    display: flex;
    background: transparent linear-gradient(180deg, #0f6193 0%, #124970 100%) 0%
      0% no-repeat;
    border-radius: 50%;
    width: 150px;
    height: 150px;
    @media (max-width: 992px) {
      margin: auto;
    }
  `;
  //   const IconInner = styled.div`
  //     max-width: 240px;
  //     background: transparent linear-gradient(180deg, #0f6193 0%, #124970 100%) 0%
  //       0% no-repeat;
  //     border-radius: 0 0 100% 100%;
  //   `;
  const Image = styled.img`
    width: 100px;
    position: relative;
    max-width: ${iconSize};
    z-index: 2;
    margin: auto;
  `;
  const TextWrapper = styled.div``;
  const Title = styled.h1`
    color: ${company.colorPrimary};
    font-size: 27px;
  `;
  const Text = styled.div``;
  const RightColumn = styled.div``;
  return (
    <OurServicesWrapper>
      <Container>
        <OurServicesInner>
          <ServicesWrapper>
            {services.blurbs.map(({ title, text, image }, key) => {
              return (
                <ServicesEachDiv key={key}>
                  <IconWrapper data-aos="fade-left">
                    {/* <IconInner> */}

                    {image ? (
                      image.childImageSharp &&
                      image.childImageSharp.fluid &&
                      image.childImageSharp.fluid.src ? (
                        <Image src={image.childImageSharp.fluid.src} />
                      ) : (
                        <PreviewCompatibleImage imageInfo={image} />
                      )
                    ) : null}
                    {/* </IconInner> */}
                  </IconWrapper>
                  <TextWrapper data-aos="fade-right">
                    <Title>{title}</Title>
                    <Text>{text}</Text>
                  </TextWrapper>
                </ServicesEachDiv>
              );
            })}
          </ServicesWrapper>
          {/* <RightColumn>
            <TitleYellow title={t("let us contact you")} />
            <WrappedRegistrationForm />
          </RightColumn> */}
        </OurServicesInner>
      </Container>
    </OurServicesWrapper>
  );
};

export default withTranslation()(OurServices);
