import React from "react";

import { withTranslation } from "react-i18next";

import { Form, Input, Select, Button } from "antd";
import countryOptions from "./countryOptions";

import TitleYellow from "../TitleYellow/TitleYellow";
import { ContactFormWrapper, FormWrapper } from "./FormStyles";
var emojiFlags = require("emoji-flags");

const { Option } = Select;

class ContactForm extends React.Component {
  state = {
    country: "+90"
  };
  handleCountryChange = country => {
    this.setState({ country });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    // const getCountryOptions =
    const prefixSelector = getFieldDecorator("prefix", {
      initialValue: this.state.country
    })(
      <Select
        style={{ width: 150 }}
        dir="ltr"
        // name="LEADCF1"
        onChange={this.handleCountryChange}
      >
        {countryOptions.map(country => (
          <Option value={`${country.number}`} key={country.key}>
            {emojiFlags.countryCode(country.flag).emoji} {country.number}{" "}
            {country.text}
          </Option>
        ))}
      </Select>
    );
    const inputPrefix = title => <p className="label">{title}</p>;

    const { t } = this.props;
    return (
      <ContactFormWrapper full={this.props.full ? true : false}>
        {this.props.title ? (
          <TitleYellow title={t("let us contact you")} />
        ) : null}
        <FormWrapper>
          <Form
            action="https://crm.zoho.com/crm/WebToLeadForm"
            name="WebToLeads4125304000001041863"
            method="POST"
            onSubmit='javascript:document.charset="UTF-8"; return checkMandatory4125304000000356497()'
            acceptCharset="UTF-8"
          >
            <input
              style={{ display: `none` }}
              type="text"
              name="xnQsjsdp"
              value="4e382b1be87eaae6d07d1e3d4b857754c1dc60415498f4d4330e0c644d48e307"
              readOnly={true}
            />
            <input
              style={{ display: `none` }}
              type="text"
              name="LEADCF1"
              value={this.state.country}
              readOnly={true}
            />
            <input
              style={{ display: `none` }}
              type="text"
              name="Nationality"
              value={this.state.country}
              readOnly={true}
            />
            <input
              style={{ display: `none` }}
              type="hidden"
              name="zc_gad"
              id="zc_gad"
              value=""
              readOnly={true}
            />
            <input
              style={{ display: `none` }}
              type="text"
              name="xmIwtLD"
              value="f56de576b4acc791874b180e845593da808b5b89b71aac577bc3951fc6bddb3a"
              readOnly={true}
            />
            <input
              style={{ display: `none` }}
              type="text"
              name="actionType"
              value="TGVhZHM="
              readOnly={true}
            />
            <input
              style={{ display: `none` }}
              type="text"
              name="returnURL"
              value="https://homey.com.tr"
              readOnly={true}
            />
            <input
              style={{ display: `none` }}
              type="text"
              id="ldeskuid"
              name="ldeskuid"
              readOnly={true}
            />
            <input
              style={{ display: `none` }}
              type="text"
              id="LDTuvid"
              name="LDTuvid"
              readOnly={true}
            />
            <Form.Item>
              {getFieldDecorator("fullname", {
                rules: [
                  {
                    required: true,
                    message: "Please provide full name.",
                    whitespace: true
                  }
                ]
              })(
                <Input
                  addonBefore={inputPrefix(`${t("name")}:`)}
                  name="Last Name"
                  required
                />
              )}
              {/* <Input
                addonBefore={inputPrefix(`${t("name")}:`)}
                name="Last Name"
                required
              /> */}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("email", {
                rules: [
                  {
                    type: "email",
                    message: "please provide a valid email"
                  },
                  {
                    required: true,
                    message: "please provide your email address"
                  }
                ]
              })(
                <Input
                  addonBefore={inputPrefix(`${t("email")}:`)}
                  name="Email"
                  required
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("phone", {
                rules: [
                  { min: 10, message: "please provide a valid phone number" },
                  {
                    required: true,
                    message: "please provide a valid phone number"
                  }
                ]
              })(
                <Input
                  addonBefore={inputPrefix(`${t("number")}:`)}
                  addonAfter={prefixSelector}
                  style={{ width: "100%" }}
                  name="Phone"
                  required
                />
              )}
            </Form.Item>
            <Form.Item>
              {/* <label htmlFor="">{inputPrefix("Message")}</label> */}
              {getFieldDecorator("LEADCF2")(
                // <Input.TextArea name="LEADCF2" />
                <Input
                  addonBefore={inputPrefix(`${t("message")}:`)}
                  style={{ width: "100%" }}
                  name="LEADCF2"
                />
              )}
            </Form.Item>
            <div style={{ display: `none` }}>
              <input
                name="Lead Status"
                value="Not&#x20;Contacted"
                readOnly={true}
              />
              <input name="Lead Source" value="Website" readOnly={true} />
              <input
                name="LEADCF4"
                value={
                  global && global.window ? global.window.location.href : ""
                }
                readOnly={true}
              />
            </div>
            <div className="submitBtnItem">
              <Button htmlType="submit" type="submit" value="Send">
                {t("send")}
              </Button>
            </div>
          </Form>
        </FormWrapper>
      </ContactFormWrapper>
    );
  }
}
const WrappedRegistrationForm = Form.create({ name: "register" })(
  withTranslation()(ContactForm)
);

// WrappedRegistrationForm.propTypes = {
//   t: PropTypes.func.isRequired
// };

export default WrappedRegistrationForm;
