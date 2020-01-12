import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import  { HTMLContent } from '../components/Content'
import HeaderPages from '../components/_common/HeaderPages/HeaderPages'

import ContactPageContent from "../components/ContactPageContent/ContactPageContent";

export const ContactPageTemplate = ({ title, content, contentComponent,
  headerImage,
  // seo_title,
  // seo_desc,
  mainTitle,
description
}) => {
  // const PageContent = contentComponent || Content

  return (
    <div>
      <HeaderPages
          title={title}
          image={headerImage}
        />
        <ContactPageContent mainTitle={mainTitle} description={description}/>
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

ContactPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const ContactPage = ({ data }) => {
  const { markdownRemark: post } = data
  
  return (
    <Layout>
      <ContactPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        headerImage={post.frontmatter.headerImage}
        seo_title={post.frontmatter.seo_title}
        seo_desc={post.frontmatter.seo_desc}
        mainTitle={post.frontmatter.mainTitle}
        description={post.frontmatter.description}
      />
      
    </Layout>
  )
}

ContactPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ContactPage

export const ContactPageQuery = graphql`
  query ContactPage($id: String!) {
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
        mainTitle
        description
      }
    }
  }
`
