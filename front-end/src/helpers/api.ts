import axios from 'axios';

export const fetchRandomUser = async () => {
	try {
		const { data: { results, info: { seed } } } = await axios.get('https://randomuser.me/api/');
		const userData = {
			seed,
			picture: results[0].picture,
			name: results[0].name,
			email: results[0].email,
			login: results[0].login,
			dob: results[0].dob
		};
		
		return userData;
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
