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

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  titleList,
  descriptionList,
  bodyList
}) => {
  const PostContent = contentComponent || Content
  const currentLang = i18n.language
  return (
    <section className="">
      {helmet || ''}
      <HeaderPages
          title="blog"
          image="https://res.cloudinary.com/dqbgnn5hf/image/upload/v1577041183/char-blog.png"
        />
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {titleList[currentLang]}
            </h1>
            <p>{descriptionList[currentLang]}</p>
            {/* <PostContent content={bodyList[currentLang]} /> */}
            <HTMLContent className="content" content={bodyList[currentLang]} />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map(tag => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data
  console.log('blog post',post)
  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        titleList={post.frontmatter.titleList}
        descriptionList={post.frontmatter.descriptionList}
        bodyList={post.frontmatter.bodyList}
      />
      <SellProperty />
      <ContactSection />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        descriptionList {
          en
          ar
          pr
          fr
        }
        titleList {
          en
          ar
          pr
          fr
        }
        bodyList {
          en
          ar
          pr
          fr
        }
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
`
