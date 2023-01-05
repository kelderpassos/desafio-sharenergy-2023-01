import React, { useEffect, useState } from 'react';
import { fetchDogs } from '../helpers/api';
import { Header } from '../components/Header';
import { Loading } from '../components/Loading';
import { getRememberMe } from '../helpers/login';
import { useNavigate } from 'react-router-dom';

export const Dogs = () => {
	const [dogImage, setDogimage] = useState<string | undefined>('');
	const [loading, setLoading] = useState<boolean>(true);
	const [refresh, setRefresh] = useState<number>();
	const navigate = useNavigate();

	const getDogsImage = async (): Promise<void> => {
		const image = await fetchDogs();    
		setDogimage(image);
		setLoading(false);
	};
    
	useEffect(() => {
		const logged = getRememberMe('remember-me');
		if (!logged) navigate('/');
		
		getDogsImage();
	}, [refresh]);

	const refreshPage = () => {
		setRefresh(Math.random());
	};

	return (
		<div>
			<Header />
			<main>
				<button type="button" onClick={refreshPage}>Get a new doggie</button>
				{loading ? <Loading page={'dogs'}/> : <img src={dogImage} alt='random dog image'/>}
			</main>
		</div>
	);
};