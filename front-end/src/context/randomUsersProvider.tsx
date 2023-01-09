/* eslint-disable @typescript-eslint/no-empty-function */
import React, { FC, PropsWithChildren, useEffect, useState } from 'react';
import { fetchRandomUser } from '../helpers/api';
import { RandomUserType } from '../types/userTypes';
import { RandomUserContext } from './randomUserContext';

export const RandomUserProvider: FC<PropsWithChildren> = ({ children }) => {
	const [randomUsers, setRandomUsers] = useState<RandomUserType[]>([]);

	const getRandomUser = async (): Promise<void> => {
		const data = await fetchRandomUser();		
		setRandomUsers(data);
	};
  
	useEffect(() => {
		getRandomUser();
	}, []);

	return (
		<RandomUserContext.Provider
			value={{ randomUsers, setRandomUsers }}
		>
			{children}
		</RandomUserContext.Provider>
	);
};
