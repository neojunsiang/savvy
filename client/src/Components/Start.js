import React from 'react';
import { Link } from "react-router-dom";
import "../App.css";
import { Layout } from "antd";
import { Card } from "antd";
import { BankFilled, DollarCircleFilled } from "@ant-design/icons";

const { Content } = Layout;
const { Meta } = Card;

const Start = ({ allAccounts }) => {
  console.log(allAccounts);
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
          <Link to="/create-bank">
            <Card hoverable style={{ borderColor: "#d1d1d1", borderRadius: "5px" }}>
                <Meta title="Create Bank Account" />
                <BankFilled />
            </Card>
          </Link><br/>
          <h4>Your Accounts:</h4>
          {allAccounts.map(account => <Link to={{pathname: `/main/${account.bankName}/${account.nickName}`}}><p>{account.bankName} / {account.nickName}</p></Link>)}
        </div>
      </Content>
    );
}

export default Start;
