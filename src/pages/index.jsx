import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import HeaderCarousel from "../components/HeaderCarousel/HeaderCarousel";
import CategoriesProjects from "../components/CategoriesProjects/CategoriesProjects";
import WeOffer from "../components/WeOffer/WeOffer";
import ContactSection from "../components/ContactSection/ContactSection";
import SellProperty from "../components/SellProperty/SellProperty";
import Services from "../components/Services/Services";
import BlogRoll from "../components/BlogRoll";
import RecentListings from "../components/RecentListings/RecentListings";
import ImportantProjects from "../components/ImportantProjects/ImportantProjects";

const IndexPage = ({ pageContext: { locale }, ...props }) => {
  console.log("props", props);
  const {
    data: {
      homePageData: { frontmatter }
    }
  } = props;
  console.log("frontmatter home", frontmatter);
  return (
    <Layout locale={locale} path={props.uri}>
      <HeaderCarousel carouselItems={frontmatter.intro.blurbs} />
      <Services />
      <ImportantProjects />
      <WeOffer aboutCompany={frontmatter.aboutCompany} />
      <RecentListings />
      <BlogRoll />
      <SellProperty />
      <ContactSection />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query HomeContent($locale: String) {
    homePageData: markdownRemark(
      frontmatter: { pageKey: { eq: "page_home" }, locale: { eq: $locale } }
    ) {
      fields {
        slug
      }
      frontmatter {
        pageKey
        seo_title
        seo_desc
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
            link
          }
        }
        projectCategories {
          heading
          subheading
          categories {
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
            title
            link
          }
        }
        aboutCompany {
          testimonials {
            description
            name
            title
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          firstDescription
          firstHeading
          secondDescription
          secondHeading
          thirdHeading
          videoLink
          mainImage {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
