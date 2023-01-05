import React from 'react';
import { UserFromDB } from '../types/randomUser';

export const UserFromDbCard = ({ name, email, phoneNumber, address, cpf }: UserFromDB) => {	
	
	return (
		<section>
			<h3>{`Name: ${name}`}</h3>
			<p>{`Email: ${email}`}</p>
			<p>{`Phone Number: ${phoneNumber}`}</p>
			<p>{`Address: ${address}`}</p>
			<p>{`CPF: ${cpf}`}</p>
		</section>
	);
};