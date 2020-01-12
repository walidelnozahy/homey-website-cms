import React from "react";
import styled from "styled-components";
import { Popover } from "antd";
import company from "../../_company/company";
import { withTranslation } from "react-i18next";
import { withComma } from "real-estate-utils";
import TitleProject from "../TitleProject/TitleProject";
import { isMobile } from "react-device-detect";
const Types = ({ project, t }) => {
  const TypesWrapper = styled.div`
    margin-top: 50px;

    position: relative;
  `;
  const TypesInner = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    text-align: center;
    &::before {
      content: "";
      position: absolute;
      left: 50%;
      top: 0px;
      width: 10px;
      height: 100%;
      background-color: #707070;
      border-radius: 25px;
      z-index: -1;
      transform: translateX(-50%);
    }

    .ant-popover-inner {
      display: none;
    }
    @media (max-width: 992px) {
      &::before {
        display: none;
      }
    }
  `;
  const TypesEach = styled.div`
    margin: 10px auto;
    background-color: ${props =>
      props.color ? company.colorSecondary : company.colorPrimary};
    border-radius: 50%;
    display: flex;
    width: ${props => props.size};
    height: ${props => props.size};
    @media (max-width: 992px) {
      margin: 40px 0;
    }
  `;
  const P = styled.p`
    margin: auto;
    color: #fff;
    font-size: 18px;
  `;
  const PopoverContent = styled.div`
    background-color: #d6d6d6;
    padding: 10px;
    border-radius: 15px;
  `;
  const PopoverContentInnerEach = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  `;
  const TypeP = styled.p`
    background-color:${props =>
      props.color ? company.colorPrimary : `#707070`};
    border-radius: 20px;
    color: #fff;
    padding 2px 10px;
    margin: 5px 0;
    text-align: center;
  `;

  return (
    <TypesWrapper>
      <TitleProject title={t("prices & areas")} />
      <TypesInner dir="ltr">
        {project.types.map((type, key) => (
          <Popover
            placement={isMobile ? "left" : key % 2 === 0 ? "right" : "left"}
            visible={true}
            className="project-popover"
            content={
              <PopoverContent>
                <PopoverContentInnerEach>
                  <TypeP color>From</TypeP>
                  <TypeP color>To</TypeP>
                </PopoverContentInnerEach>
                <PopoverContentInnerEach>
                  <TypeP>{withComma(type.minPrice)} TL</TypeP>
                  <TypeP>{withComma(type.maxPrice)} TL</TypeP>
                </PopoverContentInnerEach>
                <PopoverContentInnerEach>
                  <TypeP>
                    {type.minArea} m <sup>2</sup>
                  </TypeP>
                  <TypeP>
                    {type.maxArea} m <sup>2</sup>
                  </TypeP>
                </PopoverContentInnerEach>
              </PopoverContent>
            }
          >
            <TypesEach
              key={key}
              size={`${!isMobile ? (key + 1) * 70 - key * 40 : 70}px`}
              color={key % 2 === 0 ? true : false}
            >
              <P>{type.type}</P>
            </TypesEach>
          </Popover>
        ))}
      </TypesInner>
    </TypesWrapper>
  );
};

export default withTranslation()(Types);
