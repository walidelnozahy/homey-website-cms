import React from "react";
import { Link } from "gatsby";
import { Menu } from "antd";
import { toPath } from "../../../_utils/functions";
import i18n from "i18next";
import { withTranslation } from "react-i18next";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const LeftMenu = ({ t, mode }) => {
  const lang = i18n.language;
  console.log("lang", lang);
  return (
    <Menu mode={mode}>
      <SubMenu
        title={<Link to={toPath(lang, "projects")}>{t("projects")}</Link>}
      >
        <Menu.Item key="projects">
          <Link to={toPath(lang, "projects")}>{t("projects")}</Link>
        </Menu.Item>
        <Menu.Item key="otherProjects">
          <Link to={toPath(lang, "otherProjects")}>{t("resale")}</Link>
        </Menu.Item>
      </SubMenu>
      <Menu.Item key="articles">
        <Link to={toPath(lang, "blog")}>{t("articles")}</Link>
      </Menu.Item>
      <Menu.Item key="addProperty">
        <Link to={toPath(lang, "about")}>{t("add your property")}</Link>
      </Menu.Item>
      <Menu.Item key="education">
        <Link to={toPath(lang, "education")}>{t("education")}</Link>
      </Menu.Item>
      <SubMenu
        title={<Link to={toPath(lang, "projects")}>{t("company")}</Link>}
      >
        <Menu.Item key="about">
          <Link to={toPath(lang, "about")}>{t("about us")}</Link>
        </Menu.Item>
        <Menu.Item key="services">
          <Link to={toPath(lang, "services")}>{t("our services")}</Link>
        </Menu.Item>
      </SubMenu>
      <Menu.Item key="contact">
        <Link to={toPath(lang, "contact")}>{t("contact us")}</Link>
      </Menu.Item>
    </Menu>
  );
};
export default withTranslation()(LeftMenu);
