import React from "react";
import styled from "styled-components";
import company from "../../_company/company";

const TitleYellow = ({ title }) => {
  const TitleYellowWrapper = styled.div``;
  const TitleYellow = styled.h2`
    background-color: ${company.colorSecondary};
    color: #fff;
    display: table;
    margin: 10px auto;
    padding: 3px 13px;
    text-align: center;
  `;
  return (
    <TitleYellowWrapper>
      <TitleYellow>{title}</TitleYellow>
    </TitleYellowWrapper>
  );
};

export default TitleYellow;
