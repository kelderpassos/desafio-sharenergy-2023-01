import React, { ChangeEventHandler, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { RandomUserCard } from '../components/RandomUserCard';
import { fetchRandomUser } from '../helpers/api';
import { getRememberMe } from '../helpers/login';
import { RandomUserType } from '../types/userTypes';

export const RandomUser = () => {
	const [search, setSearch] = useState<string>('');
	const [filter, setFilter] = useState<string>('');
	const [randomUsers, setRandomUsers] = useState<RandomUserType[]>([]);
	const [filteredRandomUsers, setFilteredRandomUsers] = useState<RandomUserType[]>([]);
	const navigate = useNavigate();

	const getRandomUser = async (): Promise<void> => {
		const data = await fetchRandomUser();		
		setRandomUsers(data);
	};
	
	useEffect(() => {
		const logged = getRememberMe('remember-me');
		if (!logged) navigate('/');
		getRandomUser();
	}, []);
	
	return (
		<div>
			<Header />
			<main>
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