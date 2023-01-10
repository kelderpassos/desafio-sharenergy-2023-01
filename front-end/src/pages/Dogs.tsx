import React, { useEffect, useState } from 'react';
import { fetchDogs } from '../helpers/api';
import { Header } from '../components/Header';
export const Dogs = () => {
	const [dogImage, setDogimage] = useState<string | undefined>('');
	const [loading, setLoading] = useState<boolean>(true);
	const [refresh, setRefresh] = useState<number>();

	const getDogsImage = async (): Promise<void> => {
		const image = await fetchDogs();    
		setDogimage(image);
		setLoading(false);
	};
    
	useEffect(() => {	
		getDogsImage();
	}, [refresh]);

	const refreshPage = () => {
		setRefresh(Math.random());
	};

	return (
		<div>
			<Header />
			<main>
				<div className='flex flex-col items-center justify-center'>
					<button
						type="button"
						onClick={refreshPage}
						className='
						font-normal text-lg text-white tracking-wide 
						bg-[#17a2b8]
						hover:bg-[#0d7686] disabled:opacity-50 
						rounded-md p-1 w-44 my-5'
					>Get a new doggie</button>
					{loading ? ''
						: <img src={dogImage} alt='random dog image'
							className='w-[30rem] h-[30rem] pl-5 flex items-center justify-center text-2xl'/>}
				</div>
			</main>
		</div>
	);
};