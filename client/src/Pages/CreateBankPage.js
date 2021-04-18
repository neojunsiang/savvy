import React from 'react';
import "../App.css";
import { Layout } from "antd";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Path from "../Components/Path";
import CreateBankForm from '../Components/CreateBankForm';

const CreateBankPage = () => {
    return (
      <div>
        <Layout>
          <Navbar />
          <Layout>
            <Sidebar />
            <Layout style={{ padding: "0 24px 24px" }}>
              <Path />
              <CreateBankForm />
            </Layout>
          </Layout>
        </Layout>
      </div>
    );
}

export default CreateBankPage;
