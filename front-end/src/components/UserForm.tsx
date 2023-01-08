import React, { ChangeEventHandler, useState, useEffect } from 'react';
import { createNewUser, updateUser } from '../helpers/api';
import { UserFromDB } from '../types/userTypes';

const initialState: UserFromDB = {
	name: '',
	email: '',
	phoneNumber: '',
	address: '',
	cpf: ''
};

type UserFormProps = {
	update?: boolean,
	create?: boolean,
	_id?: string,
}

export const UserForm = ({ create, update, _id }: UserFormProps) => {	
	const [input, setInput] = useState(initialState);
	const [isDisabled, setIsDisabled] =  useState(true);

	const enableButton = input.email.length > 2 &&
	input.address.length > 2 &&
	input.phoneNumber.length > 2 &&
	input.cpf.length > 2;

	useEffect(() => {
		if (enableButton) {
			setIsDisabled(false);
		} else {
			setIsDisabled(true);
		}		
	}, [input, isDisabled]);

	const onInputChange: ChangeEventHandler<HTMLInputElement> = ({ target: { name, value } }) => {
		setInput((prevState) => ({ ...prevState, [name]: value }));
	};

	const onSubmit: ChangeEventHandler<HTMLFormElement> = async (event) => {
		event.preventDefault();

		if (create) {
			await createNewUser(input);
		}
		if (update) {
			await updateUser(_id, input);
		}		
	};
	
	return (
		<form onSubmit={onSubmit} className='flex flex-col items-center justify-center my-7'>
			<div>
				<label className='ml-3' htmlFor="name">Name</label>
				<input 
					id='name'
					name="name"
					type="text"
					placeholder="Insert a new name"
					value={input.name}
					onChange={onInputChange}
					className="p-[0.5rem] placeholder-gray-700 rounded-md border border-slate-300 ml-3"
				/>
			
				<label className='ml-3' htmlFor="email">Email</label>
				<input
					id='email'
					name="email" 
					type="text" 
					placeholder="Insert a new email" 
					value={input.email} 
					onChange={onInputChange}
					className="p-[0.5rem] placeholder-gray-700 rounded-md border border-slate-300 ml-3 "
				/>
			
				<label className='ml-3' htmlFor="phoneNumber">Phone Number</label>
				<input
					id='phoneNumber'
					name="phoneNumber" 
					type="text" 
					placeholder="Insert a new password" 
					value={input.phoneNumber} 
					onChange={onInputChange}
					className="p-[0.5rem] placeholder-gray-700 rounded-md border border-slate-300 ml-3 "
				/>
				<label className='ml-3' htmlFor="address">Address</label>
				<input
					id='address'
					name="address" 
					type="text" 
					placeholder="Insert a new address" 
					value={input.address} 
					onChange={onInputChange}
					className="p-[0.5rem] placeholder-gray-700 rounded-md border border-slate-300 ml-3 "
				/>
				<label className='ml-3' htmlFor="cpf">CPF</label>
				<input
					id='cpf'
					name="cpf" 
					type="text" 
					placeholder="Insert a new cpf" 
					value={input.cpf} 
					onChange={onInputChange}
					className="p-[0.5rem] placeholder-gray-700 rounded-md border border-slate-300 ml-3 "
				/>
			</div>
			<div className='mt-7'>
				<button
					name="createUser"
					type="submit"
					disabled={isDisabled}
					className='
						font-normal text-lg text-white tracking-wide 
						bg-[#17a2b8]
						enabled:hover:bg-[#0d7686] disabled:opacity-50
						rounded-md p-1 w-28 ml-2'
				>{ create ? 'Create' : 'Update' }</button>
			</div>
		</form>
	);
};