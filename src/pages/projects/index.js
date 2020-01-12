import React from 'react'
import HeaderSearch from '../../components/HeaderSearch/HeaderSearch'
import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'
import Listings from '../../components/Listings/Listings'

export default class ProjectsIndexPage extends React.Component {
  render() {
   
    return (
      <Layout>
        <HeaderSearch  props={{
            project: null
        }}/>
        <Listings />
      </Layout>
    )
  }
}
