import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import moment from "moment";
import i18n from "i18next";
import { getCurrencyRate, toPath } from "../../_utils/functions";
import { withTranslation } from "react-i18next";
import styled from "styled-components";
import company from "../../_company/company";
import { getMinPrice, withComma } from "real-estate-utils";

const Listing = ({ listing, t, property }) => {
  const radius = "25px";
  const ListingWapper = styled.div`
    transition: all 0.2s ease-in-out;
    &:hover {
      transform: translateY(-5px);
    }
  `;
  const ListingInner = styled.div`
    background-image: url(${props => props.image});
    background-position: center;
    background-size: cover;

    height: 400px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: relative;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
  `;
  const ListingType = styled.div`
    position: absolute;
    right: -10px;
    top: 30px;
    background-color: ${company.colorSecondary};

    display: flex;
    padding: 10px 20px;
    &::before {
      content: "";
      position: absolute;
      width: 0;
      height: 0;
      border-top: 10px solid black;
      border-right: 10px solid transparent;
      right: 0;
      bottom: -10px;
    }
    h4 {
      margin: auto;
      color: #fff;
    }
  `;
  const TextWrapper = styled.div`
    background-color: ${company.colorPrimary};

    margin: 10px;
    padding: 5px 0;
  `;

  const Price = styled.div`
    text-align: center;
  `;
  const H2 = styled.h2`
    color: #fff;
  `;
  const P = styled.p`
    color: #fff;
    margin: 0;
    font-weight: 100;
    font-size: 12px;
  `;
  const Info = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 95%;
    margin: auto auto 15px auto;
    gap: 10px;
  `;
  // border-right: ${props =>
  //   !props.left
  //     ? `none`
  //     : props.left && (i18n.language === "ar" || i18n.language === "pr")
  //     ? ` 1px solid #fff`
  //     : `none`};

  // border-left: ${props =>
  //   !props.left
  //     ? `none`
  //     : props.left && (i18n.language === "ar" || i18n.language === "pr")
  //     ? `none`
  //     : ` 1px solid #fff`};

  const InfoInner = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
  `;
  const InfoInnerEach = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 5px;
  `;
  const lang = i18n.language;
  return (
    <Link to={toPath(lang, listing.code)}>
      <ListingWapper dir="ltr">
        <ListingInner
          image={listing.coverImage ? listing.coverImage.medium : ""}
        >
          <ListingType>
            <h4>{t("for sale")}</h4>
          </ListingType>
          <TextWrapper>
            <Price>
              <P>{t("price starts")}</P>
              <H2>
                {property
                  ? withComma(Math.ceil(listing.price / getCurrencyRate() || 1))
                  : getMinPrice({
                      types: listing.types,
                      currencyRate: getCurrencyRate() || 1
                    })}{" "}
                {getCurrencyRate() || "TRY"}
              </H2>
            </Price>
            <Info>
              <InfoInner left>
                <InfoInnerEach>
                  <P>{t("location")}</P>
                  <P>{listing.location.district}</P>
                </InfoInnerEach>
                {!property ? (
                  <InfoInnerEach>
                    <P>{t("installment")}</P>
                    <P>
                      {listing.installment
                        ? listing.installment.period + ` ${t("months")}`
                        : `${"cash"}`}{" "}
                    </P>
                  </InfoInnerEach>
                ) : null}
              </InfoInner>
              <InfoInner>
                {!property ? (
                  <InfoInnerEach>
                    <P>{t("delivery")}</P>
                    <P>
                      {listing.delivery
                        ? moment(listing.delivery, "YYYY/MM").format("MMM") +
                          ` ` +
                          moment(listing.delivery, "YYYY/MM").format("YYYY")
                        : `${t("ready")}`}
                    </P>
                  </InfoInnerEach>
                ) : (
                  <InfoInnerEach>
                    <P>{t("category")}</P>
                    <P>{listing.category}</P>
                  </InfoInnerEach>
                )}
                {!property ? (
                  <InfoInnerEach>
                    <P>{t("downpayment")}</P>
                    <P>
                      {listing.installment
                        ? listing.installment.payment + `%`
                        : `${t("cash")}`}{" "}
                    </P>
                  </InfoInnerEach>
                ) : null}
              </InfoInner>
            </Info>
          </TextWrapper>
        </ListingInner>
      </ListingWapper>
    </Link>
  );
};

Listing.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation()(Listing);
