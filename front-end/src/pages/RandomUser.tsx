import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { RandomUserCard } from '../components/RandomUserCard';
import { fetchRandomUserByPage, fetchRandomUser } from '../helpers/api';
import { getRememberMe } from '../helpers/login';
import { RandomUserType } from '../types/userTypes';

export const RandomUser = () => {
	const [randomUsers, setRandomUsers] = useState<RandomUserType[]>([]);
	const navigate = useNavigate();

	const getRandomUser = async (): Promise<void> => {
		const data = await fetchRandomUser();		
		setRandomUsers(data);
	};
	
	useEffect(() => {
		const logged = getRememberMe('remember-me');
		if (!logged) navigate('/');
		getRandomUser();
	}, []);


	const handlePageClick = async (data: Record<string, number>) => {
		const currentPage = data.selected + 1;

		const usersByPage = await fetchRandomUserByPage(currentPage);
		setRandomUsers(usersByPage);
	};
	
	return (
		<div>
			<Header />
			<main className='mt-[5rem] flex flex-col justify-center items-center'>
				<div className='flex items-center justify-center 
				w-full'>
					{randomUsers.map(({ picture, name, email, login, dob }: RandomUserType, i) => (
						<div key={i}>
							<RandomUserCard								
								picture={picture}
								name={name}
								email={email}
								login={login}
								dob={dob}
							/>
						</div>
					))}					
				</div>
				<div className='flex items-center justify-center mt-3'>
					<ReactPaginate 
						previousLabel={'<<'}
						nextLabel={'>>'}
						breakLabel={'...'}
						pageCount={10}
						marginPagesDisplayed={2}
						onPageChange={handlePageClick}
						containerClassName={'flex w-[13rem] justify-center items-center mb-[2rem]'}
						pageClassName={'border border-slate-300 mx-1 p-3 bg-[#17a2b8] text-white'}
						pageLinkClassName={'text-white font-semibold text-[18px] '}
						previousClassName={'flex items-center mr-2 text-xl'}
						previousLinkClassName={''}
						nextClassName={'flex items-center ml-2 text-xl'}
						activeClassName={'active'}
					/>
				</div>
			</main>
		</div>
	);
};