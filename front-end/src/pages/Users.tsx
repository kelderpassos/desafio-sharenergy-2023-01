import React, { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import { UserForm } from '../components/UserForm';
import { UserCard } from '../components/UserCard';
import { deleteUser, fetchUsersFromDatabase } from '../helpers/api';
import { UserFromDB } from '../types/userTypes';

export const Users = () => {
	const [users, setUsers] = useState([]);
	const [userId, setUserId] = useState<string | undefined>('');
	const [renderInfo, setRenderInfo] = useState(false);
	const [create, setCreate] = useState(false);
	const [update, setUpdate] = useState(false);	

	const getUserFromDB = async (): Promise<void> => {
		const data = await fetchUsersFromDatabase();		
		setUsers(data);
	};

	useEffect(() => {
		getUserFromDB();
	}, []);

	const onClickRenderInfo = (_id: string | undefined) => {
		setUserId(_id);

		if (renderInfo) {
			setRenderInfo(false);
		} else {
			setRenderInfo(true);
		}
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
		await deleteUser(id);
		await getUserFromDB();
	};
		


	return (
		<div>
			<Header />
			<main className='flex flex-col items-center justify-center'>
				<button onClick={onClickCreateNewUser}
					className='
					font-normal text-lg text-white tracking-wide 
					bg-[#17a2b8]
					hover:bg-[#0d7686]
					rounded-md p-1 w-44 my-5'
				>Create new user</button>
				<div className='flex items-center justify-center flex-wrap'>
					{users.map(({ name, email, phoneNumber, address, cpf, _id }: UserFromDB, i) => (
						<div key={i} 
							className='flex flex-col items-center justify-center
								mx-3 my-2 border border-slate-300 rounded-lg w-[25rem]'>
							<h3 className='font-medium text-lg mt-2'>{`Name: ${name}`}</h3>
							<button onClick={() => onClickRenderInfo(_id)}
								className='
							font-normal text-lg text-white tracking-wide 
							bg-[#17a2b8]
							hover:bg-[#0d7686]
							rounded-md p-1 w-24 my-5'
							>See info</button>

							{renderInfo ? renderCard({ email, phoneNumber, address, cpf, _id }) : ''}
							<div className='my-5'>
								<button onClick={() => onClickUpdateUser()}
									className='
									font-normal text-lg text-white tracking-wide 
									bg-[#17a2b8]
									hover:bg-[#0d7686]
									rounded-md p-1 w-28 mr-5'
								>Update info</button>
								<button onClick={() => onClickDeleteButton(_id)}
									className='
									font-normal text-lg text-white tracking-wide 
									bg-[#17a2b8]
									hover:bg-[#0d7686]
									rounded-md p-1 w-28 ml-2'
								>Delete user</button>
							</div>				
						</div>
					))}
				</div>
				{create ? <UserForm create={true} /> : ''}
				{update ? <UserForm update={true} _id={userId} /> : ''}
			</main>
		</div>
	);
};