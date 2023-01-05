export const validCredentials = (username: string, password: string) => {
	return username === 'desafiosharenergy' && password === 'sh@r3n3rgy';
};

export const setRememberMe = (key: string, value: string, timelimit: number) => {
	const createNewKey = new Date();
	const obj = { value, expiry: createNewKey.getTime() + (timelimit * 1000) };
	localStorage.setItem(key, JSON.stringify(obj));
};

export const getRememberMe = (key: string) => {
	const itemFromLocalStorage = localStorage.getItem(key); 
	if (!itemFromLocalStorage) return null;

	const rememberMe = JSON.parse(itemFromLocalStorage);
	const actualTime = new Date();

	if (actualTime.getTime() > rememberMe.expiry) {
		localStorage.removeItem(key);
		return null;
	}

	return rememberMe.value;
};