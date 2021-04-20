import React from 'react'
import "../App.css";
import { Table, Tag, Space, Button } from 'antd';


const TransactionTable = ({ allTransactions }) => {

    console.log("txn table", allTransactions);
    const transaction = allTransactions.map((txn, id) => {
        console.log(txn.newTransaction);
        return txn.newTransaction;
    })
    console.log(transaction);

    const handleEdit = () => {
        console.log("edited txn table");
    }

    const handleDelete = () => {
        console.log("deleted txn table");
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
        }, {
            title: "Category",
            dataIndex: "category",
            key: "category",
        }, {
            title: "Amount",
            dataIndex: "amount",
            key: "amount",
        }, {
            title: "Description",
            dataIndex: "description",
            key: "description",
        },
        {
            title: "Action",
            key: "action",
            render: () => (
                < Space size="middle" >
                    <Button onClick={handleEdit} type="primary">Edit</Button>
                    <Button onClick={handleDelete} type="primary">Delete</Button>
                </ Space >
            )
        },
    ]

    // const data = [
    //     {
    //         "date": "5 March 2021",
    //         "type": "income",
    //         "category": "salary",
    //         "amount": "100",
    //         "description": "Salary",
    //         "bankId": "607e59a3f69d360ef5c7b877"
    //     }
    // ]


    return (
        <div>
            <Table columns={columns} dataSource={transaction} />
        </div>
    )
}

export default TransactionTable