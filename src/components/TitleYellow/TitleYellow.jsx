import React from "react";
import styled from "styled-components";
import company from "../../_company/company";
import { withTranslation } from "react-i18next";

const TitleYellow = ({ t, title }) => {
  const TitleYellowWrapper = styled.div``;
  const TitleYellow = styled.h2`
    background-color: ${company.colorSecondary};
    color: #fff;
    display: table;
    margin: 20px auto;
    padding: 3px 13px;
    text-align: center;
  `;
  return (
    <TitleYellowWrapper>
      <TitleYellow>{t(title)}</TitleYellow>
    </TitleYellowWrapper>
  );
};

export default withTranslation()(TitleYellow);
