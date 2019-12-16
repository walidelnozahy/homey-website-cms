import React from 'react'
import PropTypes from 'prop-types'
import { AboutPageTemplate } from '../../templates/about-page'

const AboutPagePreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()
  if (data) {
    return (
      <AboutPageTemplate
      title={data.title}
      // content={widgetFor('body')}
      headerImage={data.headerImage}
  seo_title={data.seo_title}
  seo_desc={data.seo_desc}
  firstHeading={data.firstHeading}
  firstText={data.firstText}
  secondHeading={data.secondHeading}
  secondText={data.secondText}
  thirdHeading={data.thirdHeading}
  thirdText={data.thirdText}
  featuredimage={data.featuredimage}
  videoLink={data.videoLink}
    />
    )
  } else {
    return <div>Loading...</div>
  }
}

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AboutPagePreview
