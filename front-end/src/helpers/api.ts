import axios from 'axios';
import { RandomUserType, UserFromDB } from '../types/userTypes';

export const fetchRandomUser = async () => {
	try {
		const { data: { results } } = await axios.get('https://randomuser.me/api/?results=120');

		return results.map(({ picture, name, email, login, dob }: RandomUserType) => ({
			picture: picture,
			name: name,
			email: email,
			login: login,
			dob: dob,
		}));
	} catch (error) {
		console.error(error);
	}
};

export const fetchRandomUserByPage = async (page: number) => {
	try {
		const { data: { results } } = await axios.get(`https://randomuser.me/api/?page=${page}&results=120&seed=abc`);

		return results.map(({ picture, name, email, login, dob }: RandomUserType) => ({
			picture: picture,
			name: name,
			email: email,
			login: login,
			dob: dob,
		}));
	} catch (error) {
		console.error(error);
	}
};

export const fetchDogs = async (): Promise<string | undefined> => {
	try {
		const { data } = await axios.get('https://random.dog/woof.json'); 
		return data.url;
	} catch (error) {
		console.error(error);
	}
};

export const fetchUsersFromDatabase = async () => {
	try {
		const { data } = await axios.get('http://localhost:3001/users/');		
		return data;
	} catch (error) {
		console.error(error);
	}
};

export const createNewUser = async (newUser: UserFromDB): Promise<number | undefined> => {
	try {
		const { status } = await axios.post('http://localhost:3001/users/', newUser);
		return status;
	} catch (error) {
		console.error(error);
	}
};

export const deleteUser = async (id: string | undefined) => {
	try {
		const { status } = await axios.delete(`http://localhost:3001/users/${id}`);
		return status;
	} catch (error) {
		console.error(error);
	}
};

export const updateUser = async (id: string | undefined, info: UserFromDB) => {
	try {
		const { status } = await axios.put(`http://localhost:3001/users/${id}`, info);
		return status;
	} catch (error) {
		console.error(error);
	}
};