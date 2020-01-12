import React, { useEffect, useState } from "react";
import { Link, graphql, StaticQuery } from "gatsby";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Container } from "../_common/Container/Container";
import Listing from "../Listing/Listing";

const queryString = require("query-string");

const Listings = ({
  data: {
    allProjects: { edges }
  }
}) => {
  const { t } = useTranslation();
  const search =
    global && global.window
      ? queryString.parse(global.window.location.search)
      : "";
  const [projects, setProjects] = useState([]);
  const [projectsArr, setProjectsArr] = useState([]);
  const [lastKey, setLastKey] = useState("");
  const [loading, setLoading] = useState(false);
  const [properties, setProperties] = useState([]);

  const ListingsWrapper = styled.div`
    margin-top: 30px;
  `;
  const ListingsInner = styled.div`
    .ItemsCards {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 50px;
      @media (max-width: 992px) {
        grid-template-columns: 1fr;
      }
    }
  `;
  const ListingsEach = styled.div`
    background-color: lightgrey;
  `;
  const Title = styled.h1`
    text-align: center;
  `;

  return (
    <ListingsWrapper>
      <Container>
        {/* <Title>{t(search.category)}</Title> */}
        <ListingsInner data-aos="fade-up">
          <div className="ItemsCards">
            {edges.map(({ node }, key) => (
              <Listing listing={node} key={key} />
            ))}
          </div>
        </ListingsInner>
      </Container>
    </ListingsWrapper>
  );
};

export default () => (
  <StaticQuery
    query={graphql`
      {
        allProjects {
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
    render={(data, count) => <Listings data={data} count={count} />}
  />
);
