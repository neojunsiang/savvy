import React from 'react'
import { useParams } from "react-router-dom";
import "../App.css";
import { Layout } from "antd";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Path from "../Components/Path";
import NewTransaction from "../Components/NewTransaction"

const CreateTransactionPage = () => {

    const { bankName, nickName } = useParams();

    return (
        <div>
            <Layout>
                <Navbar />
                <Layout>
                    <Sidebar />
                    <Layout style={{ padding: "0 24px 24px" }}>
                        <Path />
                        <NewTransaction bankName={bankName} nickName={nickName} />
                    </Layout>
                </Layout>
            </Layout>

        </div>
    )
}

export default CreateTransactionPage
