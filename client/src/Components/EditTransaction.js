import React from 'react'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/esm/Col';
import Form from 'react-bootstrap/Form'
import { useHistory } from 'react-router';
import { useStateValue } from "./StateProvider";


const EditTransaction = ({ bankName, nickName, bankId }) => {

    const history = useHistory();

    const [{ editTransaction }, dispatch] = useStateValue();
    console.log("edittxn", editTransaction);
    console.log("edittxn", editTransaction.type);

    const categoryIncomeOptions = [
        { value: "salary", label: "Salary" },
        { value: "others", label: "Others" },
    ];
    const categoryExpenseOptions = [
        { value: "food", label: "Food" },
        { value: "entertainment", label: "Entertainment" },
        { value: "transportation", label: "Transportation" },
        { value: "groceries", label: "Groceries" },
        { value: "housing", label: "Housing" },
        { value: "clothing", label: "Clothing" },
        { value: "utilities", label: "Utilities" },
        { value: "health", label: "Health" },
        { value: "education", label: "Education" },
        { value: "insurance", label: "Insurance" },
        { value: "investments", label: "Investments" },
        { value: "others", label: "Others" },
    ];


    const handleEdit = (event) => {
        event.preventDefault();
        // console.log("edited");
        const newEditedTransaction = {
            type: event.target.type.value,
            category: event.target.category.value,
            amount: event.target.amount.value,
            description: event.target.description.value,
            date: event.target.date.value,
            bankId: bankId,
        };
        console.log("newEditedTransaction", newEditedTransaction)
        console.log("txn id", editTransaction._id)
        fetch("/transactions/" + editTransaction._id, {
            method: "PUT",
            body: JSON.stringify(newEditedTransaction),
            headers: {
                "Content-Type": "application/json",
            },
        }).then(res => res.json())
            .then((resJson) => {
                console.log("resJson", resJson)
                dispatch({
                    type: "EDIT_A_TRANSACTION",
                    editTransaction: {
                        type: event.target.type.value,
                        category: event.target.category.value,
                        amount: event.target.amount.value,
                        description: event.target.description.value,
                        date: event.target.date.value,
                        bankId: bankId,
                        transactionId: resJson._id
                    }
                })
            });
        history.push(`/main/${bankName}/${nickName}`)
    }

    return (
        <>
            <h1>Edit A Transaction</h1>
            <Form onSubmit={handleEdit}>
                <Form.Group controlId="type" as={Form.Row}>
                    <Form.Label column sm={1} >Type</Form.Label>
                    <Col sm={3}>
                        <Form.Control as="select" defaultValue={editTransaction.type}>
                            <option value="income">Income</option>
                            <option value="expense">Expense</option>
                        </Form.Control >
                    </Col>
                </Form.Group>

                <Form.Group controlId="category" as={Form.Row}>
                    <Form.Label column sm={1}>
                        Category
          </Form.Label>
                    <Col sm={3}>
                        <Form.Control as="select" defaultValue={editTransaction.category}>
                            <optgroup label="Income">
                                {categoryIncomeOptions.map((income, id) => {
                                    return (
                                        <option key={id} value={income.value}>
                                            {income.label}
                                        </option>
                                    );
                                })}
                            </optgroup>
                            <optgroup label="Expense">
                                {categoryExpenseOptions.map((expense, id) => {
                                    return (
                                        <option key={id} value={expense.value}>
                                            {expense.label}
                                        </option>
                                    );
                                })}
                            </optgroup>
                        </Form.Control>
                    </Col>
                </Form.Group>

                <Form.Group controlId="date" as={Form.Row} >
                    <Form.Label column sm={1} >Date</Form.Label>
                    <Col sm={3}>
                        <Form.Control name="date" placeholder="Date of Transaction" defaultValue={editTransaction.date} />
                    </Col>
                </Form.Group>

                <Form.Group controlId="amount" as={Form.Row}>
                    <Form.Label column sm={1} >Amount:</Form.Label>
                    <Col sm={3}>
                        <Form.Control name="amount" placeholder="Amount" defaultValue={editTransaction.amount.$numberDecimal} />
                    </Col>
                </Form.Group>

                <Form.Group controlId="description" as={Form.Row}>
                    <Form.Label column sm={1} >Description</Form.Label>
                    <Col sm={3}>
                        <Form.Control name="description" placeholder="Amount" defaultValue={editTransaction.description} />
                    </Col>
                </Form.Group>

                <Button type="submit" size="md" >
                    Edit
                </Button >
            </Form>
        </>
    )
}

export default EditTransaction