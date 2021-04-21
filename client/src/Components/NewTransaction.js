import React from 'react'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/esm/Col';
import Form from 'react-bootstrap/Form'
import { useHistory, useParams } from 'react-router';
import { useStateValue } from './StateProvider';

const NewTransaction = ({ bankName, nickName, bankId }) => {
    const [{ allTransactions }, dispatch] = useStateValue();
    const history = useHistory();

    const bankSummaryLink = `/main/${bankName}/${nickName}`;

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

    const handleCreate = (event) => {
        event.preventDefault();
        const newTransaction = {
            type: event.target.type.value,
            category: event.target.category.value,
            amount: event.target.amount.value,
            description: event.target.description.value,
            date: event.target.date.value,
            bankId: bankId,
        };
        console.log("new", newTransaction);
        fetch("/transactions", {
            method: "POST",
            body: JSON.stringify(newTransaction),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((resJson) => {
                console.log("resJson", resJson);
                dispatch({
                    type: "CREATE_A_TRANSACTION",
                    transaction: {
                        type: event.target.type.value,
                        category: event.target.category.value,
                        amount: event.target.amount.value,
                        description: event.target.description.value,
                        date: event.target.date.value,
                        bankId: bankId,
                        transactionId: resJson._id
                    },
                });
                history.push(bankSummaryLink);
            })
            .catch((error) => console.error({ Error: error }));
    };

    return (
        <>
            <h1>Add A Transaction</h1>
            <Form onSubmit={handleCreate}>
                <Form.Group controlId="type" as={Form.Row}>
                    <Form.Label column sm={1}>
                        Type
          </Form.Label>
                    <Col sm={3}>
                        <Form.Control as="select">
                            <option value="income">Income</option>
                            <option value="expense">Expense</option>
                        </Form.Control>
                    </Col>
                </Form.Group>
                {/* 
                <Form.Group controlId="category" as={Form.Row}>
                    <Form.Label column sm={1} >Category</Form.Label>
                    <Col sm={3}>
                        <Form.Control as="select"  >
                            <optgroup label="Income">
                                <option value="salary">Salary</option>
                                <option value="others">Other</option>
                            </optgroup>
                            <optgroup label="Expense">
                                <option value="food">Food</option>
                                <option value="entertainment">Entertainment</option>
                                <option value="transportation">Transportation</option>
                                <option value="groceries">Groceries</option>
                                <option value="housing">Housing</option>
                                <option value="clothing">Clothing</option>
                                <option value="utilities">Utilities</option>
                                <option value="health">Health</option>
                                <option value="education">Education</option>
                                <option value="insurance">Insurance</option>
                                <option value="investments">Investments</option>
                                <option value="others">Others</option>
                            </optgroup>
                        </Form.Control >
                    </Col>
                </Form.Group> */}

                <Form.Group controlId="category" as={Form.Row}>
                    <Form.Label column sm={1}>
                        Category
          </Form.Label>
                    <Col sm={3}>
                        <Form.Control as="select">
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

                <Form.Group controlId="date" as={Form.Row}>
                    <Form.Label column sm={1}>
                        Date
          </Form.Label>
                    <Col sm={3}>
                        <Form.Control name="date" placeholder="Date of Transaction" />
                    </Col>
                </Form.Group>

                <Form.Group controlId="amount" as={Form.Row}>
                    <Form.Label column sm={1}>
                        Amount:
          </Form.Label>
                    <Col sm={3}>
                        <Form.Control name="amount" placeholder="Amount" />
                    </Col>
                </Form.Group>

                <Form.Group controlId="description" as={Form.Row}>
                    <Form.Label column sm={1}>
                        Description
          </Form.Label>
                    <Col sm={3}>
                        <Form.Control name="description" placeholder="Description" />
                    </Col>
                </Form.Group>

                <Button type="submit" size="md">
                    Create
        </Button>
            </Form>
        </>
    );
};

export default NewTransaction;