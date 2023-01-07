import React from 'react';
import { UserFromDB } from '../types/userTypes';

export const UserCard = ({ email, phoneNumber, address, cpf }: UserFromDB) => {	
	return (
		<section>
			<p>{`Email: ${email}`}</p>
			<p>{`Phone Number: ${phoneNumber}`}</p>
			<p>{`Address: ${address}`}</p>
			<p>{`CPF: ${cpf}`}</p>
		</section>
	);
};