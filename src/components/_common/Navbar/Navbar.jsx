import React, { useState } from "react";
import { isMobile } from "react-device-detect";
import { Link } from "gatsby";
import LeftMenu from "./LeftMenu";
import RightMenu from "./RightMenu";
import { Drawer, Button, Icon } from "antd";
import company from "../../../_company/company";
import { toPath } from "../../../_utils/functions";
import i18n from "i18next";
import { navigate } from "gatsby";
import { getLangPath } from "../../../_utils/functions";
import "./Navbar.css";

const Navbar = ({ locale, path }) => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  const lang = i18n.language;

  const handleChangeLang = lng => {
    const currentLang = i18n.language;
    console.log("lng", lng);
    console.log("currentLang", currentLang);
    if (lng !== currentLang) {
      i18n.changeLanguage(lng);
      navigate(getLangPath(lng, path));
    }
    // const path = global && global.window ? global.window.location.pathname : "";
    // if (global && global.window) {
    //   global.window.location = getLangPath(lng, path);
    // }
  };
  return (
    <nav className="menu" dir={isMobile ? `ltr` : ``}>
      <div className="menu__logo">
        <Link to={toPath(lang, "")}>
          <img src={company.logo} alt="" />
        </Link>
      </div>
      <div className="menu__container">
        <div className="menu_left">
          <LeftMenu mode="horizontal" />
        </div>
        <div className="menu_rigth">
          <RightMenu
            mode="horizontal"
            handleChangeLang={handleChangeLang}
            locale={locale}
          />
        </div>
        <Button
          className="menu__mobile-button"
          type="primary"
          onClick={showDrawer}
        >
          <Icon type="align-right" />
        </Button>
        <Drawer
          placement="right"
          className="menu_drawer"
          closable={false}
          onClose={onClose}
          visible={visible}
        >
          <LeftMenu mode="inline" />
          <RightMenu
            mode="inline"
            handleChangeLang={handleChangeLang}
            locale={locale}
          />
        </Drawer>
      </div>
    </nav>
  );
};

export default Navbar;
