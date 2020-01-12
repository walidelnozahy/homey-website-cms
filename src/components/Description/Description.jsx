import React from "react";
import styled from "styled-components";
import TitleProject from "../TitleProject/TitleProject";
import { withTranslation } from "react-i18next";
import i18n from "i18next";
const Description = ({ project, text, t }) => {
  const DescriptionWrapper = styled.div`
    margin-top: 30px;
  `;
  const P = styled.p``;
  const lang =
    i18n.language === "en" ||
    i18n.language === "ar" ||
    i18n.language === "pr" ||
    i18n.language === "fr"
      ? i18n.language
      : "en";

  return (
    <DescriptionWrapper data-aos="fade-up">
      <TitleProject
        title={
          text === "description"
            ? t("project information")
            : t("why this property")
        }
      />
      <P>{project[lang] ? project[lang][text] : null}</P>
    </DescriptionWrapper>
  );
};

export default withTranslation()(Description);
