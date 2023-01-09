import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
import { RandomUserProvider } from './context/randomUsersProvider';

export const App = () => {
	return (
		<BrowserRouter>
			<RandomUserProvider>
				<Router />
			</RandomUserProvider>
		</BrowserRouter>
	);
};