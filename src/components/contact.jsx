import React from "react";
import styled from "styled-components";
import { withTranslation } from "react-i18next";
import Layout from "../layouts/Layout";
import HeaderPages from "../components/HeaderPages/HeaderPages";
import { Container } from "../components/_common/Container/Container";
import SellProperty from "../components/SellProperty/SellProperty";
import ContactSection from "../components/ContactSection/ContactSection";
import ContactForm from "../components/ContactForm/ContactForm";
import TitleYellow from "../components/TitleYellow/TitleYellow";
import company from "../_company/company";
import Map from "../components/Map/Map";

class ContactUs extends React.Component {
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
    return (
      <Layout projects={this.props.projects}>
        <HeaderPages
          title={this.props.t("contact us")}
          character="https://res.cloudinary.com/dqbgnn5hf/image/upload/v1571475367/contact-char.png"
        />
        <Container>
          <ContentWrapper>
            <Text data-aos="fade-right">
              <P>
                Maecenas interdum lorem eleifend orci aliquam mollis. Aliquam
                non rhoncus magna. Suspendisse aliquet tincidunt enim, ut
                commodo elit feugiat et. Maecenas nec enim quis diam faucibus
                tristique. Nam fermentum, ipsum in suscipit pharetra, mi odio
                aliquet neque, non iaculis augue elit et libero. Phasellus
                tempor faucibus faucibus. Sed eu mauris sem. Etiam et varius
                felis. Maecenas interdum lorem eleifend orci aliquam mollis.
                Aliquam non rhoncus magna. Suspendisse aliquet tincidunt enim,
                ut commodo elit feugiat et. Maecenas nec enim quis diam faucibus
                tristique. Nam fermentum, ipsum in suscipit pharetra, mi odio
                aliquet neque, non iaculis augue elit et libero. Phasellus
                tempor faucibus faucibus. Sed eu mauris sem. Etiam et varius
                felis.
              </P>
            </Text>
            <Right data-aos="fade-left">
              <H1>Get In Touch</H1>
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
      </Layout>
    );
  }
}

export default withTranslation()(ContactUs);
