import { React, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/esm/Col';
import Form from 'react-bootstrap/Form'
import { useHistory } from 'react-router';

const SignUp = () => {
    const history = useHistory()



    const handleSignUp = (event) => {
        event.preventDefault();
        const username = event.target.username.value;
        const password = event.target.password.value;
        const newUser = { username, password }; // {username: event.target.username.value, password: event.target.password.value }
        console.log("newUser", newUser);
        fetch("/users", {
            method: "POST",
            body: JSON.stringify(newUser),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(res => res.json())
            .then(resJson => {
                console.log("resJson", resJson);
                console.log("msg", resJson.msg);
                // setIsRegistered(!isRegistered);
                // setMessage(resJson);
                // console.log("state message", message);
                // console.log("state message", message.msg);
                // console.log("state message", message.status);
                // history.push("/welcome")
            })
            .catch(error => console.error({ Error: error }))
    }

    return (
        <>
            <h1>Register New User</h1>
            <Form onSubmit={handleSignUp}>
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
                    Register
                </Button >
            </Form>
            {/* {message.status ? message.msg : null}  */}
            {/* {message.status ? message.msg : null} */}
        </>
    )
}

export default SignUp;