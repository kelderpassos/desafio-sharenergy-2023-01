import React from 'react';

export const RandomUserCard = ({ picture, name, email, login, dob, seed }) => {
	return (
		<section key={seed}>
			<img src={picture.thumbnail} alt="" />
			<h2>{`${name.first + '' + name.last}`}</h2>
			<h3>{email}</h3>
			<h3>{login.username}</h3>
			<p>{dob.age}</p>
		</section>
	);
};