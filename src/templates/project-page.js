import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import i18n from "i18next";
import HeaderPages from '../components/_common/HeaderPages/HeaderPages'
import ContactSection from "../components/ContactSection/ContactSection";
import SellProperty from "../components/SellProperty/SellProperty";
import HeaderSearch from "../components/HeaderSearch/HeaderSearch";
import ProjectContent from "../components/ProjectContent/ProjectContent";

const ProjectsPage = (props) => {
  const { pageContext: {project, locale} } = props
  
  const generalProps = {
    project,
    locale
  } 
  return (
    <Layout>
      <HeaderSearch props={{...generalProps}} />
      <ProjectContent props={{...generalProps}}  />
      <SellProperty />
      <ContactSection />
    </Layout>
  )
}


export default ProjectsPage
