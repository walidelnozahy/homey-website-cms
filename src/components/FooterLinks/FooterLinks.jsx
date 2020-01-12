import React from "react";
import styled from "styled-components";
import company from "../../_company/company";
import PropTypes from "prop-types";

import { withTranslation } from "react-i18next";
const FooterLinks = ({ t }) => {
  const FooterLinksWrapper = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
    gap: 20px;
    @media (max-width: 767px) {
      grid-template-columns: 1fr 1fr;
    }
  `;
  const CompanyDescription = styled.div`
    @media (max-width: 767px) {
      grid-column: 1/3;
    }
  `;
  const Logo = styled.img`
    width: 170px;
    transform: translateY(-20px);
  `;
  const P = styled.p`
    color: #fff;
    font-weight: 100;
  `;
  const LinksWrapper = styled.div`
    display: flex;
    flex-direction: column;
  `;
  const LinksTitle = styled.h2`
    color: #fff;
    font-weight: 100;
  `;
  const LinksList = styled.ul`
    display: flex;
    flex-direction: column;
    padding: 0;
  `;
  const LinkTag = styled.a`
    margin: 5px 0;
    color: #fff;
    font-weight: 100;
  `;
  return (
    <FooterLinksWrapper>
      <CompanyDescription data-aos="fade-up">
        <Logo src={company.logoWhite} />
        <P>
          Stock direct mailing seed money prototype network effects business to
          business paradigm shift growth hacking conversion. Validation twitter
          social media marketing pivot niche market responsive web design.
        </P>
      </CompanyDescription>
      <LinksWrapper data-aos="fade-up">
        <LinksTitle>Properties</LinksTitle>
        <LinksList>
          <LinkTag href="#">{t("apartments")}</LinkTag>
          <LinkTag href="#">{t("villas")}</LinkTag>
          <LinkTag href="#">{t("offices")}</LinkTag>
          <LinkTag href="#">{t("lands")}</LinkTag>
          <LinkTag href="#">{t("shops")}</LinkTag>
        </LinksList>
      </LinksWrapper>
      <LinksWrapper data-aos="fade-up">
        <LinksTitle>Links</LinksTitle>
        <LinksList>
          <LinkTag href="#">{"home"}</LinkTag>
          <LinkTag href="#">{t("projects")}</LinkTag>
          <LinkTag href="#">{t("properties")}</LinkTag>
          <LinkTag href="#">{t("about us")}</LinkTag>
          <LinkTag href="#">{t("contact us")}</LinkTag>
        </LinksList>
      </LinksWrapper>
      <LinksWrapper data-aos="fade-up">
        <LinksTitle>Social</LinksTitle>
        <LinksList>
          <LinkTag href={company.facebook}>Facebook</LinkTag>
          <LinkTag href={company.twitter}>Twitter</LinkTag>
          <LinkTag href={company.instagram}>Instagram</LinkTag>
          <LinkTag href={company.linkedin}>Linkedin</LinkTag>
          <LinkTag href={company.youtube}>Youtube</LinkTag>
        </LinksList>
      </LinksWrapper>
      <LinksWrapper data-aos="fade-up">
        <LinksTitle>Contact Us</LinksTitle>
        <LinksList>
          <LinkTag href="#">{company.address}</LinkTag>
          <LinkTag href="#">{company.email}</LinkTag>
          <LinkTag href="#">{company.number}</LinkTag>
        </LinksList>
      </LinksWrapper>
    </FooterLinksWrapper>
  );
};

FooterLinks.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation()(FooterLinks);
