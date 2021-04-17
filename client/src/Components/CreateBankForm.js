import React from 'react';
import "../App.css";
import { Layout, Form, Input, Button, Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

const { Content } = Layout;

const layout = {
  labelCol: {span: 8},
  wrapperCol: {span: 6},
};

const tailLayout = {
    wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const menu = (
  <Menu>
    <Menu.Item>1st menu item</Menu.Item>
    <Menu.Item icon={<DownOutlined />} disabled>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item disabled>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item
      </a>
    </Menu.Item>
    <Menu.Item danger>a danger item</Menu.Item>
  </Menu>
);

const onFinish = (values) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const CreateBankForm = () => {
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
            label="Bank Name"
            name="bankName"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            {/* <Input /> */}
            <Dropdown overlay={menu}>
              <a
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
              >
                Hover me <DownOutlined />
              </a>
            </Dropdown>
          </Form.Item>

          <Form.Item
            label="Nickname"
            name="nickName"
            rules={[
              {
                required: true,
                message: "Please input a nickname for your bank account!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Starting Balance"
            name="balance"
            rules={[
              {
                required: true,
                message:
                  "Please input a starting balance for your bank account!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Create Bank Account
            </Button>
          </Form.Item>
        </Form>
      </Content>
    );
}

export default CreateBankForm;
