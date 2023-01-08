import React from 'react';
import { UserFromDB } from '../types/userTypes';

export const UserCard = ({ email, phoneNumber, address, cpf }: UserFromDB) => {	
	return (
		<section className='border border-slate-300 rounded-lg flex flex-col items-center justify-center m-5 px-4'>
			<h4 className='font-medium text-lg mt-2'>E-mail:</h4>
			<p>{`${email}`}</p>
			<h4 className='font-medium text-lg mt-2'>Phone Number:</h4>
			<p>{`${phoneNumber}`}</p>
			<h4 className='font-medium text-lg mt-2'>Address:</h4>
			<p>{`${address}`}</p>
			<h4 className='font-medium text-lg mt-2'>CPF:</h4>
			<p>{`${cpf}`}</p>
		</section>
	);
};