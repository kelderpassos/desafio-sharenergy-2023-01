import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Dogs } from './pages/Dogs';
import { Login } from './pages/Login';
import { RandomUser } from './pages/RandomUser';
import { StatusCodes } from './pages/StatusCodes';
import { Users } from './pages/Users';

export const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Login />}/>
			<Route path='/random' element={<RandomUser />}/>
			<Route path='/codes' element={<StatusCodes />}/>
			<Route path='/dogs' element={<Dogs />}/>
			<Route path='/users' element={<Users />}/>
		</Routes>
	);
};