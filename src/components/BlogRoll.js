import React from 'react'
import PropTypes from 'prop-types'
import {Button, Icon, Divider} from 'antd'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import i18n from "i18next";
import { useTranslation } from 'react-i18next';

import {truncate } from 'lodash'
import styled from 'styled-components'
import company from '../_company/company';
import { Container } from './_common/Container/Container';
import TitleYellow from './TitleYellow/TitleYellow';
import BlogDiv from './BlogDiv/BlogDiv'

const BlogRollWrapper = styled.div`

` 
const BlogRollWrapperInner = styled.div`
display: grid;
grid-template-columns: 2fr 1fr;
gap: 20px;
@media (max-width: 993px) {
  
  grid-template-columns: 1fr ;
}
` 

const H1 = styled.h1`
font-size: 19px;
`
const P = styled.p`
color: black;
`
const OtherPostsWrapper = styled.div`
  
  
`
const OtherPostsInner = styled.div`
  background-color: whitesmoke;
  padding: 10px;
`
const YellowTitle = styled.h2`
  color: ${company.colorSecondary};
  // text-align: center;
`
const LatestPostWrapper = styled.div`
  text-align: center;
`
const LatestPostImage = styled.div``
const LatestPostText = styled.div`
  background-color: whitesmoke;
  text-align: center;
  padding: 10px;
`

const BlogRoll = ({data}) => {
  const { t, i18n } = useTranslation();

  const { edges: posts } = data.allMarkdownRemark
  const currentLang = i18n.language
  const latestPost = posts && posts.shift() ? posts.shift().node : null
    console.log('posts',posts)
  
    
    return (
      <BlogRollWrapper>
        <TitleYellow title="Blog & News" />
     
        <Container>
      <BlogRollWrapperInner> 
        {latestPost ? 
        
        
        <Link
          to={latestPost.fields.slug}
          >
          <LatestPostWrapper>
            <LatestPostImage>
            <PreviewCompatibleImage
                imageInfo={{
                  image: latestPost.frontmatter.featuredimage,
                  alt: `featured image thumbnail for post ${latestPost.frontmatter.title}`,
                }}
              />
            </LatestPostImage>
              <Button style={{backgroundColor: company.colorPrimary, color: `#fff`, margin: `10px auto`}}>{t('read more')}</Button>
            <LatestPostText>
              <H1>{latestPost.frontmatter.title}</H1>
              <P><Icon type="calendar"/> {latestPost.frontmatter.date}</P>
              <P>{truncate(latestPost.frontmatter.description, {
                      'length': 120,
                      'separator': ' '
                    })}</P>
            </LatestPostText>
          </LatestPostWrapper>
        </Link>
        : null}
        <OtherPostsWrapper>
          <OtherPostsInner>
            <YellowTitle>{t('popular posts')}</YellowTitle>
          {posts &&
            posts.filter(({node: post}) => post.frontmatter.locale === currentLang)
            .map(({ node: post }, key) => (
              <BlogDiv post={post} key={key}/>
            ))}
          </OtherPostsInner>
            
        </OtherPostsWrapper>
      </BlogRollWrapperInner>
        </Container>
      </BlogRollWrapper>
    )
}


BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                locale
                description
                templateKey 
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
 