import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Layout, Menu } from "antd";
import { UserOutlined, LaptopOutlined, NotificationOutlined } from "@ant-design/icons";
import { useStateValue } from "./StateProvider";

const { SubMenu } = Menu;
const { Sider } = Layout;

const Sidebar = () => {
  const [{ allAccounts }, dispatch] = useStateValue();
  console.log(allAccounts);
  const sidebarAccounts = {
    DBS: ["one", "two", "three"],
    OCBC: ["one", "two", "three", "four"],
    UOB: ["one", "two", "three"],
    HSBC: ["Savings", "Current", "Education account"]
  };

  let sidebarArr = [];

  const renderMenuItem = (data) => {
    let sidebarMenuItem = [];
    for (let i = 0; i < data.length; i++) {
      sidebarMenuItem.push(<Menu.Item key={data[i]}>{data[i]}</Menu.Item>);
    }
    return sidebarMenuItem;
  }

  const renderSidebarFunc = (data) => {
    for (const key of Object.keys(data)) {
      // console.log(key, data[key]);
      console.log(key);
      sidebarArr.push(<SubMenu key={key} icon={<UserOutlined />} title={key} 
        children={renderMenuItem(data[key])}></SubMenu>);
    }
  }
  renderSidebarFunc(sidebarAccounts);

  return (
    <Sider width={200} className="site-layout-background">
      <Menu
        mode="inline"
        defaultSelectedKeys={["0"]}
        defaultOpenKeys={["sub0"]}
        style={{ height: "100%", borderRight: 0 }}
      >
        <Menu.Item key="sub0" icon={<LaptopOutlined />}>
          <Link to="/main">Main</Link>
        </Menu.Item>

        {/* {sidebarArr} */}

        {allAccounts.map((account) => (
          <Menu.Item icon={<UserOutlined />}>{account.bankName} / {account.nickName}</Menu.Item>
        ))}

        {/* <SubMenu key="sub1" icon={<UserOutlined />} title="DBS">
          <Menu.Item key="1">option1</Menu.Item>
          <Menu.Item key="2">option2</Menu.Item>
          <Menu.Item key="3">option3</Menu.Item>
          <Menu.Item key="4">option4</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<LaptopOutlined />} title="OCBC">
          <Menu.Item key="5">option5</Menu.Item>
          <Menu.Item key="6">option6</Menu.Item>
          <Menu.Item key="7">option7</Menu.Item>
          <Menu.Item key="8">option8</Menu.Item>
        </SubMenu>
        <SubMenu key="sub3" icon={<NotificationOutlined />} title="UOB">
          <Menu.Item key="9">option9</Menu.Item>
          <Menu.Item key="10">option10</Menu.Item>
          <Menu.Item key="11">option11</Menu.Item>
          <Menu.Item key="12">option12</Menu.Item>
        </SubMenu> */}
      </Menu>
    </Sider>
  );
};

export default Sidebar;
