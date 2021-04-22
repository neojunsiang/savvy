import { useEffect, useState } from 'react';
import { useParams } from "react-router";
import { useStateValue } from "../Components/StateProvider";
import "../App.css";
import { Layout } from "antd";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Path from "../Components/Path";
import ShowBankSummary from "../Components/ShowBankSummary";

const ShowBankPage = () => {
  const { bankName, nickName } = useParams();
  console.log(bankName, nickName);
  const [{ allAccounts, allTransactions, loginUser }, dispatch] = useStateValue();

  console.log("allAccounts", allAccounts);
  console.log("allTransactions", allTransactions);
  console.log("loginUser", loginUser);

  const balance = allAccounts[allAccounts.findIndex((account) => account.bankName === bankName && account.nickName === nickName)].balance.$numberDecimal;
  const bankId = allAccounts[allAccounts.findIndex((account) => account.bankName === bankName && account.nickName === nickName)]._id;
  console.log(bankId);
  console.log("show bank page", allTransactions);

  useEffect(() => {
    fetch("/transactions")
      .then((data) => {
        return data.json();
      }, (err) => {
        console.log(err)
      })
      .then((parsedData) => {
        console.log(parsedData);
        const bankTransactions = parsedData.filter(transaction => transaction.bankId === bankId);
        console.log(bankTransactions);
        dispatch({
          type: "READ_ALL_TRANSACTIONS",
          transactions: bankTransactions
        });
      }, (err) => console.log(err))
  }, []);

  return (
    <div>
      <Layout>
        <Navbar />
        <Layout>
          <Sidebar />
          <Layout style={{ padding: "0 24px 24px" }}>
            <Path bankName={bankName} nickName={nickName} />
            <ShowBankSummary bankName={bankName} nickName={nickName} balance={balance} bankId={bankId} />
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default ShowBankPage;
