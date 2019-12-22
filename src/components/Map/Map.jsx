import React from "react";
import styled from "styled-components";
import { withTranslation } from "react-i18next";
import GoogleMapReact from "google-map-react";
import { mapOptions } from "./mapStyle";
import TitleProject from "../TitleProject/TitleProject";
import company from "../../_company/company";

const AnyReactComponent = () => (
  // <Icon type="environment" theme="filled" style={{ fontSize: `47px` }} />
  <svg
    width="40"
    height="32"
    viewBox="0 0 50 82"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M24.9688 -6.10352e-05C11.1605 -6.10352e-05 0 11.1742 0 24.9999C0 28.175 0.92594 32.2078 2 34.9999L25 82L48 34.9999C49.0801 32.2067 50 28.1764 50 24.9999C50 11.1742 38.7772 -6.10352e-05 24.9688 -6.10352e-05ZM24.9688 11.9999C32.1491 11.9999 38 17.8106 38 24.9999C38 32.1893 32.1491 37.9999 24.9688 37.9999C17.7885 37.9999 12 32.1893 12 24.9999C12 17.8106 17.7885 11.9999 24.9688 11.9999Z"
      fill="#1890ff"
    />
  </svg>
);
const Map = ({ item, title, t }) => {
  const MapWrapper = styled.div`
    width: 100%;
    min-height: 350px;
  `;
  const MapInner = styled.div`
    width: 100%;
    height: 350px;
    margin-top: 8px;
    border-radius: 5px;
    overflow: hidden;
  `;
  return (
    <MapWrapper data-aos="fade-up">
      {title ? <TitleProject title={t("project location")} /> : null}

      <MapInner>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyCqSra2dJrK9aHJW9sRaHtdkVhx2luhbf0"
          }}
          defaultCenter={{
            lat: 41.054154,
            lng: 28.814877
          }}
          defaultZoom={10}
          options={mapOptions}
        >
          {!item ? (
            <AnyReactComponent lat={company.lat} lng={company.lng} />
          ) : item && item.coordinates ? (
            <AnyReactComponent
              lat={item.coordinates.lat}
              lng={item.coordinates.lng}
            />
          ) : null}
        </GoogleMapReact>
      </MapInner>
    </MapWrapper>
  );
};

export default withTranslation()(Map);
