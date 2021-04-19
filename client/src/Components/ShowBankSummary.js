import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import "../App.css";
import { Layout } from "antd";
import { Card } from "antd";
import { useStateValue } from './StateProvider';

const { Content } = Layout;
const { Meta } = Card;

const ShowBankSummary = ({ bankName, nickName, balance }) => {
    // const [{ allAccounts }, dispatch] = useStateValue();
    // const accountBalance = allAccounts[allAccounts.findIndex((account) => account.bankName === bankName && account.nickName === nickName)].balance;

    return (
        <Content
            className="site-layout-background"
            style={{
                padding: 24,
                margin: 0,
                minHeight: 600,
            }}
        >
            <div className="bank__summary">
                <Card style={{ width: 240, borderColor: "#d1d1d1", borderRadius: "5px", fontSize: "20px" }}>
                    <Meta title="Balance" /><br />${balance}
                </Card>
                <Card style={{ width: 240, borderColor: "#d1d1d1", borderRadius: "5px" }}>
                    <Meta title="Income" />
                </Card>
                <Card style={{ width: 240, borderColor: "#d1d1d1", borderRadius: "5px" }}>
                    <Meta title="Expenses" />
                </Card>
                <Card style={{ width: 240, borderColor: "#d1d1d1", borderRadius: "5px" }}>
                    <Meta title="Transactions" />
                </Card>
                <Link to="/main/:bankName/:nickName/create-transaction" ><button>Create a Transaction</button></Link>
            </div>
        </Content>
    )
}

export default ShowBankSummary;
