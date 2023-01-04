import React, { ChangeEventHandler, useState } from 'react';
import { Header } from '../components/Header';

export const StatusCodes = () => {
	const [code, setCode] = useState<string>('');

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