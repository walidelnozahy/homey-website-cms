import React from 'react'
import PropTypes from 'prop-types'
import {Button} from 'antd'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import i18n from "i18next";

import {truncate } from 'lodash'
import styled from 'styled-components'
import company from '../_company/company';
import { Container } from './_common/Container/Container';
import TitleYellow from './TitleYellow/TitleYellow';


const BlogWrapper = styled.div`
    

article {
  
  
  
  a {
    text-decoration: none;
    &.button {
      color: black;
    }
  }
  &:hover {
    transform: translateY(-5px);
    background-color: ${company.colorPrimary};
    p {
      color: #fff;
      a {
        color: #fff;
        &.button {
          color: black;
        }
      }
    }
    header {
      h1 {
        color: #fff;
      }
      p {
        color: #fff;
        a {
          color: #fff !important;
          
        }
      }
      span {
        color: #fff;
      }
      a {
        color: #fff;
      }
    }
  }
}
`
const BlogRollWrapper = styled.div`

` 
const BlogRollWrapperInner = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
gap: 20px;
@media (max-width: 993px) {
  
  grid-template-columns: 1fr ;
}
` 
const Article = styled.article`
border-radius: 0px;
box-shadow: 1px 1px 10px rgba(0,0,0,0.1);
padding: 30px;
background-color: whitesmoke;
transition: all .3s ease-in;
`
const Header = styled.header`
  display: flex;
margin-bottom: 1em;
`

const Thumbnail = styled.div`
  flex-basis: 35%;
margin: 0 1.5em 0 0;
`
const PostTitle = styled.div``
const H1 = styled.h1`
font-size: 19px;
`
const P = styled.p`
color: black;
`

class BlogRoll extends React.Component {
  render() {
    const { data, } = this.props
    const { edges: posts } = data.allMarkdownRemark
    const currentLang = i18n.language
    
   
    return (
      <BlogRollWrapper>
        <TitleYellow title="Blog & News" />
        <br />
        <br />
        <Container>
      <BlogRollWrapperInner> 

        {posts &&
          posts.filter(({node: post}) => post.frontmatter.locale === currentLang)
          .map(({ node: post }) => (
            <Link
            className="title has-text-primary is-size-4"
            to={post.fields.slug}
          >
            <BlogWrapper  key={post.id}>
              <Article
                className={`blog-list-item tile is-child box notification ${
                  post.frontmatter.featuredpost ? 'is-featured' : ''
                }`}
              >
                <Header>
                  {post.frontmatter.featuredimage ? (
                    <Thumbnail className="featured-thumbnail">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                        }}
                      />
                    </Thumbnail>
                  ) : null}
                  <PostTitle>

                   
                      <H1>{post.frontmatter.title}</H1>
                    
                  
                    <P className="">
                    {post.frontmatter.date}
                  </P>
                  </PostTitle>
                </Header>
                <P>
                  {truncate(post.frontmatter.description, {
                    'length': 120,
                    'separator': ' '
                  })}
                
                  <br />
                  <br />
                  <Button icon="arrow-right">
                  keep reading
                  </Button>
                </P>
              </Article>
            </BlogWrapper>
            </Link>
          ))}
      </BlogRollWrapperInner>
        </Container>
      </BlogRollWrapper>
    )
  }
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
 