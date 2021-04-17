//! Page that a user will see upon successful login
import React from 'react';
import "../App.css";
import { Layout, Menu } from "antd";
import Navbar from "./Navbar";
import Sidebar from './Sidebar';
import Path from './Path';
import Start from './Start';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const MainPage = () => {
    return (
      <div>
        <Layout>
          <Navbar />
          <Layout>
            <Sidebar />
            <Layout style={{ padding: "0 24px 24px" }}>
                <Path />
                <Start />
            </Layout>
          </Layout>
        </Layout>
      </div>
    );
}

export default MainPage;
