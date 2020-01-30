import React from "react";
import { Menu, Select } from "antd";
import { navigate } from "gatsby";
import PropTypes from "prop-types";
import i18n from "i18next";
import { withTranslation } from "react-i18next";
import CurrencyDropdown from "../CurrencyDropdown/CurrencyDropdown";
import { getLangPath } from "../../../_utils/functions";
import { ContactModal } from "homey-presentation";
var emojiFlags = require("emoji-flags");

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const RightMenu = ({ t, mode }) => {
  const handleChangeLang = lng => {
    console.log("lng", lng);
    i18n.changeLanguage(lng);
    const path = global && global.window ? global.window.location.pathname : "";
    navigate(getLangPath(lng, path));
  };
  return (
    <Menu mode={mode}>
      <Menu.Item key="currency">
        <CurrencyDropdown />
      </Menu.Item>

      <Menu.Item key="language">
        <Select
          defaultValue={i18n.language}
          style={{ minWidth: `150px`, margin: `auto` }}
          onChange={handleChangeLang}
        >
          <Select.Option value="en">
            <span>{emojiFlags.countryCode("GB").emoji}</span>English
          </Select.Option>
          <Select.Option value="fr">
            <span>{emojiFlags.countryCode("FR").emoji}</span>Français
          </Select.Option>
          <Select.Option value="ar">
            <span>{emojiFlags.countryCode("SA").emoji}</span>عربي
          </Select.Option>
          <Select.Option value="pr">
            <span>{emojiFlags.countryCode("IR").emoji}</span>فارسي
          </Select.Option>
        </Select>
      </Menu.Item>
      <Menu.Item key="contactUs">
        <div style={{ margin: `auto 0`, transform: `translateY(-7px)` }}>
          <ContactModal />
        </div>
      </Menu.Item>
      {/* <Menu.Item key="signin">
        <a
          href="#"
          style={{
            margin: `auto`
          }}
        >
          {t("sign in")}
        </a>
      </Menu.Item> */}
      {/*                 
      <SubMenu title={t("languge")}>
        <MenuItemGroup>
          <Menu.Item key="setting:1" onClick={() => handleChangeLang("en")}>
            {emojiFlags.countryCode("GB").emoji} English
          </Menu.Item>
          <Menu.Item key="setting:2" onClick={() => handleChangeLang("ar")}>
            {emojiFlags.countryCode("AL").emoji} العربية
          </Menu.Item>
          <Menu.Item key="setting:3" onClick={() => handleChangeLang("pr")}>
            {emojiFlags.countryCode("iq").emoji} فارسي
          </Menu.Item>
          <Menu.Item key="setting:4" onClick={() => handleChangeLang("fr")}>
            {emojiFlags.countryCode("fr").emoji} Français
          </Menu.Item>
        </MenuItemGroup>
      </SubMenu> */}
    </Menu>
  );
};

RightMenu.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation()(RightMenu);
