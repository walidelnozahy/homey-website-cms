import React from "react";
import { Divider } from "antd";
import { getMinPrice, isProperty, withComma } from "real-estate-utils";
import moment from "moment";
import { withTranslation } from "react-i18next";
import { getCurrencyRate } from "../../_utils/functions";
import "./FourSquares.css";
const FourSquares = ({ item, t }) => {
  const checkIsProperty = item ? isProperty(item) : null;

  if (item) {
    const { delivery, location, installment, types } = item;
    return (
      <div className="FourSquares" data-aos="fade-up">
        {!checkIsProperty ? (
          <div className="each-square blue">
            <h4>
              {delivery ? moment(delivery, "YYYY/MM").format("MMMM") : ``}
            </h4>
            {delivery ? (
              <h1>{moment(delivery, "YYYY/MM").format("YYYY")}</h1>
            ) : (
              <h1 className=" ">{t("ready")}</h1>
            )}
            <div className="name ">
              <Divider orientation="left">{t("delivery")}</Divider>
            </div>
          </div>
        ) : null}
        <div className="each-square lightgrey">
          {location.city ? <h4>{location.city}</h4> : null}
          {location.district ? <h1>{location.district}</h1> : null}
          <div className="name ">
            <Divider orientation="left">{t("location")}</Divider>
          </div>
        </div>
        {!checkIsProperty ? (
          <div className="each-square black">
            {installment && installment.payment ? (
              <h1>{installment.payment}%</h1>
            ) : (
              <h1>{t("cash")}</h1>
            )}
            {installment && installment.period ? (
              <h4>
                {installment.period} {t("months")}
              </h4>
            ) : null}
            <div className="name ">
              <Divider orientation="left">{t("downpayment")}</Divider>
            </div>
          </div>
        ) : null}

        <div className="each-square darkgrey">
          {!checkIsProperty ? (
            types && types.length > 0 ? (
              <h1>
                {getMinPrice({ types, currencyRate: getCurrencyRate() || 1 })}
              </h1>
            ) : null
          ) : (
            <h1>{withComma(Math.ceil(item.price / getCurrencyRate() || 1))}</h1>
          )}

          <h4>{getCurrencyRate() || "TRY"}</h4>
          <div className="name ">
            <Divider orientation="left">{t("price starts")}</Divider>
          </div>
        </div>
      </div>
    );
  }
  return null;
};
export default withTranslation()(FourSquares);
