import React, { ChangeEventHandler, FormEventHandler, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getRememberMe, setRememberMe, validCredentials } from '../helpers/login';

export const Login = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [isDisabled, setIsDisabled] = useState(true);
	const [isChecked, setIsChecked] = useState(false);
	const [allowLogin, setAllowLogin] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		if (getRememberMe('remember-me')) navigate('/random');

		if (username.length > 5 && password.length > 5) {
			setIsDisabled(false);
		} else {
			setIsDisabled(true);
		}

		setAllowLogin(() => validCredentials(username, password));
	}, [username, password]);

	const handleInput: ChangeEventHandler<HTMLInputElement> = ({ target: { name, value } }) => {
		if (name === 'username') setUsername(value);
		if (name === 'password') setPassword(value);
	};

	const handleCheckbox: ChangeEventHandler<HTMLInputElement> = ({ target: { checked } }) => {
		setIsChecked(checked);
	};

	const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();
		if (isChecked) setRememberMe('remember-me', 'true', 300);
		if (allowLogin) navigate('/random');
	};

	return (
		<div>
			<section >
				<h1>Sharenergy</h1>
				<form onSubmit={handleSubmit}>
					<label htmlFor="username">
						<input 
							name="username"
							type="text"
							placeholder="Provide your username"
							value={username}
							onChange={handleInput}
						/>
					</label>
					<label htmlFor="password">
						<input 
							name="password" 
							type="password" 
							placeholder="Provide your password" 
							value={password} 
							onChange={handleInput}
						/>
					</label>
					<label htmlFor=""> Remember me
						<input 
							type="checkbox" 
							checked={isChecked} 
							name="remember-me"	
							onChange={handleCheckbox}	
						/>
					</label>
					<button name="login" type="submit" disabled={isDisabled}>Log in</button>
				</form>
			</section>
		</div>
	);
};