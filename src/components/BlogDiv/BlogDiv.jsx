import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { truncate } from "lodash";
import PreviewCompatibleImage from "../PreviewCompatibleImage";
const BlogDiv = ({ post }) => {
  const BlogDivWrapper = styled.div`
    margin-top: 10px;
  `;

  const Article = styled.article`
    border-radius: 0px;

    background-color: whitesmoke;
    transition: all 0.3s ease-in;
    display: grid;
    grid-template-columns: 1fr 2fr;
    @media (max-width: 992px) {
      grid-template-columns: 1fr;
    }
  `;

  const Header = styled.header``;
  const Text = styled.div``;

  const Thumbnail = styled.div`
    flex-basis: 35%;
    margin: 0 1.5em 0 0;
  `;
  const H3 = styled.h3``;
  const P = styled.p`
    font-size: 12px;
    color: black;
  `;
  const PostTitle = styled.div``;
  return (
    <Link className="title has-text-primary is-size-4" to={post.fields.slug}>
      <BlogDivWrapper key={post.id}>
        <Article
          className={`blog-list-item tile is-child box notification ${
            post.frontmatter.featuredpost ? "is-featured" : ""
          }`}
        >
          <Header>
            {post.frontmatter.featuredimage ? (
              <Thumbnail className="featured-thumbnail">
                <PreviewCompatibleImage
                  imageInfo={{
                    image: post.frontmatter.featuredimage,
                    alt: `featured image thumbnail for post ${post.frontmatter.title}`
                  }}
                />
              </Thumbnail>
            ) : null}
          </Header>
          <Text>
            <PostTitle>
              <H3>{post.frontmatter.title}</H3>

              <P className="">{post.frontmatter.date}</P>
            </PostTitle>
          </Text>
        </Article>
      </BlogDivWrapper>
    </Link>
  );
};

export default BlogDiv;
