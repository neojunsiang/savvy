import React from 'react'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/esm/Col';
import Form from 'react-bootstrap/Form'
import { useHistory } from 'react-router';

const Login = ({ setUser }) => {

    const history = useHistory();

    const handleLogin = (event) => {
        event.preventDefault();
        const username = event.target.username.value;
        const password = event.target.password.value;
        const user = { username, password }; // {username: event.target.username.value, password: event.target.password.value }
        console.log(user);
        fetch("/sessions", {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then(res => res.json())
            .then(resJson => {
                console.log("resJson", resJson)
                console.log("resJson id ", resJson._id)
                if (resJson._id) {
                    setUser(user);
                    history.push("/main")
                }
            })
            .catch(error => console.error({ Error: error }))
    }

    return (
        <>
            <h1>Welcome to Login</h1>
            <Form onSubmit={handleLogin}>
                <Form.Group as={Form.Row} controlId="username">
                    <Form.Label column sm={1}>Username</Form.Label>
                    <Col sm={3}>
                        <Form.Control name="username" placeholder="enter your username" required />
                    </Col>
                </Form.Group>
                <Form.Group as={Form.Row} controlId="password">
                    <Form.Label column sm={1}>Password</Form.Label>
                    <Col sm={3}>
                        <Form.Control name="password" placeholder="enter your password" required />
                    </Col>
                </Form.Group>
                <Button type="submit" size="sm" >
                    Login
                </Button >
            </Form>
            <br />
            <Button variant="primary" href="/signup" size="sm">Getting Started</Button>
            <br />
            <a href="/demo">Not sure how it works? Click here for demo</a>
        </>
    )
}

export default Login