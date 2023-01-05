import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { UserFromDbCard } from '../components/UserFromDbCard';
import { fetchUsersFromDatabase } from '../helpers/api';
import { getRememberMe } from '../helpers/login';
import { UserFromDB } from '../types/randomUser';

export const Users = () => {
	const[users, setUsers] = useState([]);
	const navigate = useNavigate();

	const getUserFromDB = async (): Promise<void> => {
		const data = await fetchUsersFromDatabase();		
		setUsers(data);
	};

	useEffect(() => {
		const logged = getRememberMe('remember-me');
		if (!logged) navigate('/');

		getUserFromDB();
	}, [users]);

	return (
		<div>
			<Header />
			<main>
				{users.map(({ name, email, phoneNumber, address, cpf }: UserFromDB, i) => (
					<div key={i}>
						<UserFromDbCard
							name={name}
							email={email}
							phoneNumber={phoneNumber}
							address={address}
							cpf={cpf}
						/>

					</div>

				))}
			</main>
		</div>
	);
};