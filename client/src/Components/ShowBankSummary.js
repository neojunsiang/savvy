import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useParams } from "react-router-dom";
import "../App.css";
import { Layout } from "antd";
import { Card } from "antd";
import { Button } from "antd"
import { useStateValue } from './StateProvider';
import TransactionTable from './TransactionTable';
import { PlusOutlined } from '@ant-design/icons';


const { Content } = Layout;
const { Meta } = Card;


const ShowBankSummary = ({ bankName, nickName, balance, bankId }) => {
    const [{ allTransactions }, dispatch] = useStateValue();
    // const accountBalance = allAccounts[allAccounts.findIndex((account) => account.bankName === bankName && account.nickName === nickName)].balance;
    const createTransactionLink = `/main/${bankName}/${nickName}/${bankId}/create-transaction`;
    const EditTransactionPage = `/main/${bankName}/${nickName}/${bankId}/edit-transaction`;

    const totalSum = (allTransactions, transactionType) => {
        let sum = 0;
        for (let i = 0; i < allTransactions.length; i++) {
            console.log(allTransactions[i]);
            if (allTransactions[i].type === transactionType.toString()) {
                sum += parseFloat(allTransactions[i].amount.$numberDecimal);
            }
            console.log("sum", sum);
        }
        return sum
    }

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
                    <Meta title="Starting Balance" /><br />${parseFloat(balance)}
                </Card>
                <Card style={{ width: 240, borderColor: "#d1d1d1", borderRadius: "5px", fontSize: "20px" }}>
                    <Meta title="Income" /><br />${totalSum(allTransactions, "income")}
                </Card>
                <Card style={{ width: 240, borderColor: "#d1d1d1", borderRadius: "5px", fontSize: "20px" }}>
                    <Meta title="Expenses" /><br />${totalSum(allTransactions, "expense")}
                </Card>
                <Card style={{ width: 240, borderColor: "#d1d1d1", borderRadius: "5px", fontSize: "20px" }}>
                    <Meta title="Ending Balance" /><br />${(parseFloat(balance) + totalSum(allTransactions, "income") - totalSum(allTransactions, "expense")).toFixed(2)}
                </Card>
                <Link to={createTransactionLink}><Button type="primary" shape="round" icon={<PlusOutlined />} /></Link>
            </div>
            <br />
            <div>
                <TransactionTable allTransactions={allTransactions} EditTransactionPage={EditTransactionPage} />
            </div>
        </Content>
    )
}

export default ShowBankSummary;
