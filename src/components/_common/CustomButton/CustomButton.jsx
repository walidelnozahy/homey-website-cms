import React from "react";
import styled from "styled-components";
import company from "../../../_company/company";

const ButtonComp = styled.button`
  background-color: ${company.colorSecondary};
  padding: 10px 30px;
  color: #fff;
  border: none;
  margin: 0px auto;
  cursor: pointer;
`;

const CustomButton = ({ text }) => {
  return <ButtonComp>{text}</ButtonComp>;
};

export default CustomButton;
