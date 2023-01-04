import React, { useEffect, useState } from 'react';
import { fetchDogs } from '../helpers/api';
import { Header } from '../components/Header';
import { Loading } from '../components/Loading';

export const Dogs = () => {
	const [dogImage, setDogimage] = useState<string | undefined>('');
	const [loading, setLoading] = useState<boolean>(true);

	const getDogs = async () => {
		const image = await fetchDogs();    
		setDogimage(image);
		setLoading(false);
	};
    
	useEffect(() => {
		getDogs();
	}, []);

	return (
		<div>
			<Header />
			<main>
				{loading ? <Loading page={'dogs'}/> : <img src={dogImage} alt='random dog image'/>}
			</main>
		</div>
	);
};