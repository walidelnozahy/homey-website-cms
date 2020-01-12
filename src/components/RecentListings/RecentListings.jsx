import React from "react";
import { Link, graphql, StaticQuery } from "gatsby";
import styled from "styled-components";
import PropTypes from "prop-types";
import CustomButton from "../_common/CustomButton/CustomButton";
import { Container } from "../_common/Container/Container";
import { useTranslation } from "react-i18next";

import ListingsCarousel from "../ListingsCarousel/ListingsCarousel";

import * as load from "@eahefnawy/functions.js";
import company from "../../_company/company";

const RecentListings = ({
  data: {
    allProjects: { edges }
  }
}) => {
  const { t } = useTranslation();

  const RecentListings = styled.div``;
  const FirstDiv = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
    @media (max-width: 767px) {
      flex-direction: column;
    }
  `;
  const Text = styled.div`
    margin: auto 0;
  `;
  const BtnWrapper = styled.div`
    margin: auto 0;
  `;
  const H1 = styled.h1``;
  const P = styled.p`
    width: 60vw;
    @media (max-width: 767px) {
      width: 100%;
    }
  `;
  return (
    <RecentListings>
      <Container>
        <FirstDiv>
          <Text data-aos="fade-left">
            <H1>{t("latest projects")}</H1>
            <P>{t("latest projects description")}</P>
          </Text>
          <BtnWrapper data-aos="fade-right">
            <Link to="projects">
              <CustomButton text={t("view more")} />
            </Link>
          </BtnWrapper>
        </FirstDiv>
      </Container>
      <ListingsCarousel listings={edges} />
    </RecentListings>
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
    render={(data, count) => <RecentListings data={data} count={count} />}
  />
);
