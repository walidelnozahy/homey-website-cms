import React from "react";
import { Link, graphql, StaticQuery } from "gatsby";
import { Spin } from "antd";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import company from "../../_company/company";
import { getCurrencyRate } from "../../_utils/functions";
import { getMinPrice } from "real-estate-utils";
import { shuffle } from "lodash";

const FooterProjects = ({
  data: {
    allProjects: { edges }
  }
}) => {
  const gridGap = `20px`;
  const FirstSection = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${gridGap};
    @media (max-width: 767px) {
      grid-template-columns: 1fr;
    }
  `;
  const Left = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: ${gridGap};
    @media (max-width: 767px) {
      gap: 10px;
    }
  `;
  const Right = styled.div`
    background-image: url(${props =>
      props.image ||
      `https://res.cloudinary.com/drdxjay2t/image/upload/v1553171134/hp-header.jpg`});
    background-position: center;
    background-size: cover;
    height: 100%;
    width: 100%;
    position: relative;
    overflow: hidden;
    &:hover {
      div {
        top: 0;
      }
    }
  `;
  const ImageSquare = styled.div`
    overflow: hidden;
    position: relative;
    background-image: url(${props =>
      props.image ||
      `https://res.cloudinary.com/drdxjay2t/image/upload/v1553171134/hp-header.jpg`});
    background-position: center;
    background-size: cover;
    width: 200px;
    height: 200px;
    transition: all 0.3s ease-in-out;
    @media (max-width: 767px) {
      width: 100%;
      height: 100px;
    }

    &:hover {
      div {
        top: 0;
      }
    }
  `;
  const H2 = styled.h2`
    grid-column: 1/3;
    font-size: 50px;
    color: #fff;
    font-weight: 100;
    @media (max-width: 767px) {
      font-size: 30px;
    }
  `;
  const OverLay = styled.div`
    position: absolute;
    transition: all 0.3s ease-in-out;
    left: 0;
    top: 100%;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
  `;
  const OverLayInner = styled.div`
    margin: auto;
    text-align: center;
  `;
  const InnerH2 = styled.h2`
    margin: auto;
    color: ${company.colorSecondary};
  `;
  const InnerP = styled.p`
    margin: auto;
    color: #fff;
  `;

  const { t } = useTranslation();
  const importantProjects = edges ? shuffle(edges) : null;
  const BigProject = importantProjects
    ? importantProjects[importantProjects.length - 1].node
    : null;
  return (
    <div>
      {importantProjects && BigProject ? (
        <FirstSection>
          <Left data-aos="fade-up">
            <div style={{ gridColumn: `1/4`, height: `80px` }} />
            <H2>{t("recommended projects")}</H2>
            {importantProjects ? (
              importantProjects.map(
                ({ node: { id, code, coverImage, types, location } }, key) => {
                  if (key < 4) {
                    return (
                      <Link to={`/projects/${id}`} key={key} data-aos="fade-up">
                        <ImageSquare
                          image={coverImage ? coverImage.medium : null}
                        >
                          <OverLay>
                            <OverLayInner>
                              <InnerP>H-{code}</InnerP>
                              <InnerH2>
                                {getMinPrice({
                                  types,
                                  currencyRate: getCurrencyRate() || 1
                                })}{" "}
                                {getCurrencyRate() || "TRY"}
                              </InnerH2>
                              <InnerP>{location.district}</InnerP>
                            </OverLayInner>
                          </OverLay>
                        </ImageSquare>
                      </Link>
                    );
                  }
                  return null;
                }
              )
            ) : (
              <Spin />
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
                      currencyRate: getCurrencyRate() || 1
                    })}{" "}
                    {getCurrencyRate() || "TRY"}
                  </InnerH2>
                  <InnerP>{BigProject.location.district}</InnerP>
                </OverLayInner>
              </OverLay>
            </Right>
          ) : null}
        </FirstSection>
      ) : (
        <Spin />
      )}
    </div>
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
    render={(data, count) => <FooterProjects data={data} count={count} />}
  />
);
