import React from 'react'
import { useParams } from "react-router-dom";
import "../App.css";
import { Layout } from "antd";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Path from "../Components/Path";
import EditTransaction from '../Components/EditTransaction';

export const EditTransactionPage = () => {
    const { bankName, nickName, bankId } = useParams();

    return (
        <div>
            <Layout>
                <Navbar />
                <Layout>
                    <Sidebar />
                    <Layout style={{ padding: "0 24px 24px" }}>
                        <Path />
                        <EditTransaction bankName={bankName} nickName={nickName} bankId={bankId} />
                    </Layout>
                </Layout>
            </Layout>
        </div>
    );
}

export default EditTransactionPage
