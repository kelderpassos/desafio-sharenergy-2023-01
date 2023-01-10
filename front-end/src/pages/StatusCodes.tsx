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
			<main className='flex flex-col items-center justify-center mt-[3rem]'>
				<label htmlFor="codes">
					<input type="text" id="codes" placeholder='type a code here' onChange={ handleInput }
						className="p-[0.5rem] placeholder-gray-700 rounded-md border border-slate-300 mb-3"
					/>
				</label>
				<div className='flex flex-col items-center justify-center w-full'>
					<p className='text-lg mb-2 ml-4 text-center'>Note: not every code has an image. Those who don&apos;t will return 404</p>
					<img src={`https://http.cat/${code}`} alt=""
						className='w-[40rem] h-[30rem] pl-5'
					/>
				</div>
			</main>
		</div>
	);
};