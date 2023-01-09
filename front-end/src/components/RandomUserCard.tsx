import React from 'react';
import { RandomUserType } from '../types/userTypes';

export const RandomUserCard = ({ picture, name, email, login, dob }: RandomUserType) => {	
	
	return (
		<section className='border border-slate-300 rounded-lg flex flex-col items-center justify-center m-5 px-4 w-[25rem]'>
			<img src={picture.large} alt="users' thumbnails" className='mt-2' />
			<h4 className='font-medium text-lg mt-2'>Name:</h4>
			<p>{`${name.first + ' ' + name.last}`}</p>
			<h4 className='font-medium text-lg mt-2'>E-mail:</h4>
			<p>{email}</p>
			<h4 className='font-medium text-lg mt-2'>Username:</h4>
			<p>{login.username}</p>
			<h4 className='font-medium text-lg mt-2'>Age:</h4>
			<p className='mb-2' >{dob.age}</p>
		</section>
	);
};