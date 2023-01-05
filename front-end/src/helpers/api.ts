import axios from 'axios';

export const fetchRandomUser = async () => {
	try {
		const { data: { results, info: { seed } } } = await axios.get('https://randomuser.me/api/');
		return { results, seed };
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
