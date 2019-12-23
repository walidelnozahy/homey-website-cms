import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Divider } from "antd";
// import Spinner from "../Spinner/Spinner";
import { withTranslation } from "react-i18next";
// import { Link } from "react-router-dom";
import { shuffle } from "lodash";
import company from "../../../_company/company";
import { Container } from "../Container/Container";
import FooterLinks from "../../FooterLinks/FooterLinks";
// import { getMinPrice } from "real-estate-utils";

const Footer = ({
  projects,
  t
  // GlobalContext: {
  //   state: { currency }
  // }
}) => {
  // const gridGap = "20px";
  const FooterWrapper = styled.footer`
    position: relative;
    margin-top: 30px;
    &:before {
      content: "";
      position: absolute;
      background-color: ${company.colorPrimary};
      background-position: center;
      background-size: cover;
      width: 100%;
      height: 97%;
      left: 0;
      bottom: 0;
      z-index: -1;
    }
    @media (max-width: 767px) {
    }
  `;
  // const FirstSection = styled.div`
  //   display: grid;
  //   grid-template-columns: 1fr 1fr;
  //   gap: ${gridGap};
  //   @media (max-width: 767px) {
  //     grid-template-columns: 1fr;
  //   }
  // `;
  // const Left = styled.div`
  //   display: grid;
  //   grid-template-columns: 1fr 1fr 1fr;
  //   gap: ${gridGap};
  //   @media (max-width: 767px) {
  //     gap: 10px;
  //   }
  // `;
  // const Right = styled.div`
  //   background-image: url(${props =>
  //     props.image ||
  //     `https://res.cloudinary.com/drdxjay2t/image/upload/v1553171134/hp-header.jpg`});
  //   background-position: center;
  //   background-size: cover;
  //   height: 100%;
  //   width: 100%;
  //   position: relative;
  //   overflow: hidden;
  //   &:hover {
  //     div {
  //       top: 0;
  //     }
  //   }
  // `;
  // const ImageSquare = styled.div`
  //   overflow: hidden;
  //   position: relative;
  //   background-image: url(${props =>
  //     props.image ||
  //     `https://res.cloudinary.com/drdxjay2t/image/upload/v1553171134/hp-header.jpg`});
  //   background-position: center;
  //   background-size: cover;
  //   width: 200px;
  //   height: 200px;
  //   transition: all 0.3s ease-in-out;
  //   @media (max-width: 767px) {
  //     width: 100%;
  //     height: 100px;
  //   }

  //   &:hover {
  //     div {
  //       top: 0;
  //     }
  //   }
  // `;
  // const H2 = styled.h2`
  //   grid-column: 1/3;
  //   font-size: 50px;
  //   color: #fff;
  //   font-weight: 100;
  //   @media (max-width: 767px) {
  //     font-size: 30px;
  //   }
  // `;
  // const OverLay = styled.div`
  //   position: absolute;
  //   transition: all 0.3s ease-in-out;
  //   left: 0;
  //   top: 100%;
  //   width: 100%;
  //   height: 100%;
  //   background-color: rgba(0, 0, 0, 0.6);
  //   display: flex;
  // `;
  // const OverLayInner = styled.div`
  //   margin: auto;
  //   text-align: center;
  // `;
  // const InnerH2 = styled.h2`
  //   margin: auto;
  //   color: ${company.colorSecondary};
  // `;
  // const InnerP = styled.p`
  //   margin: auto;
  //   color: #fff;
  // `;

  const importantProjects = projects
    ? shuffle(projects.filter(i => i.rate === 3))
    : null;
  const BigProject = importantProjects
    ? importantProjects[importantProjects.length - 1]
    : null;

  return (
    <FooterWrapper>
      <Container>
        {/* {importantProjects && BigProject ? (
          <FirstSection>
            <Left data-aos="fade-up">
              <div style={{ gridColumn: `1/4`, height: `80px` }} />
              <H2>{t("recommended projects")}</H2>
              {importantProjects ? (
                importantProjects.map(
                  ({ id, code, coverImage, types, location }, key) => {
                    console.log(
                      getMinPrice({
                        types,
                        currencyRate: currency.rate
                      }),
                      "curr"
                    );
                    if (key < 4) {
                      return (
                        <Link
                          to={`/projects/${id}`}
                          key={key}
                          data-aos="fade-up"
                        >
                          <ImageSquare
                            image={coverImage ? coverImage.medium : null}
                          >
                            <OverLay>
                              <OverLayInner>
                                <InnerP>H-{code}</InnerP>
                                <InnerH2>
                                  {getMinPrice({
                                    types,
                                    currencyRate: currency.rate
                                  })}{" "}
                                  {currency.value}
                                </InnerH2>
                                <InnerP>{location.district}</InnerP>
                              </OverLayInner>
                            </OverLay>
                          </ImageSquare>
                        </Link>
                      );
                    }
                  }
                )
              ) : (
                <Spinner />
              )}
            </Left>
            {BigProject ? (
              <Right
                image={BigProject ? BigProject.coverImage.medium : null}
                data-aos="fade-up"
              >
                <OverLay>
                  <OverLayInner>
                    <InnerP>H-{BigProject.code}</InnerP>
                    <InnerH2>
                      {getMinPrice({
                        types: BigProject.types,
                        currencyRate: currency.rate
                      })}{" "}
                      {currency.value}
                    </InnerH2>
                    <InnerP>{BigProject.location.district}</InnerP>
                  </OverLayInner>
                </OverLay>
              </Right>
            ) : null}
          </FirstSection>
        ) : (
          <Spinner />
        )} */}

        <Divider style={{ margin: `50px auto` }} />
        <FooterLinks />
      </Container>
    </FooterWrapper>
  );
};
Footer.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation()(Footer);
