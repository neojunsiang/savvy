//! Page that a user will see upon successful login
import React from 'react';
import { useStateValue } from "../Components/StateProvider";
import "../App.css";
import { Layout, Menu } from "antd";
import Navbar from "../Components/Navbar";
import Sidebar from '../Components/Sidebar';
import Path from '../Components/Path';
import Start from '../Components/Start';

// const { SubMenu } = Menu;
// const { Header, Content, Sider } = Layout;

const MainPage = () => {
  const [{ allAccounts }, dispatch] = useStateValue();
  console.log(allAccounts);

    return (
      <div>
        <Layout>
          <Navbar />
          <Layout>
            <Sidebar />
            <Layout style={{ padding: "0 24px 24px" }}>
              <Path />
              <Start allAccounts={allAccounts} />
            </Layout>
          </Layout>
        </Layout>
      </div>
    );
}

export default MainPage;
