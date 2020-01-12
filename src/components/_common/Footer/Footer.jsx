import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Divider } from "antd";
// import Spinner from "../Spinner/Spinner";
import { withTranslation } from "react-i18next";
// import { Link } from "react-router-dom";
import { shuffle } from "lodash";
import company from "../../../_company/company";
import { Container } from "../Container/Container";
import FooterLinks from "../../FooterLinks/FooterLinks";
import FooterProjects from "../../FooterProjects/FooterProjects";
// import { getMinPrice } from "real-estate-utils";

const Footer = ({ projects, t }) => {
  const FooterWrapper = styled.footer`
    position: relative;
    margin-top: 30px;
    &:before {
      content: "";
      position: absolute;
      background-color: ${company.colorPrimary};
      background-position: center;
      background-size: cover;
      width: 100%;
      height: 97%;
      left: 0;
      bottom: 0;
      z-index: -1;
    }
    @media (max-width: 767px) {
    }
  `;

  return (
    <FooterWrapper>
      <Container>
        <FooterProjects />
        <Divider style={{ margin: `50px auto` }} />
        <FooterLinks />
      </Container>
    </FooterWrapper>
  );
};
Footer.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation()(Footer);
