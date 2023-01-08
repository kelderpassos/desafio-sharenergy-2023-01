import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo_color.png';

export const Header = () => {
	return (
		<header className='flex items-center justify-center	my-5'>
			<img src={logo} alt="sharenergy's logo" className='w-[20rem] pl-5' />
			{/* <h1 className='font-semibold text-3xl tracking-wide pl-5'>Sharenergy Challenge</h1> */}
			<section className="flex justify-around w-full">
				<NavLink to={'/random'} className='text-lg tracking-wide font-sans font-medium'>Random Users</NavLink>
				<NavLink to={'/dogs'} className='text-lg tracking-wide font-sans font-medium'>Dogs</NavLink>
				<NavLink to={'/codes'} className='text-lg tracking-wide font-sans font-medium'>HTML Status Codes</NavLink>
				<NavLink to={'/users'} className='text-lg tracking-wide font-sans font-medium'>Users</NavLink>
			</section>
		</header>
	);
};


