import React, { Component } from "react";
import { isMobile } from "react-device-detect";
import { Link } from "gatsby";
import LeftMenu from "./LeftMenu";
import RightMenu from "./RightMenu";
import { Drawer, Button, Icon } from "antd";
import company from "../../../_company/company";
import { toPath } from "../../../_utils/functions";
import i18n from "i18next";
import "./Navbar.css";
class Navbar extends Component {
  state = {
    visible: false
  };

  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  render() {
    const lang = i18n.language;
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
            <RightMenu mode="horizontal" />
          </div>
          <Button
            className="menu__mobile-button"
            type="primary"
            onClick={this.showDrawer}
          >
            <Icon type="align-right" />
          </Button>
          <Drawer
            placement="right"
            className="menu_drawer"
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
          >
            <LeftMenu mode="inline" />
            <RightMenu mode="inline" />
          </Drawer>
        </div>
      </nav>
    );
  }
}

export default Navbar;
