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
        <MenuItemGroup title={t("for sale")}>
          <Menu.Item key="projects">
            <Link to={toPath(lang, "projects")}>{t("projects")}</Link>
          </Menu.Item>
          <Menu.Item key="otherProjects">
            <Link to={toPath(lang, "otherProjects")}>
              {t("other projects")}
            </Link>
          </Menu.Item>
        </MenuItemGroup>
      </SubMenu>
      <Menu.Item key="about">
        <Link to={toPath(lang, "about")}>{t("about us")}</Link>
      </Menu.Item>
      <Menu.Item key="education">
        <Link to={toPath(lang, "education")}>{t("education")}</Link>
      </Menu.Item>
      <Menu.Item key="blog">
        <Link to={toPath(lang, "blog")}>{t("blog")}</Link>
      </Menu.Item>
      <Menu.Item key="services">
        <Link to={toPath(lang, "services")}>{t("our services")}</Link>
      </Menu.Item>
      <Menu.Item key="contact">
        <Link to={toPath(lang, "contact")}>{t("contact us")}</Link>
      </Menu.Item>
    </Menu>
  );
};
export default withTranslation()(LeftMenu);
