import React from "react";
import styled from "styled-components";

const TitleProject = ({ title, center }) => {
  const TitleWrapper = styled.div`
    text-align: ${props => (center ? "center" : "")};
  `;
  const Title = styled.h1``;
  return (
    <TitleWrapper>
      <Title>{title}</Title>
    </TitleWrapper>
  );
};

export default TitleProject;
