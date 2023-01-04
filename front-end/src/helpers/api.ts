import axios from 'axios';

export const getRandomUser = async () => {
	try {
		const { data } = await axios.get('https://randomuser.me/api/');
		return data;
	} catch (error) {
		console.error(error);
	}
};

export const getCats = async (code: string) => {
	try {
		const { data } = await axios.get(`https://http.cat/${code}`);
		return data;
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
