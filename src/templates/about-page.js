import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import  { HTMLContent } from '../components/Content'
import HeaderPages from '../components/_common/HeaderPages/HeaderPages'
import AboutContent from '../components/AboutContent/AboutContent'

export const AboutPageTemplate = ({ title, content, contentComponent,
  headerImage,
  // seo_title,
  // seo_desc,
  firstHeading,
  firstText,
  secondHeading,
  secondText,
  thirdHeading,
  thirdText,
  featuredimage,
  videoLink
}) => {
  // const PageContent = contentComponent || Content

  return (
    <div>
      <HeaderPages
          title={title}
          image={headerImage}
          // "https://res.cloudinary.com/dqbgnn5hf/image/upload/v1571934056/about-char2.png"
        />
        <AboutContent 
        firstHeading={firstHeading}
        firstText={firstText}
        secondHeading={secondHeading}
        secondText={secondText}
        thirdHeading={thirdHeading}
        thirdText={thirdText}
        featuredimage={featuredimage}
        videoLink={videoLink}
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

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data
  
  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        headerImage={post.frontmatter.headerImage}
        seo_title={post.frontmatter.seo_title}
        seo_desc={post.frontmatter.seo_desc}
        firstHeading={post.frontmatter.firstHeading}
        firstText={post.frontmatter.firstText}
        secondHeading={post.frontmatter.secondHeading}
        secondText={post.frontmatter.secondText}
        thirdHeading={post.frontmatter.thirdHeading}
        thirdText={post.frontmatter.thirdText}
        featuredimage={post.frontmatter.featuredimage}
        videoLink={post.frontmatter.videoLink}
        content={post.html}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage




export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
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
`
