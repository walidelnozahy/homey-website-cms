import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import  { HTMLContent } from '../components/Content'
import HeaderPages from '../components/_common/HeaderPages/HeaderPages'
import OurServices from '../components/OurServices/OurServices'

export const ServicesPageTemplate = ({ title, content, contentComponent,
  headerImage,
  // seo_title,
  // seo_desc,
  services
}) => {
  // const PageContent = contentComponent || Content

  return (
    <div>
      <HeaderPages
          title={title}
          image={headerImage}
        />
        
        <OurServices 
        services={services}
        />
    {/* <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section> */}
    </div>
  )
}

ServicesPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const ServicesPage = ({ data }) => {
  const { markdownRemark: post } = data
  
  return (
    <Layout>
      <ServicesPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        headerImage={post.frontmatter.headerImage}
        seo_title={post.frontmatter.seo_title}
        seo_desc={post.frontmatter.seo_desc}
        services={post.frontmatter.services}
        
       
      />
    </Layout>
  )
}

ServicesPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ServicesPage

export const ServicesPageQuery = graphql`
  query ServicesPage($id: String!) {
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
        services {
          blurbs {
            image {
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
