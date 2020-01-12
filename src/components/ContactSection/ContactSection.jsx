import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Container } from "../_common/Container/Container";

import { withTranslation } from "react-i18next";
import company from "../../_company/company";
import WrappedRegistrationForm from "../ContactForm/ContactForm";
import TitleYellow from "../TitleYellow/TitleYellow";
const ContactSection = ({ t }) => {
  const ContactSectionWrapper = styled.div``;
  const ContactSectionInner = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media (max-width: 992px) {
      grid-template-columns: 1fr;
    }
  `;
  const Left = styled.div`
    background-image: url("https://res.cloudinary.com/dqbgnn5hf/image/upload/v1569491074/illustration-homey.png");
    background-position: center;
    background-size: cover;
    width: 100%;
    min-height: 300px;
  `;
  const Right = styled.div`
    background-color: ${company.colorPrimary};
  `;

  return (
    <ContactSectionWrapper>
      <Container>
        <TitleYellow title={t("let us contact you")} />
        <ContactSectionInner>
          <Left data-aos="fade-left" />
          <Right data-aos="fade-right">
            <WrappedRegistrationForm />
          </Right>
        </ContactSectionInner>
      </Container>
    </ContactSectionWrapper>
  );
};

ContactSection.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation()(ContactSection);
