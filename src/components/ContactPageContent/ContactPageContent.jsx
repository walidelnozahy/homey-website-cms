import React from "react";
import styled from "styled-components";
import { withTranslation } from "react-i18next";

import { Container } from "../_common/Container/Container";

import ContactSection from "../ContactSection/ContactSection";
import ContactForm from "../ContactForm/ContactForm";
import TitleYellow from "../TitleYellow/TitleYellow";
import company from "../../_company/company";
import Map from "../Map/Map";
import SellProperty from "../SellProperty/SellProperty";

class ContactPageContent extends React.Component {
  render() {
    const ContentWrapper = styled.div`
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 30px;
      position: relative;
      margin-bottom: 140px;
      @media (max-width: 992px) {
        grid-template-columns: 1fr;
      }
    `;
    const Text = styled.div`
      margin-top: 40px;
    `;
    const Right = styled.div`
      background-color: ${company.colorSecondary};
      display: flex;
      position: relative;

      &:before {
        content: "";
        position: absolute;
        bottom: -70px;
        left: -70px;
        width: 70px;
        height: 70px;
        background-color: ${company.colorPrimary};
      }
    `;
    const P = styled.p``;
    const H1 = styled.h1`
      color: #fff;
      font-size: 50px;
      margin: auto;
    `;
    const ContactSction = styled.div`
      display: grid;
      margin-top: 20px;
      grid-template-columns: 1fr 1fr;
      gap: 30px;
      @media (max-width: 992px) {
        grid-template-columns: 1fr;
      }
    `;
    const ContactSctionLeft = styled.div``;
    const ContactSctionRight = styled.div``;
    const { mainTitle, description } = this.props;
    return (
      <div>
        <Container>
          <ContentWrapper>
            <Text data-aos="fade-right">
              <P>{description}</P>
            </Text>
            <Right data-aos="fade-left">
              <H1>{mainTitle}</H1>
            </Right>
          </ContentWrapper>
          <TitleYellow title="Let us call you" />
          <ContactSction>
            <ContactSctionLeft data-aos="fade-up">
              <Map />
            </ContactSctionLeft>
            <ContactSctionRight data-aos="fade-up">
              <ContactForm />
            </ContactSctionRight>
          </ContactSction>
        </Container>
        <SellProperty />
        <ContactSection />
      </div>
    );
  }
}

export default withTranslation()(ContactPageContent);
