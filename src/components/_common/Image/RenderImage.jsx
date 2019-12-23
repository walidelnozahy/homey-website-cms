import React from "react";
import styled from "styled-components";
import PreviewCompatibleImage from "../../PreviewCompatibleImage";

const RenderImage = ({ t, image, width }) => {
  const Image = styled.img`
    width: ${width};
    maxheight: 100% !important;
    position: relative;
    max-width: ${width};
    z-index: 2;
    margin: auto;
  `;

  if (!image) {
    return null;
  }
  if (typeof image === "string") {
    return <Image src={image} />;
  }
  if (
    image.childImageSharp &&
    image.childImageSharp.fluid &&
    image.childImageSharp.fluid.src
  ) {
    return <Image src={image.childImageSharp.fluid.src} />;
  }

  return <PreviewCompatibleImage imageInfo={image} />;
};

export default RenderImage;
