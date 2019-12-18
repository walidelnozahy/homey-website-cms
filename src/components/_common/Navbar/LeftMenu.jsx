import React from "react";
import { Link } from "gatsby";
import { Menu } from "antd";
import { toPath } from "../../../_utils/functions";
import i18n from "i18next";
import { withTranslation } from "react-i18next";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const LeftMenu = ({ t, mode }) => {
  console.log("langgg", i18n.language);
  return (
    <Menu mode={mode}>
      <SubMenu
        title={
          <Link to={toPath(i18n.language, "projects")}>{t("projects")}</Link>
        }
      >
        <MenuItemGroup title={t("for sale")}>
          <Menu.Item key="projects">
            <Link to={toPath(i18n.language, "projects")}>{t("projects")}</Link>
          </Menu.Item>
          <Menu.Item key="otherProjects">
            <Link to={toPath(i18n.language, "otherProjects")}>
              {t("other projects")}
            </Link>
          </Menu.Item>
        </MenuItemGroup>
      </SubMenu>
      <Menu.Item key="about">
        <Link to={toPath(i18n.language, "about")}>{t("about us")}</Link>
      </Menu.Item>
      <Menu.Item key="education">
        <Link to={toPath(i18n.language, "education")}>{t("education")}</Link>
      </Menu.Item>
      <Menu.Item key="services">
        <Link to={toPath(i18n.language, "services")}>{t("our services")}</Link>
      </Menu.Item>
      <Menu.Item key="contact">
        <Link to={toPath(i18n.language, "contact")}>{t("contact us")}</Link>
      </Menu.Item>
    </Menu>
  );
};
export default withTranslation()(LeftMenu);
