import React from 'react';
import "../App.css";
import { Layout, Breadcrumb } from "antd";

const Path = () => {
    return (    
        <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Main</Breadcrumb.Item>
            <Breadcrumb.Item>DBS</Breadcrumb.Item>
            <Breadcrumb.Item>Account 1</Breadcrumb.Item>
        </Breadcrumb>
    );
}

export default Path;
