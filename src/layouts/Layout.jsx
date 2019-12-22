import React, { useEffect } from "react";
import i18n from "i18next";
import { Modal } from "antd";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Meta from "../components/meta.jsx";
import styled, { createGlobalStyle } from "styled-components";
import FloatingContact from "../components/_common/FloatingContact/FloatingContact";
import withGlobalContext from "../_context/withGlobalContext";
import ContactForm from "../components/ContactForm/ContactForm";
import "./global.css";

const Layout = ({ children, projects, GlobalContext }) => {
  const AppWrapper = styled.div`
    overflow: hidden;
    &.arabicApp {
      * {
        font-family: "Almarai", sans-serif;
      }
    }
  `;
  useEffect(() => {}, []);

  return (
    <div className="website">
      <AppWrapper
        className={`${i18n.language === "ar" ? `arabicApp` : ``}`}
        dir={`${
          i18n.language === "ar" || i18n.language === "pr" ? `rtl` : `ltr`
        }`}
      >
        <Meta />
        <Navbar />
        <Modal
          visible={GlobalContext.state.isFormVisible}
          //   onOk={this.handleOk}
          onCancel={GlobalContext.handleCancel}
          footer={null}
        >
          <AppWrapper
            className={`${i18n.language === "ar" ? `arabicApp` : ``}`}
            dir={`${
              i18n.language === "ar" || i18n.language === "pr" ? `rtl` : `ltr`
            }`}
          >
            <ContactForm title full />
          </AppWrapper>
        </Modal>
        <FloatingContact />
        {children}
        <Footer projects={projects} />
      </AppWrapper>
    </div>
  );
};

export default withGlobalContext(Layout);
