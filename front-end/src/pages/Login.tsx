import React, { ChangeEventHandler, FormEventHandler, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getRememberMe, setRememberMe, validCredentials } from '../helpers/login';
import logo from '../assets/logo_color.png';

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
			<section className='flex flex-col items-center justify-center mt-48 bg-white'>
				<img src={logo} alt="sharenergy's logo" className='w-[30rem] mb-5' />
				<form 
					className='w-[25rem] h-[15rem] mt-10
					flex flex-col items-center justify-center 
					rounded-[0.625rem] shadow-2xl shadow-slate-400'
					onSubmit={handleSubmit}>
					<label htmlFor="username">
						<input 
							name="username"
							type="text"
							placeholder="Enter your username"
							value={username}
							onChange={handleInput}
							className="p-[0.5rem] placeholder-gray-700 rounded-md border border-slate-300 mb-3"
						/>
					</label>
					<label htmlFor="password">
						<input 
							name="password" 
							type="password" 
							placeholder="Enter your password" 
							value={password} 
							onChange={handleInput}
							className="p-[0.5rem] placeholder-gray-700 rounded-md border border-slate-300 mb-3"
						/>
					</label>
					<label htmlFor="rememberMe" className='mr-4 tracking-wide'> Remember me
						<input 
							type="checkbox" 
							checked={isChecked} 
							id='rememberMe'
							name="remember-me"	
							onChange={handleCheckbox}	
							className='mb-4 ml-4'
						/>
					</label>
					<button 
						name="login"
						type="submit"
						disabled={isDisabled}
						className='
							font-normal text-lg text-white tracking-wide 
							bg-[#17a2b8]
							enabled:hover:bg-[#0d7686] disabled:opacity-50 
							rounded-md p-1 w-44'
					>Log in</button>
				</form>
			</section>
		</div>
	);
};