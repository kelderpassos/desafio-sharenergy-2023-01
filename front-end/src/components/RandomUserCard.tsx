import React from 'react';
import { RandomUserType } from '../types/userTypes';

export const RandomUserCard = ({ picture, name, email, login, dob }: RandomUserType) => {	
	
	return (
		<section>
			<img src={picture.large} alt="" />
			<h3>{`${name.first + ' ' + name.last}`}</h3>
			<p>{email}</p>
			<p>{login.username}</p>
			<p>{dob.age}</p>
		</section>
	);
};