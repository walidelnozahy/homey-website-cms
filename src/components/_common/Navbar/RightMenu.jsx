import React, { Component } from "react";
import { Menu } from "antd";
import PropTypes from "prop-types";
import i18n from "i18next";
import { withTranslation } from "react-i18next";
import CurrencyDropdown from "../CurrencyDropdown/CurrencyDropdown";
var emojiFlags = require("emoji-flags");

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const RightMenu = ({ t, mode }) => {
  return (
    <Menu mode={mode}>
      <Menu.Item key="currency">
        <CurrencyDropdown />
      </Menu.Item>
      <Menu.Item key="signin">
        <a href="#">{t("sign in")}</a>
      </Menu.Item>
      <SubMenu title={t("languge")}>
        <MenuItemGroup>
          <Menu.Item key="setting:1" onClick={() => i18n.changeLanguage("en")}>
            {emojiFlags.countryCode("GB").emoji} English
          </Menu.Item>
          <Menu.Item key="setting:2" onClick={() => i18n.changeLanguage("ar")}>
            {emojiFlags.countryCode("AL").emoji} العربية
          </Menu.Item>
          <Menu.Item key="setting:3">
            {emojiFlags.countryCode("iq").emoji} فارسي
          </Menu.Item>
          <Menu.Item key="setting:4" onClick={() => i18n.changeLanguage("fr")}>
            {emojiFlags.countryCode("fr").emoji} Français
          </Menu.Item>
        </MenuItemGroup>
      </SubMenu>
    </Menu>
  );
};

RightMenu.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation()(RightMenu);
