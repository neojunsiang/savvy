import React from 'react';
import "../App.css";
import { Layout, Menu, Button } from "antd";
import { useStateValue } from "./StateProvider";
import { useHistory } from "react-router";

const { Header } = Layout;

const Navbar = () => {
  const [{ loginUser }, dispatch] = useStateValue();
  const history = useHistory();

  const handleLogout = () => {
    fetch("/sessions", {
      method: "DELETE"
    }).then(() => {
      dispatch({
        type: "UPON_USER_LOGIN",
        user: ""
      });
      history.push("/welcome");
    })
  }

  return (
    <Header className="header">
      {/* <div className="logo">test</div> */}
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["0"]}>
        <Menu.Item className="navbar__left navbar__appName" key="1">savvy</Menu.Item>
        {loginUser === "" ? null : <Menu.Item className="navbar__left" key="2">Welcome {loginUser}!</Menu.Item>}
        {loginUser === "" ? null : <Menu.Item className="navbar__right" key="3"><Button onClick={handleLogout}>Logout</Button></Menu.Item>}
      </Menu>
    </Header>
  );
}

export default Navbar;
