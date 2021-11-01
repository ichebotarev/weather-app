import React, { useState } from "react";
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import PropTypes from "prop-types";

async function loginUser(credentials) {
	return fetch("http://localhost:8080/login", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(credentials),
	}).then((data) => data.json());
}

const Login = ({ setToken }) => {
	const [username, setUserName] = useState();
	const [password, setPassword] = useState();
	const handleSubmit = async (e) => {
		e.preventDefault();
		const token = await loginUser({
			username,
			password,
		});
		setToken(token);
	};
	return (
		<div>
			<div className="login-wrapper">
				<h1>Please Log In</h1>
				<form onSubmit={handleSubmit}>
					<label>
						<p>Username</p>
						<input type="text" onChange={(e) => setUserName(e.target.value)} />
					</label>
					<label>
						<p>Password</p>
						<input
							type="password"
							onChange={(e) => setPassword(e.target.value)}
						/>
					</label>
					<div>
						<Button color="primary" outline type="submit">
							Submit
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
};

Login.propTypes = {
	setToken: PropTypes.func.isRequired,
};

export default Login;
