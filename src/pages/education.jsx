import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "react-i18next";

import Layout from "../components/Layout";

import HeaderPages from "../components/_common/HeaderPages/HeaderPages";
import OurPartners from "../components/OurPartners/OurPartners";
import EducationContent from "../components/EducationContent/EducationContent";

const EducationPage = ({ pageContext: { locale }, ...props }) => {
  const {
    data: {
      educationPageData: { frontmatter }
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

      <EducationContent
        contentImage={frontmatter.contentImage}
        description={frontmatter.description}
      />
      {frontmatter.universities ? (
        <OurPartners universities={frontmatter.universities} />
      ) : null}
    </Layout>
  );
};

export default EducationPage;

export const pageQuery = graphql`
  query EducationContent($locale: String) {
    educationPageData: markdownRemark(
      frontmatter: {
        pageKey: { eq: "page_education" }
        locale: { eq: $locale }
      }
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
        description

        universities {
          university {
            text
            title
          }
        }
      }
    }
  }
`;
// universityImage {
//   childImageSharp {
//     fluid {
//       ...GatsbyImageSharpFluid
//     }
//   }
// }
// contentImage {
//   childImageSharp {
//     fluid {
//       ...GatsbyImageSharpFluid
//     }
//   }
// }
