import React, { useContext, useEffect } from "react";
import { Select, Icon } from "antd";
// import withGlobalContext from "../../_context/withGlobalContext";
var emojiFlags = require("emoji-flags");

const CurrencyDropdown = (
  {
    // GlobalContext: { state, hanldeGetCurrencies, setCurrency }
  }
) => {
  useEffect(() => {
    // if (!state.currencies.length) {
    //   hanldeGetCurrencies();
    // }
  }, []);
  const options = [
    <Select.Option value={"TRY"} rate={1} key="-1">
      {emojiFlags.countryCode("TR").emoji} TRY
    </Select.Option>
  ];

  // if (state.currencies.length) {
  //   state.currencies.map(({ currency, flag, name, value }, key) => {
  //     options.push(
  //       <Select.Option value={currency} rate={value} key={key}>
  //         {emojiFlags.countryCode(flag).emoji} {currency}
  //       </Select.Option>
  //     );
  //   });
  // }
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
