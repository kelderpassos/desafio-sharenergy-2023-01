import axios from 'axios';
import { RandomUserType } from '../types/randomUser';

export const fetchRandomUser = async () => {
	try {
		const { data: { results } } = await axios.get('https://randomuser.me/api/?results=100');

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
