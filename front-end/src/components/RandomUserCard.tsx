import React from 'react';
import { RandomUserType } from '../types/randomUser';

export const RandomUserCard = ({ picture, name, email, login, dob, seed }: RandomUserType) => {
	return (
		<section key={seed}>
			<img src={picture.large} alt="" />
			<h2>{`${name.first + ' ' + name.last}`}</h2>
			<h3>{email}</h3>
			<h3>{login.username}</h3>
			<p>{dob.age}</p>
		</section>
	);
};