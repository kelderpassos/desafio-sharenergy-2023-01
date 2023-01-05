import React, { ChangeEventHandler, useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { RandomUserCard } from '../components/RandomUserCard';
import { fetchRandomUser } from '../helpers/api';
import { RandomUserType } from '../types/randomUser';

export const RandomUser = () => {
	const [search, setSearch] = useState<string>('');
	const [filter, setFilter] = useState<string>('');
	const [randomUsers, setRandomUsers] = useState<RandomUserType[]>([]);
	const [filteredRandomUsers, setFilteredRandomUsers] = useState<RandomUserType[]>([]);

	const getRandomUser = async (): Promise<void> => {
		const data = await fetchRandomUser();		
		setRandomUsers(data);
	};
	
	useEffect(() => {		
		getRandomUser();
	}, []);
	
	// const handleInput: ChangeEventHandler<HTMLInputElement> = ({ target: { value } }) => {		
	// 	setSearch(value);

	// 	console.log(search);
	// };

	// const handleFilters: ChangeEventHandler<HTMLInputElement> = ({ target: { id } }) => {
	// 	setFilter(id);
	// };

	
	// const handleButton = () => {
	// 	let filteredUser: RandomUserType[];
	// 	switch (filter) {
	// 	case 'name':
	// 		filteredUser = randomUsers.filter((users) => users.name.first === filter || users.name.last === filter);
	// 		console.log('name', filteredUser);
			
	// 		break;
	// 	case 'email':
	// 		filteredUser = randomUsers.filter((users) => users.email === filter);
	// 		console.log('email', filteredUser);
	// 		break;
	// 	default:
	// 		filteredUser = randomUsers.filter((users) => users.login === filter);
	// 		console.log('username', filteredUser);
	// 		break;
	// 	}

	// 	setFilteredRandomUsers(filteredUser);
	// };

	return (
		<div>
			<Header />
			<main>
				{/* <label htmlFor="random-user">
					<input type="text" id="random-user" placeholder='search user by name, email or username' onChange={ handleInput }/>
				</label>
				<label htmlFor="name">Name
					<input type="radio" name="" id="name" value={filter} onChange={handleFilters} />
				</label>
				<label htmlFor="email">Email
					<input type="radio" id="email" value={filter} onChange={handleFilters} />
				</label>
				<label htmlFor="username">Username
					<input type="radio" name="" id="username" value={filter} onChange={handleFilters} />
				</label>
				<button type="submit" onClick={handleButton}>Search</button> */}
				<div>
					{randomUsers.map(({ picture, name, email, login, dob }: RandomUserType, i) => (
						<div key={i}>
							<RandomUserCard								
								picture={picture}
								name={name}
								email={email}
								login={login}
								dob={dob}
							/>
						</div>
					))}
				</div>
			</main>
		</div>
	);
};