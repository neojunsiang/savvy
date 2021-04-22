import React from 'react'
// import Button from 'react-bootstrap/Button'
// import Col from 'react-bootstrap/esm/Col';
// import Form from 'react-bootstrap/Form'
import NavBar from "../Components/Navbar"
import { Link } from "react-router-dom";
import { useHistory } from 'react-router';
import { useStateValue } from "./StateProvider";

import { Form, Input, Button, PageHeader, } from 'antd';
import { UserAddOutlined } from '@ant-design/icons';

const layout = {
    labelCol: {
        span: 2,
    },
    wrapperCol: {
        span: 5,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 2,
        span: 5,
    },
};


const Login = ({ setUser }) => {
    const [{ loginUser }, dispatch] = useStateValue();

    const history = useHistory();

    const handleLogin = (values) => {
        // event.preventDefault();
        // const username = event.target.username.value;
        // const password = event.target.password.value;
        // const user = { username, password }; // {username: event.target.username.value, password: event.target.password.value }
        // console.log(user);
        console.log('Success:', values);
        fetch("/sessions", {
            method: "POST",
            body: JSON.stringify(values),
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then(res => res.json())
            .then(resJson => {
                console.log("resJson", resJson)
                console.log("resJson id ", resJson._id)
                if (resJson._id) {
                    setUser(values);
                    dispatch({
                        type: "UPON_USER_LOGIN",
                        user: resJson.username,
                    });
                    history.push("/main");
                }
            })
            .catch(error => console.error({ Error: error }))
    }

    return (
        <>
            {/* <h1>Welcome to Login</h1>
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
            <Link to="/signup"><Button variant="primary" size="sm">Getting Started</Button></Link>
            <br />
            <a href="/demo">Not sure how it works? Click here for demo</a> */}
            <NavBar />
            <PageHeader title="Login" />
            <div>
                <Form
                    {...layout}
                    name="basic"
                    onFinish={handleLogin}
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Login
        </Button>
                    </Form.Item>
                </Form>
            </div>
            <div style={{ marginLeft: "24px", position: "relative" }}>
                <Link to="/signup" ><Button variant="primary" size="sm" icon={<UserAddOutlined />}>Getting Started?</Button></Link>
            </div>
            <br />
            <div style={{ marginLeft: "24px", position: "relative" }}>
                <Link to="/demo">Not sure how it works? Click here for demo</Link>
            </div>

        </>
    )
}

export default Login