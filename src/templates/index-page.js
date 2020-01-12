import React from 'react'
import PropTypes from 'prop-types'
import {  graphql } from 'gatsby'

import Layout from '../components/Layout'
// import Features from '../components/Features'
// import BlogRoll from '../components/BlogRoll'
import HeaderCarousel from '../components/HeaderCarousel/HeaderCarousel'
import CategoriesProjects from '../components/CategoriesProjects/CategoriesProjects'
import WeOffer from '../components/WeOffer/WeOffer'
import ContactSection from "../components/ContactSection/ContactSection";
import SellProperty from "../components/SellProperty/SellProperty";
import Services from "../components/Services/Services";
import BlogRoll from '../components/BlogRoll'
import RecentListings from '../components/RecentListings/RecentListings'
import ImportantProjects from '../components/ImportantProjects/ImportantProjects'


 



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
    <ImportantProjects />
    <WeOffer aboutCompany={aboutCompany}/>
    <RecentListings />
    <BlogRoll /> 
    <SellProperty />
    <ContactSection />

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
        }
        
      }
    }
  }
`
