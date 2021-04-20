import React from 'react';
import { Link } from "react-router-dom";
import "../App.css";
import { Breadcrumb } from "antd";

const Path = ({ bankName, nickName }) => {
    return (
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item><Link to="/main">Main</Link></Breadcrumb.Item>
        <Breadcrumb.Item>{bankName}</Breadcrumb.Item>
        <Breadcrumb.Item>{nickName}</Breadcrumb.Item>
      </Breadcrumb>
    );
}

export default Path;
