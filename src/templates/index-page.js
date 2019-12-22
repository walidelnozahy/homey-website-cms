import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'
import HeaderCarousel from '../components/HeaderCarousel/HeaderCarousel'
import CategoriesProjects from '../components/CategoriesProjects/CategoriesProjects'
import WeOffer from '../components/WeOffer/WeOffer'
import ContactSection from "../components/ContactSection/ContactSection";
import SellProperty from "../components/SellProperty/SellProperty";
import Services from "../components/Services/Services";

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
  projectCategories,
  aboutCompany
}) => (
  <div>
    <HeaderCarousel carouselItems={intro.blurbs}/>
    <CategoriesProjects projectCategories={projectCategories}/>
    <Services />
    <WeOffer aboutCompany={aboutCompany}/>

<SellProperty />
<ContactSection />
{/*     
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile">
                    <h1 className="title">{mainpitch.title}</h1>
                  </div>
                  <div className="tile">
                    <h3 className="subtitle">{mainpitch.description}</h3>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      {heading}
                    </h3>
                    <p>{description}</p>
                  </div>
                </div>
                <Features gridItems={intro.blurbs} />
                <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/products">
                      See all products
                    </Link>
                  </div> 
                </div>
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Latest stories
                  </h3>
                  <BlogRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
console.log(frontmatter,'frontmatter')
console.log(data,'data 2')
  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
        projectCategories={frontmatter.projectCategories}
        aboutCompany={frontmatter.aboutCompany}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate($id: String!) {
    markdownRemark(id: { eq: $id })  {
      frontmatter {
        title
        heading
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
          sections {
            text
            
          }
          firstDescription
          firstHeading
          secondDescription
          secondHeading
          thirdHeading
          videoLink
        }
        
      }
    }
  }
`
