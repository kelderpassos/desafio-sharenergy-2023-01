import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { UserForm } from '../components/UserForm';
import { UserCard } from '../components/UserCard';
import { deleteUser, fetchUsersFromDatabase } from '../helpers/api';
import { getRememberMe } from '../helpers/login';
import { UserFromDB } from '../types/userTypes';

export const Users = () => {
	const[users, setUsers] = useState([]);
	const[userId, setUserId] = useState<string | undefined>('');
	const[create, setCreate] = useState(false);
	const[update, setUpdate] = useState(false);
	const[deleted, setDeleted] = useState(false);
	const navigate = useNavigate();

	const getUserFromDB = async (): Promise<void> => {
		const data = await fetchUsersFromDatabase();		
		setUsers(data);
	};

	useEffect(() => {
		getUserFromDB();
		const logged = getRememberMe('remember-me');
		if (!logged) navigate('/');

	}, [users]);

	const onClickSeeInfo = (_id: string | undefined) => {
		setUserId(_id);
	};

	const renderCard = ({ _id, email, phoneNumber, address, cpf }: UserFromDB) => {
		if (userId === _id) {
			return (
				<UserCard
					email={email}
					phoneNumber={phoneNumber}
					address={address}
					cpf={cpf}
				/>
			);
		}
	};

	const onClickUpdateUser = () => {
		if (update) {
			setUpdate(false);
		} else {
			setUpdate(true);
		}		
	};

	const onClickCreateNewUser = () => {		
		if (create) {
			setCreate(false);
		} else {
			setCreate(true);
		}
	};

	const onClickDeleteButton = async (id: string | undefined) => {
		const status = await deleteUser(id);

		if (status) setDeleted(true);		
	};

	return (
		<div>
			<Header />
			<main>
				<button onClick={onClickCreateNewUser}>Create new user</button>
				{users.map(({ name, email, phoneNumber, address, cpf, _id }: UserFromDB, i) => (
					<div key={i}>
						<h3>{`Name: ${name}`}</h3>
						{renderCard({ email, phoneNumber, address, cpf, _id })}
						<button onClick={() => onClickSeeInfo(_id)}>See info</button>
						<button onClick={() => onClickUpdateUser()}>Update info</button>
						<button onClick={() => onClickDeleteButton(_id)}>Delete user</button>					
					</div>
				))}
				{deleted? 'User deleted from database sucessfully' : ''}
				{create ? <UserForm create={true} /> : ''}
				{update ? <UserForm update={true} _id={userId} /> : ''}
			</main>
		</div>
	);
};