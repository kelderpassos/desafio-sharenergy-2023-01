import React, { ChangeEventHandler, useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { RandomUserCard } from '../components/RandomUserCard';
import { fetchRandomUser } from '../helpers/api';

type RandomUser = {
	results: [],
	seed: string
}

export const RandomUser = () => {
	const [search, setSearch] = useState<string>('');
	const [randomUsers, setRandomUsers] = useState({});

	const getRandomUser = async (): Promise<void> => {
		const usersList = await fetchRandomUser() as RandomUser;
		setRandomUsers(usersList);
	};

	useEffect(() => {		
		getRandomUser();
	}, []);

	const handleInput: ChangeEventHandler<HTMLInputElement> = ({ target: { value } }) => {
		setSearch(value);
	};

	console.log(randomUsers);
	

	return (
		<div>
			<Header />
			<main>
				<label htmlFor="random-user">
					<input type="text" id="random-user" placeholder='search user by name, email or username' onChange={ handleInput }/>
				</label>
				<div>
			
				</div>
			</main>
		</div>
	);
};