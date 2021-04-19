import React from 'react'
import "../App.css";
import { Layout } from "antd";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Path from "../Components/Path";
import NewTransaction from "../Components/NewTransaction"

const CreateTransactionPage = () => {
    return (
        <div>
            <Layout>
                <Navbar />
                <Layout>
                    <Sidebar />
                    <Layout style={{ padding: "0 24px 24px" }}>
                        <Path />
                        <NewTransaction />
                    </Layout>
                </Layout>
            </Layout>

        </div>
    )
}

export default CreateTransactionPage
