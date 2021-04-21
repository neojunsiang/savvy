import React from 'react';
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

  const [{ allAccounts, allTransactions }, dispatch] = useStateValue();
  const balance = allAccounts[allAccounts.findIndex((account) => account.bankName === bankName && account.nickName === nickName)].balance.$numberDecimal;
  const bankId = allAccounts[allAccounts.findIndex((account) => account.bankName === bankName && account.nickName === nickName)]._id;
  console.log(bankId);
  console.log(allAccounts);
  console.log("show bank page", allTransactions);

  return (
    <div>
      <Layout>
        <Navbar />
        <Layout>
          <Sidebar />
          <Layout style={{ padding: "0 24px 24px" }}>
            <Path bankName={bankName} nickName={nickName} />
            <ShowBankSummary bankName={bankName} nickName={nickName} balance={balance} bankId={bankId} allTransactions={allTransactions} />
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default ShowBankPage;
