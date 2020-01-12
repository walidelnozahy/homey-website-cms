import React, { useContext, useEffect, useState } from "react";
// import { GlobalContext } from "../../_context/GlobalContext";
import { withTranslation } from "react-i18next";
import { withComma } from "real-estate-utils";
import company from "../../_company/company";
import Swiper from "react-id-swiper";

import * as load from "@eahefnawy/functions.js";

// import withGlobalContext from "../../_context/withGlobalContext";
import TitleProject from "../TitleProject/TitleProject";
import "./LocationInfo.css";
const { listLocations } = load(company.backend);

const LocationInfo = ({
  item,
  t
  // GlobalContext: {
  //   state: { locations }
  // }
}) => {
  const [locations, setLocations] = useState(null);

  const handleListLocations = async () => {
    const locations = await listLocations();
    setLocations(locations);
  };

  useEffect(() => {
    handleListLocations();
  }, []);
  const params = {
    slidesPerView: 3,
    spaceBetween: 20,
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 40
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 30
      }
    }
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev"
    // }
  };

  const info = [];
  let locationInfo;
  if (locations && item && item.location) {
    const city = locations.find(i => i.name === item.location.city);
    const getLocation = city.districts.find(
      i => i.name === item.location.district
    );
    if (getLocation && getLocation.info) {
      locationInfo = getLocation.info;
      //   Object.keys(getLocation.info).forEach(i => {
      //     info;
      //   });
    }
  }
  const fontColorPrimary = {
    color: company.colorPrimary
  };
  const fontColorSecondary = {
    color: company.colorSecondary
  };
  const backgroundColor = {
    backgroundColor: company.colorPrimary
  };

  if (!locationInfo) {
    return null;
  }
  return (
    <div className="LocationInfoWrapper">
      <TitleProject title={t("location details")} />
      <div dir="ltr">
        <Swiper {...params}>
          {locationInfo.population ? (
            <div className="LocationInfoEach">
              <p style={fontColorPrimary}>{t("total population")}</p>
              <h2 style={fontColorPrimary}>
                {withComma(locationInfo.population)}
              </h2>
              <p style={fontColorPrimary}>
                {t("annual increase")} {locationInfo.annualIncrease || 0}%
              </p>
            </div>
          ) : null}

          {locationInfo.socioEconomic ? (
            <div className="LocationInfoEach" style={backgroundColor}>
              <p style={{ color: `#fff`, fontSize: `12px` }}>
                {t("socio economic")}
              </p>
              <h1 style={fontColorSecondary}>{locationInfo.socioEconomic}</h1>
            </div>
          ) : null}
          {locationInfo.married && locationInfo.single ? (
            <div className="LocationInfoEach">
              <p style={fontColorPrimary}>{t("marital status")}</p>
              <div className="LocationInfoEachWrapper">
                <div className="LocationInfoEachInner">
                  <h2 style={{ ...fontColorPrimary }}>
                    {locationInfo.married} %
                  </h2>
                  <p style={fontColorPrimary}>{t("married")}</p>
                </div>
                <div className="LocationInfoEachInner">
                  <h2 style={{ ...fontColorPrimary }}>
                    {locationInfo.single} %
                  </h2>
                  <p style={fontColorPrimary}>{t("single")}</p>
                </div>
              </div>
            </div>
          ) : null}
        </Swiper>
        <h3 style={{ ...fontColorPrimary, textAlign: `center` }}>
          {t("price change")}
        </h3>
        <Swiper {...params}>
          {locationInfo.oneMonthChange ? (
            <div className="LocationInfoEach">
              <div className="withImage">
                <h2 style={fontColorPrimary}>{locationInfo.oneMonthChange}%</h2>
                <img
                  src="https://res.cloudinary.com/dqbgnn5hf/image/upload/v1576176202/arrowUp.png"
                  alt=""
                />
              </div>
              <span
                style={{
                  ...fontColorPrimary,
                  backgroundColor: company.colorSecondary
                }}
              >
                {t("1 month change")}
              </span>
            </div>
          ) : null}
          {locationInfo.threeYearChange ? (
            <div className="LocationInfoEach">
              <div className="withImage">
                <h2 style={fontColorPrimary}>
                  {locationInfo.threeYearChange}%
                </h2>
                <img
                  src="https://res.cloudinary.com/dqbgnn5hf/image/upload/v1576176202/arrowUp.png"
                  alt=""
                />
              </div>
              <span
                style={{
                  ...fontColorPrimary,
                  backgroundColor: company.colorSecondary
                }}
              >
                {t("3 year change")}
              </span>
            </div>
          ) : null}
          {locationInfo.fiveYearChange ? (
            <div className="LocationInfoEach">
              <div className="withImage">
                <h2 style={fontColorPrimary}>{locationInfo.fiveYearChange}%</h2>
                <img
                  src="https://res.cloudinary.com/dqbgnn5hf/image/upload/v1576176202/arrowUp.png"
                  alt=""
                />
              </div>
              <span
                style={{
                  ...fontColorPrimary,
                  backgroundColor: company.colorSecondary
                }}
              >
                {t("5 year change")}
              </span>
            </div>
          ) : null}
        </Swiper>
      </div>
    </div>
  );
};

export default withTranslation()(LocationInfo);
