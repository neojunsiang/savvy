import React from 'react';
import "../App.css";
import { Layout } from "antd";
import { Card } from "antd";
import { BankFilled, DollarCircleFilled } from "@ant-design/icons";

const { Content } = Layout;
const { Meta } = Card;

const Start = () => {
    return (
      <Content
        className="site-layout-background"
        style={{
          padding: 24,
          margin: 0,
          minHeight: 300,
        }}
      >
        <div>
            <Card hoverable style={{ width: 240, borderColor: "#d1d1d1", borderRadius: "5px" }}>
                <Meta title="Create Bank Account" />
                <BankFilled />
            </Card><br/>
            <Card hoverable style={{ width: 240, borderColor: "#d1d1d1", borderRadius: "5px" }}>
                <Meta title="Create Budget" />
                <DollarCircleFilled />
            </Card>
        </div>
      </Content>
    );
}

export default Start;
