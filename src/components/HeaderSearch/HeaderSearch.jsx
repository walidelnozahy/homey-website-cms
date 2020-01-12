import React from "react";
import styled from "styled-components";
import { Container } from "../_common/Container/Container";
import company from "../../_company/company";
// import SearchDiv from "../SearchDiv/SearchDiv";

const HeaderSearch = ({ props }) => {
  const { project, locale } = props;

  const HeaderSearchWrapper = styled.div`
    padding: 30px 0;
    background-color: ${company.colorPrimary};
  `;
  const HeaderSearchInner = styled.div`
    display: grid;
    grid-template-columns: 60% 40%;
    @media (max-width: 992px) {
      grid-template-columns: 1fr;
    }
  `;
  const Left = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `;
  const Right = styled.div`
    display: ${!project ? `grid` : `auto`};
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    @media (max-width: 992px) {
      margin-top: 20px;
    }
  `;
  const SquareImage = styled.div`
    width: 100%;
    height: ${!project ? `200px` : `400px`};
    background-position: center;
    background-size: cover;
    background-image: ${props =>
      props.image
        ? `url(${props.image})`
        : `url('https://res.cloudinary.com/drdxjay2t/image/upload/v1553171134/hp-header.jpg')`};
  `;
  const TextWrapper = styled.div``;
  const H1 = styled.h1`
    color: #fff;
    font-size: 50px;
  `;
  const P = styled.p`
    color: #fff;
  `;

  return (
    <HeaderSearchWrapper>
      <Container>
        <HeaderSearchInner>
          <Left data-aos="fade-right">
            <TextWrapper>
              <H1>{project ? project[locale].title : ""}</H1>
              {!project ? (
                <P>
                  Professional buro with many years of experience, developent
                  and the most daring and audacious projects.
                </P>
              ) : null}
            </TextWrapper>
            {/* <SearchDiv /> */}
          </Left>
          <Right data-aos="fade-left">
            <SquareImage image={project ? project.coverImage.large : null} />
            {/* <SquareImage />
            <SquareImage />
            <SquareImage /> */}
          </Right>
        </HeaderSearchInner>
      </Container>
    </HeaderSearchWrapper>
  );
};
export default HeaderSearch;
