import React, { useEffect, useState } from "react";
import { Link, graphql, StaticQuery } from "gatsby";
import { Result, Button } from "antd";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Container } from "../_common/Container/Container";
import Listing from "../Listing/Listing";
import SearchForm from "../SearchForm/SearchForm";

const queryString = require("query-string");

const Listings = ({
  data: {
    allProjects: { edges }
  }
}) => {
  console.log("edges", edges[0].node);
  const { t } = useTranslation();
  // const search =
  //   global && global.window
  //     ? queryString.parse(global.window.location.search)
  const defaultSearch = {
    city: "all",
    district: "all",
    status: "all",
    category: "all"
  };
  //     : "";
  const [projects, setProjects] = useState([]);
  const [search, setSearch] = useState(defaultSearch);
  const [recomended, setRecomended] = useState(null);
  const [category, setCategory] = useState("");
  const [projectsArr, setProjectsArr] = useState([]);
  const [lastKey, setLastKey] = useState("");
  const [loading, setLoading] = useState(false);
  const [properties, setProperties] = useState([]);
  const handleChange = e => setCategory(e);

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
  console.log("search", search);
  const renderProjects = projects =>
    projects
      .filter(({ node }) =>
        search.city !== "all" ? node.location.city === search.city : node
      )
      .filter(({ node }) =>
        search.district !== "all"
          ? node.location.district === search.district
          : node
      )
      .filter(({ node }) =>
        search.status !== "all" ? node.ready === search.status : node
      )
      .filter(({ node }) =>
        search.category !== "all" ? node.category === search.category : node
      )
      .filter(({ node }) => (recomended ? node.rate === 3 : node))

      .map(({ node }, key) => <Listing listing={node} key={key} />);
  return (
    <ListingsWrapper>
      <Container>
        {/* <Title>{t(search.category)}</Title> */}
        <SearchForm
          projects={edges}
          search={search}
          setSearch={setSearch}
          defaultSearch={defaultSearch}
        />
        <ListingsInner data-aos="fade-up">
          {renderProjects(edges).length ? (
            <div className="ItemsCards">{renderProjects(edges)}</div>
          ) : (
            <div
              dir="ltr"
              style={{
                textAlign: `center`,
                display: `flex`,
                justifyContent: `center`
              }}
            >
              <Result
                dir="ltr"
                style={{ margin: `auto` }}
                status="404"
                title={t("no search results")}
                subTitle={t("sorry, no projects matching your search")}
                extra={
                  <Button.Group>
                    <Button
                      type="primary"
                      onClick={() => setSearch(defaultSearch)}
                    >
                      {t("reset search")}
                    </Button>
                    <Button
                      type="primary"
                      onClick={() => {
                        setSearch(defaultSearch);
                        setRecomended(true);
                      }}
                    >
                      {t("see recomended projects")}
                    </Button>
                  </Button.Group>
                }
              />
            </div>
          )}
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
