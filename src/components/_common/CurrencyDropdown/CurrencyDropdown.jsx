import React, { useContext, useEffect, useState } from "react";
import { Select, Icon } from "antd";
import * as load from "@eahefnawy/functions.js";
import company from "../../../_company/company";

const { getCurrencies } = load(company.backend);

var emojiFlags = require("emoji-flags");

const CurrencyDropdown = (
  {
    // GlobalContext: { state, hanldeGetCurrencies, setCurrency }
  }
) => {
  const [currencies, setCurrencies] = useState(null);

  useEffect(() => {
    hanldeGetCurrencies();
  }, []);
  const hanldeGetCurrencies = async () => {
    const currencies = await getCurrencies();
    // localStorage.setItem("currencies", JSON.stringify(currencies));
    setCurrencies(currencies);
  };
  const options = [
    <Select.Option value={"TRY"} rate={1} key="-1">
      {emojiFlags.countryCode("TR").emoji} TRY
    </Select.Option>
  ];

  if (currencies) {
    currencies.map(({ currency, flag, name, value }, key) => {
      options.push(
        <Select.Option value={currency} rate={value} key={key}>
          {emojiFlags.countryCode(flag).emoji} {currency}
        </Select.Option>
      );
    });
  }
  return (
    <Select
      style={{ minWidth: `150px`, margin: `auto 0` }}
      // value={state.currency.value}
      // onChange={(data, props) => setCurrency(data, props)}
      suffixIcon={<Icon type="money-collect" theme="filled" />}
    >
      {options}
    </Select>
  );
};

export default CurrencyDropdown;
