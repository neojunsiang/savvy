import React from 'react'
import "../App.css";
import { Table, Tag, Space, Button } from 'antd';
import { useStateValue } from "./StateProvider";

const TransactionTable = ({ allTransactions }) => {

    const [{}, dispatch] = useStateValue();
    console.log("allTxns", allTransactions);

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
            render: (text, record, index) => (
                // console.log("text", text._id) // show the object
                // console.log(record) // show the object
                // console.log(index) // show the index of the row
                <Space Space size="middle" >
                    <Button type="primary" onClick={() => handleDelete(record.bankId, record._id)}>Delete</Button>
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