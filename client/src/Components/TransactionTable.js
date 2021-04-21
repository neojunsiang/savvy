import React from 'react'
import { Link } from "react-router-dom"
import "../App.css";
import { Table, Tag, Space, Button } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';


const TransactionTable = ({ allTransactions }) => {

    console.log("allTxns", allTransactions);

    const handleDelete = (id) => {
        console.log("deleted " + id);
        fetch("/transactions/" + id, {
            method: "DELETE"
        }).then(res => console.log("resData", res.json()))
    }

    const handleEdit = (record) => {
        console.log("handle edit", record);
        console.log("edited " + record._id);


    }

    const columns = [
        {
            title: "Date",
            dataIndex: "date",
            key: "date",
        },
        {
            title: "Type",
            dataIndex: "type",
            key: "type",
        },
        {
            title: "Category",
            dataIndex: "category",
            key: "category",
        },
        {
            title: "Amount",
            dataIndex: ["amount", "$numberDecimal"],
            key: "amount",
        },
        {
            title: "Description",
            dataIndex: "description",
            key: "description",
        },
        {
            title: "Action",
            render: (text, record, index) => (
                // console.log("text", text._id) // show the object
                // console.log(record) // show the object
                // console.log(index) // show the index of the row 
                <Space Space size="middle" >
                    <Button type="primary" shape="round" onClick={() => handleDelete(record._id)} icon={<DeleteOutlined />} />
                    <Link to="./EditTransaction.js"><Button type="primary" shape="round" onClick={() => handleEdit(record)} icon={<EditOutlined />} /></Link>
                </Space >
            )
        },
    ];

    return (
        <div>
            <Table columns={columns} dataSource={allTransactions} />
        </div>
    );
}

export default TransactionTable