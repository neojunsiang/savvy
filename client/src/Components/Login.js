import React from 'react'

const Login = () => {

    const handleLogin = (event) => {
        event.preventDefault();
        const username = event.target.username.value;
        const password = event.target.password.value;
        const user = { username, password }; // {username: event.target.username.value, password: event.target.password.value }
        console.log(user);
    }

    return (
        <>
            <h1>Welcome to Login</h1>
            <form onSubmit={handleLogin}>
                Username: <input type="text" name="username" placeholder="enter your username" />
                Password: <input type="text" name="password" placeholder="enter your password" />
                <input type="submit" value="Login" />
            </form>
            <br />
            <a href="/signup"><button>Getting Started</button></a>
            <br />
            <a href="/demo">Not sure how it works? Click here for demo</a>
        </>
    )
}

export default Login