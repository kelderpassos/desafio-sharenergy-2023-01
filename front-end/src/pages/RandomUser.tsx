import React, { ChangeEventHandler, useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { RandomUserCard } from '../components/RandomUserCard';
import { fetchRandomUser } from '../helpers/api';
import { RandomUserType } from '../types/randomUser';

export const RandomUser = () => {
	const [search, setSearch] = useState<string>('');
	const [randomUser, setRandomUser] = useState({} as RandomUserType);

	const getRandomUser = async (): Promise<void> => {
		const randomUserData = await fetchRandomUser() as RandomUserType;		
		setRandomUser(randomUserData);
	};
	
	useEffect(() => {		
		getRandomUser();
	}, []);
	
	const handleInput: ChangeEventHandler<HTMLInputElement> = ({ target: { value } }) => {
		setSearch(value);
	};

	return (
		<div>
			<Header />
			<main>
				<label htmlFor="random-user">
					<input type="text" id="random-user" placeholder='search user by name, email or username' onChange={ handleInput }/>
				</label>
				<div>
					<RandomUserCard 
						seed={randomUser.seed}
						picture={randomUser.picture}
						name={randomUser.name}
						email={randomUser.email}
						login={randomUser.login}
						dob={randomUser.dob}
					/>
				</div>
			</main>
		</div>
	);
};