import React from "react";
import styled from "styled-components";
import company from "../../../_company/company";
import { withTranslation } from "react-i18next";

const ButtonComp = styled.button`
  background-color: ${company.colorSecondary};
  padding: 10px 30px;
  color: #fff;
  border: none;
  margin: 0px auto;
  cursor: pointer;
`;

const CustomButton = ({ t, text }) => {
  return <ButtonComp>{t(text)}</ButtonComp>;
};

export default withTranslation()(CustomButton);
