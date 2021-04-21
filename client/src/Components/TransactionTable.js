import React from 'react'
import "../App.css";
import { Table, Tag, Space, Button } from 'antd';

const TransactionTable = ({ allTransactions }) => {


    const dataSource = allTransactions;
    console.log("dataSource", dataSource);

    console.log("allTxns", allTransactions);
    const transaction = allTransactions.map((txn, id) => {
        console.log("txn newTransaction", txn.resJson);
        return txn.resJson;
    })
    console.log("txn after transformation", transaction); // output = [{...}, {...}]

    const handleDelete = () => {
        // console.log(event); 
        console.log("deleted")
    }
    // console.log("txn table", allTransactions);
    // const transaction = allTransactions.map((txn, id) => {
    //     console.log(txn.newTransaction);
    //     return txn.newTransaction;
    // })
    // console.log(transaction);

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
            key: "action",
            render: () => (
                <Space size="middle">
                    <Button type="primary">Edit</Button>
                    <Button type="primary">Delete</Button>
                </Space>
            ),
        },
    ];

    return (
        <div>
            <Table columns={columns} dataSource={allTransactions} />
        </div>
    );
}

export default TransactionTable