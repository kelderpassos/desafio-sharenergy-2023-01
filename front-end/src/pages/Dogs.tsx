import React, { useEffect, useState } from 'react';
import { fetchDogs } from '../helpers/api';

export const Dogs = () => {
	const [dogImage, setDogimage] = useState<string | undefined>('');

	const getDogs = async () => {
		const image = await fetchDogs();    
		setDogimage(image);
	};
    
	useEffect(() => {
		getDogs();
	}, []);

	return (
		<div>
			<main>
				<img src={dogImage} alt='random dog image'/>
			</main>
		</div>
	);
};