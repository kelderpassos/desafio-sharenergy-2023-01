import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
	return (
		<header>
			<p>Sharenergy Challenge</p>
			<section>
				<NavLink to={'/dogs'}>Dogs</NavLink>
				<NavLink to={'/codes'}>HTML Status Codes</NavLink>
				<NavLink to={'/users'}>Users</NavLink>
			</section>
		</header>
	);
};


