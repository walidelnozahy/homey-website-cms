import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'
import HeaderPages from '../components/_common/HeaderPages/HeaderPages'
import OurPartners from '../components/OurPartners/OurPartners'
import EducationContent from '../components/EducationContent/EducationContent'

export const EducationPageTemplate = ({ title, content, contentComponent,
  headerImage,
  // seo_title,
  // seo_desc,
  description,
contentImage,
universities

}) => {
  // const PageContent = contentComponent || Content

  return (
    <div>
      <HeaderPages
          title={title}
          image={headerImage}
        />
        <EducationContent 
          contentImage={contentImage}
          description={description}
        />
        {universities ? 
        <OurPartners 
        universities={universities}
        />
        : null}
    
    </div>
  )
}

EducationPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const EducationPage = ({ data }) => {
  const { markdownRemark: post } = data
  
  return (
    <Layout>
      <EducationPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        headerImage={post.frontmatter.headerImage}
        seo_title={post.frontmatter.seo_title}
        seo_desc={post.frontmatter.seo_desc}
        description={post.frontmatter.description}
        contentImage={post.frontmatter.contentImage}
        universities={post.frontmatter.universities}
      />
    </Layout>
  )
}

EducationPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default EducationPage

export const EducationPageQuery = graphql`
  query EducationPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
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
        contentImage { 
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        universities {
          university {
            universityImage {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
            title
          }
        }
      }
    }
  }
`
