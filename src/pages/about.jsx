import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "react-i18next";

import Layout from "../components/Layout";
import { HTMLContent } from "../components/Content";
import HeaderPages from "../components/_common/HeaderPages/HeaderPages";
import AboutContent from "../components/AboutContent/AboutContent";

const AboutPage = ({ pageContext: { locale }, ...props }) => {
  const {
    data: {
      aboutPageData: { frontmatter }
    }
  } = props;
  console.log("frontmatter", frontmatter);
  const { t } = useTranslation();
  return (
    <Layout locale={locale} path={props.uri}>
      <HeaderPages
        title={frontmatter.title}
        image={frontmatter.headerImage}
        // "https://res.cloudinary.com/dqbgnn5hf/image/upload/v1571934056/about-char2.png"
      />
      <AboutContent
        firstHeading={frontmatter.firstHeading}
        firstText={frontmatter.firstText}
        secondHeading={frontmatter.secondHeading}
        secondText={frontmatter.secondText}
        thirdHeading={frontmatter.thirdHeading}
        thirdText={frontmatter.thirdText}
        featuredimage={frontmatter.featuredimage}
        videoLink={frontmatter.videoLink}
      />
    </Layout>
  );
};

export default AboutPage;

export const pageQuery = graphql`
  query AboutContent($locale: String) {
    aboutPageData: markdownRemark(
      frontmatter: { pageKey: { eq: "page_about" }, locale: { eq: $locale } }
    ) {
      fields {
        slug
      }
      html
      frontmatter {
        pageKey
        seo_title
        seo_desc
        firstHeading
        headerImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        firstText
        secondHeading
        secondText
        thirdHeading
        thirdText
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
        videoLink
      }
    }
  }
`;
