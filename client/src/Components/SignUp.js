import { React, useState } from 'react'
import { useHistory } from 'react-router';
import { Link } from "react-router-dom"
import "../App.css";
import NavBar from "../Components/Navbar"
import { Form, Input, Button, PageHeader } from 'antd';

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

const SignUp = () => {
    const history = useHistory()

    const onFinish = (values) => {
        console.log('Success:', values);
        fetch("/users", {
            method: "POST",
            body: JSON.stringify(values),
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
                if (resJson.error) {
                    alert(resJson.msg)
                } else {
                    history.push("/welcome")
                }
            })
            .catch(error => console.error({ Error: error }))

    };

    return (
        <>
            <NavBar />
            <PageHeader title="Register New User" ></PageHeader>
            <Form
                {...layout}
                name="basic"
                onFinish={onFinish}
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
                        Submit
        </Button>
                </Form.Item>
            </Form>
            <div style={{ marginLeft: "24px", position: "relative" }}>
                Already have an account? <Link to="/welcome">Log In</Link>
            </div>
        </>
    )
}

export default SignUp;