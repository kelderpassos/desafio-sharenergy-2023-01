import React, { ChangeEventHandler, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { getRememberMe } from '../helpers/login';

export const StatusCodes = () => {
	const [code, setCode] = useState<string>('');
	const navigate = useNavigate();

	useEffect(() => {
		const logged = getRememberMe('remember-me');
		if (!logged) navigate('/');
	});

	const handleInput: ChangeEventHandler<HTMLInputElement> = ({ target: { value } }) => {
		setCode(value);
	};

	return (
		<div>
			<Header />
			<main>
				<label htmlFor="codes">
					<input type="text" id="codes" placeholder='type a code here' onChange={ handleInput }/>
				</label>
				<div>
					<p>Note: not every code has an image. Those who don&apos;t will return 404</p>
					<img src={`https://http.cat/${code}`} alt="" />
				</div>
			</main>
		</div>
	);
};