import React from "react";
import { Link } from "gatsby";
import { Menu } from "antd";

import { withTranslation } from "react-i18next";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const LeftMenu = ({ t, mode }) => {
  return (
    <Menu mode={mode}>
      <SubMenu title={<Link to="/projects">{t("projects")}</Link>}>
        <MenuItemGroup title={t("for sale")}>
          <Menu.Item key="projects">
            <Link to="/projects">{t("projects")}</Link>
          </Menu.Item>
          <Menu.Item key="otherProjects">
            <Link to="/otherProperties">{t("other projects")}</Link>
          </Menu.Item>
        </MenuItemGroup>
      </SubMenu>
      <Menu.Item key="about">
        <Link to="/about">{t("about us")}</Link>
      </Menu.Item>
      <Menu.Item key="education">
        <Link to="/education">{t("education")}</Link>
      </Menu.Item>
      <Menu.Item key="services">
        <Link to="/services">{t("our services")}</Link>
      </Menu.Item>
      <Menu.Item key="contact">
        <Link to="/contact">{t("contact us")}</Link>
      </Menu.Item>
    </Menu>
  );
};
export default withTranslation()(LeftMenu);
