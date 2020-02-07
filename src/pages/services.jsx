import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "react-i18next";

import Layout from "../components/Layout";

import HeaderPages from "../components/_common/HeaderPages/HeaderPages";
import OurServices from "../components/OurServices/OurServices";

const ServicesPage = ({ pageContext: { locale }, ...props }) => {
  const {
    data: {
      servicesPageData: { frontmatter }
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

      <OurServices services={frontmatter.services} />
    </Layout>
  );
};

export default ServicesPage;

export const pageQuery = graphql`
  query ServicesContent($locale: String) {
    servicesPageData: markdownRemark(
      frontmatter: { pageKey: { eq: "page_services" }, locale: { eq: $locale } }
    ) {
      fields {
        slug
      }
      html
      frontmatter {
        pageKey
        seo_title
        seo_desc
        headerImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        services {
          blurbs {
            text
            title
          }
        }
      }
    }
  }
`;

// image {
//   childImageSharp {
//     fluid {
//       ...GatsbyImageSharpFluid
//     }
//   }
// }
