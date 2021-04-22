import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import "../App.css";
import { Layout, Form, Input, Button, Select, InputNumber } from "antd";

const { Content } = Layout;
const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
};

const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const CreateBankForm = () => {
  const [{ allAccounts }, dispatch] = useStateValue();
  const [bank, setBank] = useState({});
  const history = useHistory();

  // If user fills in all fields in the form
  const onFinish = (values) => {
    console.log("Success:", values);
    // console.log("Success:", typeof values.balance);
    setBank(values);
    fetch("/banks", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((resjson) => {
        console.log("resJson", resjson);
        dispatch({
          type: "CREATE_AN_ACCOUNT",
          account: {
            bankName: values.bankName,
            nickName: values.nickName,
            // startingBalance: values.balance
            // endingBalance: values.balance
            balance: values.balance,
            bankId: resjson._id,
          },
        });
      })
      .catch((error) => console.error({ Error: error }));
    history.push("/main");
  };

  // If user does not fill in all fields in the form
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onChange = (value) => {
    console.log(`selected ${value}`);
  };

  const onBlur = () => {
    console.log("blur");
  };

  const onFocus = () => {
    console.log("focus");
  };

  const onSearch = (val) => {
    console.log("search:", val);
  };

  return (
    <Content
      className="site-layout-background"
      style={{
        padding: 24,
        margin: 0,
        minHeight: 300,
      }}
    >
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Bank"
          name="bankName"
          rules={[
            {
              required: true,
              message: "Please select a bank",
            },
          ]}
        >
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Select your bank"
            optionFilterProp="children"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="DBS">DBS</Option>
            <Option value="OCBC">OCBC</Option>
            <Option value="UOB">UOB</Option>
            <Option value="Standard Chartered">Standard Chartered</Option>
            <Option value="HSBC">HSBC</Option>
            <Option value="Citibank">Citibank</Option>
            <Option value="CIMB">CIMB</Option>
            <Option value="Maybank">Maybank</Option>
            <Option value="RHB">RHB</Option>
            <Option value="Others">Others</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Nickname"
          name="nickName"
          rules={[
            {
              required: true,
              message: "Please input a nickname for your bank",
            },
          ]}
        >
          <Input placeholder="A nickname for your bank" />
        </Form.Item>
        <Form.Item
          label="Starting Balance"
          name="balance"
          rules={[
            {
              required: true,
              message: "Please input a starting balance",
            },
          ]}
        >
          <InputNumber
            style={{
              width: 200,
            }}
            placeholder="100"
            min="0"
            step="0.01"
            onChange={onChange}
          />
        </Form.Item>

        {/* <Form.Item
          label="Starting Balance"
          name="balance"
          rules={[
            {
              required: true,
              message: "Please input a starting balance",
            },
          ]}
        >
          <Input type="" placeholder="$100" />
        </Form.Item> */}
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Create Bank Account
          </Button>
        </Form.Item>
      </Form>
    </Content>
  );
};

export default CreateBankForm;
