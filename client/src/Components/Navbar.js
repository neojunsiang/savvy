import React from 'react';
import "../App.css";
import { Layout, Menu, Button } from "antd";

const { Header } = Layout;

const Navbar = () => {
    return (
      <Header className="header">
        {/* <div className="logo">test</div> */}
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["0"]}>
          <Menu.Item className="navbar__left navbar__appName" key="1">savvy</Menu.Item>
          <Menu.Item className="navbar__left" key="2">Welcome, Jack</Menu.Item>
          <Menu.Item className="navbar__right" key="3"><Button>Logout</Button></Menu.Item>
        </Menu>
      </Header>
    );
}

export default Navbar;
