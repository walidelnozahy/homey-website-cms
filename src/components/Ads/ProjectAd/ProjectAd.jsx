import React from "react";
import styled from "styled-components";

const ProjectAd = () => {
  const ProjectAdWrapper = styled.div`
    margin-top: 30px;
    width: 100%;
    height: 400px;
    background-position: center;
    background-size: cover;
    background-image: url("https://res.cloudinary.com/drdxjay2t/image/upload/v1553171134/hp-header.jpg");
  `;

  return <ProjectAdWrapper></ProjectAdWrapper>;
};

export default ProjectAd;
