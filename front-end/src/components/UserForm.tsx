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
		<form onSubmit={onSubmit}>
			<label htmlFor="Name">Name</label>
			<input 
				name="name"
				type="text"
				placeholder="Insert a new name"
				value={input.name}
				onChange={onInputChange}
			/>
			
			<label htmlFor="password">Email</label>
			<input 
				name="email" 
				type="text" 
				placeholder="Insert a new email" 
				value={input.email} 
				onChange={onInputChange}
			/>
			
			<label htmlFor="password">Phone Number</label>
			<input 
				name="phoneNumber" 
				type="text" 
				placeholder="Insert a new password" 
				value={input.phoneNumber} 
				onChange={onInputChange}
			/>
			<label htmlFor="password">Address</label>
			<input 
				name="address" 
				type="text" 
				placeholder="Insert a new address" 
				value={input.address} 
				onChange={onInputChange}
			/>
			<label htmlFor="password">CPF</label>
			<input 
				name="cpf" 
				type="text" 
				placeholder="Insert a new cpf" 
				value={input.cpf} 
				onChange={onInputChange}
			/>
			<button name="createUser" type="submit" disabled={isDisabled}>{ create ? 'Create' : 'Update' }</button>
		</form>
	);
};