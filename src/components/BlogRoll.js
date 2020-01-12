import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import i18n from "i18next";
import { withTranslation } from "react-i18next";
import {truncate } from 'lodash'
import styled from 'styled-components'
import company from '../_company/company';
import { Container } from './_common/Container/Container';
import TitleYellow from './TitleYellow/TitleYellow';



class BlogRoll extends React.Component {
  render() {
    const { data, } = this.props
    const { edges: posts } = data.allMarkdownRemark
    const currentLang = i18n.language
    console.log('blog data',data)
    const BlogWrapper = styled.div`
    article {
      background-color: whitesmoke;
      &.is-featured {
        background-color: whitesmoke;
        transition: all .2s ease-in-out;
        
      }
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

    return (
      <div className="columns is-multiline">
        <TitleYellow title="blog" />
        <Container>
        {posts &&
          posts.filter(({node: post}) => post.frontmatter.locale === currentLang)
          .map(({ node: post }) => (
            <BlogWrapper className="is-parent column is-6" key={post.id}>
              <article
                className={`blog-list-item tile is-child box notification ${
                  post.frontmatter.featuredpost ? 'is-featured' : ''
                }`}
              >
                <header>
                  {post.frontmatter.featuredimage ? (
                    <div className="featured-thumbnail">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                        }}
                      />
                    </div>
                  ) : null}
                  <p className="post-meta">
                    <Link
                      className="title has-text-primary is-size-4"
                      to={post.fields.slug}
                    >
                      {post.frontmatter.title}
                    </Link>
                    <span> &bull; </span>
                    <span className="subtitle is-size-5 is-block">
                      {post.frontmatter.date}
                    </span>
                  </p>
                </header>
                <p>
                  {truncate(post.frontmatter.description, {
                    'length': 100,
                    'separator': ' '
                  })}
                
                  <br />
                  <br />
                  <Link className="button" to={post.fields.slug}>
                  {/* keep reading */}
                   →
                  </Link>
                </p>
              </article>
            </BlogWrapper>
          ))}
        </Container>
      </div>
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
 