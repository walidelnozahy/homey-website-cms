import React from "react";
import { Link, graphql, StaticQuery } from "gatsby";
import styled from "styled-components";
import PropTypes from "prop-types";
import ArrowLeft from "../_common/Arrows/ArrowLeft";
import ArrowRight from "../_common/Arrows/ArrowRight";
import CustomButton from "../_common/CustomButton/CustomButton";
import { Container } from "../_common/Container/Container";
import { getCurrencyRate } from "../../_utils/functions";
import { useTranslation } from "react-i18next";
import Swiper from "react-id-swiper";
import { toPath } from "../../_utils/functions";
import { orderBy, truncate } from "lodash";
import ListingsCarousel from "../ListingsCarousel/ListingsCarousel";
import i18n from "i18next";
import { isMobile } from "react-device-detect";
import { getMinPrice } from "real-estate-utils";
import * as load from "@eahefnawy/functions.js";
import company from "../../_company/company";
import TitleProject from "../TitleProject/TitleProject";

const ImportantProjects = ({
  data: {
    allProjects: { edges }
  }
}) => {
  const { t } = useTranslation();
  const lang = i18n.language;
  const currency = getCurrencyRate();
  const params = {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next-new",
      prevEl: ".swiper-button-prev-new"
    },
    grabCursor: false,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    slidesPerView: 1,
    renderPrevButton: () => <ArrowRight className="swiper-button-next-new" />,
    renderNextButton: () => <ArrowLeft className="swiper-button-prev-new" />
  };
  const ImportantProjectsWrapper = styled.div`
    margin: 20px auto;
  `;
  const CarouselIEachDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 20px;
    @media (max-width: 992px) {
      grid-template-columns: 1fr;
    }
  `;
  const CarouselImageEach = styled.div`
    background-image: url(${props => props.image});
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 400px;
    border-radius: 20px;
  `;
  const Text = styled.div`
    border-radius: 20px;
    background-color: #ededed;
    padding: 20px;
  `;
  const P = styled.p`
    color: ${props => (props.title ? company.colorPrimary : `black`)};
    font-weight: ${props => (props.title ? 600 : `auto`)};
    font-size: ${props => (props.title ? `20px` : `auto`)};
  `;
  const Price = styled.h1`
    text-align: center;
    font-size: 60px;
    color: ${company.colorPrimary};
    font-weight: 600;
    @media (max-width: 992px) {
      font-size: 30px;
    }
  `;
  const NearByWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 20px;
    @media (max-width: 992px) {
      grid-template-columns: 1fr 1fr;
    }
  `;
  const NearByEach = styled.div`
    text-align: center;
  `;
  const ImageWrapper = styled.div`
    background-color: ${company.colorPrimary};
    padding: 15px;
    border-radius: 50%;
    width: 70px;
    height: 70px;
    margin: auto;
  `;
  const Image = styled.img`
    width: 100%;
  `;
  const SeeMore = styled.div`
  text-align: center;
  p {
    background-color: ${company.colorPrimary}
  color: #fff;
  padding 10px;
  display: table;
  margin: auto;
  }
  `;

  return (
    <ImportantProjectsWrapper>
      <Container>
        <TitleProject title={t("important projects")} center />
        <br />
        <br />
        <br />
        <Swiper {...params}>
          {orderBy(edges, "updatedAt", "desc").map(
            ({ node: { code, coverImage, types, nearby, en } }, key) => {
              return (
                <Link to={toPath(lang, `${code}`)}>
                  <CarouselIEachDiv key={key}>
                    <CarouselImageEach
                      image={
                        coverImage
                          ? isMobile
                            ? coverImage.small
                            : coverImage.medium
                          : ""
                      }
                    />
                    <Text>
                      <P>
                        {" "}
                        {truncate([lang].description || en.description, {
                          length: 300,
                          separator: " "
                        })}
                      </P>
                      <NearByWrapper>
                        {nearby.map((e, i) => {
                          if (i <= 3) {
                            return (
                              <NearByEach>
                                <ImageWrapper>
                                  <Image src={e.icon ? e.icon.medium : null} />
                                </ImageWrapper>
                                <P title>{e[lang] || e.en}</P>
                                <P>
                                  {e.distance}
                                  {e.unit}
                                </P>
                              </NearByEach>
                            );
                          }
                          return null;
                        })}
                      </NearByWrapper>
                      <Price>
                        {types.length
                          ? getMinPrice({
                              types,
                              currencyRate: currency ? currency.rate : 1
                            })
                          : ""}{" "}
                        {currency ? currency.value : "TRY"}
                      </Price>
                      <SeeMore>
                        <p>SEE MORE</p>
                      </SeeMore>
                    </Text>
                  </CarouselIEachDiv>
                </Link>
              );
            }
          )}
        </Swiper>
      </Container>
    </ImportantProjectsWrapper>
  );
};
// RecentListings.propTypes = {
//   t: PropTypes.func.isRequired
// };

// export default withTranslation()(RecentListings);

export default () => (
  <StaticQuery
    query={graphql`
      {
        allProjects(filter: { rate: { eq: 3 } }) {
          edges {
            node {
              alternative_id
              rate
              category
              code
              createdAt
              delivery
              installment {
                period
                payment
              }
              coordinates {
                lat
                lng
              }
              coverImage {
                id
                small
                medium
                large
              }
              en {
                description
                nearbyDescription
                title
              }
              features {
                ar
                createdAt
                en
                fr
                icon {
                  large
                  medium
                  small
                }
                id
                name
                pr
                updatedAt
              }
              fr {
                description
                nearbyDescription
              }
              geoLocation {
                city
                district
              }
              images {
                id
                large
                medium
                small
              }
              landingImage_1 {
                small
                medium
                large
                id
              }
              landingImage_2 {
                id
                large
                medium
                small
              }
              location {
                city
                district
              }
              name
              nearby {
                ar
                createdAt
                distance
                fr
                en
                icon {
                  large
                  medium
                  small
                }
                id
                name
                pr
                unit
                updatedAt
              }
              pr {
                description
                nearbyDescription
              }
              published
              ready
              types {
                id
                key
                type
                maxPrice
                minPrice
                maxArea
                minArea
              }
              updatedAt
              updatedBy
              videos
            }
          }
        }
      }
    `}
    render={(data, count) => <ImportantProjects data={data} count={count} />}
  />
);
