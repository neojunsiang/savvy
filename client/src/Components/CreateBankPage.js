import React from 'react';
import "../App.css";
import { Layout, Menu } from "antd";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Path from "./Path";
import CreateBankForm from './CreateBankForm';

const CreateBankPage = () => {
    return (
      <div>
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
      </div>
    );
}

export default CreateBankPage;
