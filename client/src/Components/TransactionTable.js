import React from 'react'
import { Link, useHistory } from "react-router-dom"
import "../App.css";
import { Table, Tag, Space, Button, Anchor } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useStateValue } from "./StateProvider";


const TransactionTable = ({ allTransactions, EditTransactionPage }) => {
    const history = useHistory();

    const [{ }, dispatch] = useStateValue();
    console.log("allTxns", allTransactions);

    // edit transaction when clicked
    const handleTransactionEdit = (record) => {
        console.log("txn table edit", record);
        console.log("editing...")
        // history.push(EditTransactionPage);
        dispatch({
            type: "READ_AN_EDIT_TRANSACTION",
            editTransaction: record
        })
    }

    // delete transaction when clicked
    const handleDelete = (bankId, transactionId) => {
        console.log("deleted bankId " + bankId);
        console.log("deleted transactionId " + transactionId);
        fetch("/transactions/" + transactionId, {
            method: "DELETE",
        }).then((res) => {
            console.log(res.json());
            dispatch({
                type: "DELETE_A_TRANSACTION",
                bankId: bankId,
                transactionId: transactionId
            });
        }, (err) => console.log(err));
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
            render: (record, index) => (
                // console.log("text", text._id) // show the object
                // console.log(record) // show the object
                // console.log(index) // show the index of the row
                <Space Space size="middle">
                    <Link to={EditTransactionPage} onClick={() => handleTransactionEdit(record)}><Button type="primary" shape="round" icon={<EditOutlined style={{ fontSize: "18px" }} />} /></Link>
                    <Button type="primary" icon={<DeleteOutlined style={{ fontSize: "18px" }} />} shape="round" onClick={() => handleDelete(record.bankId, record._id)} />
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