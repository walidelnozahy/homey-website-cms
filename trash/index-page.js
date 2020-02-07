import React from 'react'
import PropTypes from 'prop-types'
import {  graphql } from 'gatsby'

import Layout from '../src/components/Layout'
// import Features from '../components/Features'
// import BlogRoll from '../components/BlogRoll'
import HeaderCarousel from '../src/components/HeaderCarousel/HeaderCarousel'
import CategoriesProjects from '../src/components/CategoriesProjects/CategoriesProjects'
import WeOffer from '../src/components/WeOffer/WeOffer'
import ContactSection from "../src/components/ContactSection/ContactSection";
import SellProperty from "../src/components/SellProperty/SellProperty";
import Services from "../src/components/Services/Services";
import BlogRoll from '../src/components/BlogRoll'
import RecentListings from '../src/components/RecentListings/RecentListings'
import ImportantProjects from '../src/components/ImportantProjects/ImportantProjects'


 



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
  console.log('frontmatter',frontmatter)
  return (
    <Layout>
      <HeaderCarousel carouselItems={frontmatter.intro.blurbs}/>
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
