import React from 'react'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/esm/Col';
import Form from 'react-bootstrap/Form'
import { useStateValue } from "./StateProvider";


const EditTransaction = () => {

    // const editedTransaction = 

    const handleEdit = (event) => {
        event.preventDefault();
        console.log("edited");
    }

    return (
        <>
            <h1>Edit A Transaction</h1>
            <Form onSubmit={handleEdit}>
                <Form.Group controlId="type" as={Form.Row}>
                    <Form.Label column sm={1} >Type</Form.Label>
                    <Col sm={3}>
                        <Form.Control as="select"  >
                            <option value="income">Income</option>
                            <option value="expense">Expense</option>
                        </Form.Control >
                    </Col>
                </Form.Group>

                <Form.Group controlId="category" as={Form.Row}>
                    <Form.Label column sm={1} >Category</Form.Label>
                    <Col sm={3}>
                        <Form.Control as="select"  >
                            <option value="income">Income</option>
                            <option value="expense">Expense</option>
                        </Form.Control >
                    </Col>
                </Form.Group>

                <Form.Group controlId="date" as={Form.Row}>
                    <Form.Label column sm={1} >Date</Form.Label>
                    <Col sm={3}>
                        <Form.Control name="date" placeholder="Date of Transaction" />
                    </Col>
                </Form.Group>

                <Form.Group controlId="amount" as={Form.Row}>
                    <Form.Label column sm={1} >Amount:</Form.Label>
                    <Col sm={3}>
                        <Form.Control name="amount" placeholder="Amount" />
                    </Col>
                </Form.Group>

                <Form.Group controlId="description" as={Form.Row}>
                    <Form.Label column sm={1} >Description</Form.Label>
                    <Col sm={3}>
                        <Form.Control name="description" placeholder="Amount" />
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