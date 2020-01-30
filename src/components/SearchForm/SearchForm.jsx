import React, { useContext, useState, useEffect } from "react";
import { Form, InputNumber, Input, Button, Col, Row, Select } from "antd";
import { withTranslation } from "react-i18next";
import { uniqBy, orderBy } from "lodash";
import styled from "styled-components";
import company from "../../_company/company";

const SearchFormWrapper = ({
  t,
  form,
  projects,
  setSearch,
  search,
  defaultSearch
}) => {
  const [loading, setLoading] = useState(false);
  const [cities, setCities] = useState([]);
  const [districts, setDistricts] = useState([]);
  const { getFieldDecorator, validateFields } = form;
  useEffect(() => {
    const citiesArray = [];
    const districtsArray = [];
    projects.forEach(({ node }) => {
      citiesArray.push(node.location.city);
      districtsArray.push(node.location.district);
    });
    setCities(orderBy(uniqBy(citiesArray)));
    setDistricts(orderBy(uniqBy(districtsArray)));
    return () => {};
  }, []);
  const handleSubmit = e => {
    e.preventDefault();
    validateFields(async (err, values) => {
      if (!err) {
        setSearch(values);
        console.log(values, "values");
      }
    });
  };
  const FormWrapper = styled.div`
    border-radius: 5px;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
    transform: translateY(-50%);
    padding: 20px;
    background-color: #fff;
  `;

  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit}>
        <Row gutter={12}>
          <Col span={12} sm={6}>
            <Form.Item label={t("city")}>
              {getFieldDecorator("city", {
                initialValue: search.city
              })(
                <Select>
                  <Select.Option value="all" key="all">
                    {t("all")}
                  </Select.Option>
                  {cities.map(city => (
                    <Select.Option value={city} key={city}>
                      {city}
                    </Select.Option>
                  ))}
                </Select>
              )}
            </Form.Item>
          </Col>
          <Col span={12} sm={6}>
            <Form.Item label={t("district")}>
              {getFieldDecorator("district", {
                initialValue: search.district
              })(
                <Select>
                  <Select.Option value="all" key="all">
                    {t("all")}
                  </Select.Option>
                  {districts.map(district => (
                    <Select.Option value={district} key={district}>
                      {district}
                    </Select.Option>
                  ))}
                </Select>
              )}
            </Form.Item>
          </Col>
          <Col span={12} sm={6}>
            <Form.Item label={t("category")}>
              {getFieldDecorator("category", {
                initialValue: search.category
              })(
                <Select>
                  <Select.Option value="all" key="all">
                    {t("all")}
                  </Select.Option>
                  <Select.Option value="seaview" key="seaview">
                    {t("seaview")}
                  </Select.Option>
                  <Select.Option value="downtown" key="downtown">
                    {t("downtown")}
                  </Select.Option>
                  <Select.Option value="guaranty" key="guaranty">
                    {t("guaranty")}
                  </Select.Option>
                </Select>
              )}
            </Form.Item>
          </Col>
          <Col span={12} sm={6}>
            <Form.Item label={t("status")}>
              {getFieldDecorator("status", {
                initialValue: search.status
              })(
                <Select>
                  <Select.Option value="all" key="all">
                    {t("all")}
                  </Select.Option>
                  <Select.Option value={true} key="ready">
                    {t("ready")}
                  </Select.Option>
                  <Select.Option value={false} key="underConstruction">
                    {t("under construction")}
                  </Select.Option>
                </Select>
              )}
            </Form.Item>
          </Col>
        </Row>

        <Form.Item>
          <Row gutter={12}>
            <Col span={16}>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: `100%` }}
                loading={loading}
                icon="search"
              >
                {t("search")}
              </Button>
            </Col>
            <Col span={8}>
              <Button
                htmlType="submit"
                icon="close"
                style={{
                  backgroundColor: company.colorSecondary,
                  width: `100%`,
                  color: `#fff`
                }}
                onClick={() => setSearch(defaultSearch)}
              >
                {t("reset")}
              </Button>
            </Col>
          </Row>
        </Form.Item>
      </Form>
    </FormWrapper>
  );
};

const SearchForm = Form.create({ name: "search_form" })(
  withTranslation()(SearchFormWrapper)
);

export default SearchForm;
