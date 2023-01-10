import React, { useState, useContext ,ChangeEventHandler } from 'react';
import ReactPaginate from 'react-paginate';
import { Header } from '../components/Header';
import { RandomUserCard } from '../components/RandomUserCard';
import { RandomUserContext } from '../context/randomUserContext';
import { fetchRandomUserByPage } from '../helpers/api';
import { RandomUserType } from '../types/userTypes';

export const RandomUser = () => {
	const [searchParameter, setSearchParameter] = useState('');
	const [selectOption, setSelectOption] = useState('');
	const { randomUsers, setRandomUsers } = useContext(RandomUserContext);

	const handlePageClick = async (data: Record<string, number>) => {
		const currentPage = data.selected + 1;

		const usersByPage = await fetchRandomUserByPage(currentPage);
		setRandomUsers(usersByPage);
	};

	const onInputChange: ChangeEventHandler<HTMLInputElement> = ({ target: { value } }) => {
		setSearchParameter(value);
	};

	const onSelectOption: ChangeEventHandler<HTMLSelectElement> = ({ target: { value } }) => {
		setSelectOption(value);
	};

	const onClickSearchButton = () => {
		let filteredUser: RandomUserType[];
		switch (selectOption) {
		case 'name':
			filteredUser = randomUsers.filter(({ name }) => name.first === searchParameter || 
				name.last === searchParameter);
			setRandomUsers(filteredUser);
			break;
		case 'email':
			filteredUser = randomUsers.filter(({ email }) => email === searchParameter);
			setRandomUsers(filteredUser);
			break;
		case 'username':
			filteredUser = randomUsers.filter(({ login }) => login.username === searchParameter);
			setRandomUsers(filteredUser);
			break;
		default:
			break;
		}
		
	};
	
	return (
		<div>
			<Header />
			<main className='mt-[3rem] flex flex-col justify-center items-center'>
				<label htmlFor="">
					<input type="text"
						placeholder='Type a name, e-mail or username'
						value={searchParameter}
						onChange={onInputChange}
						className="p-[0.5rem] pr-5 mb-3 w-[17.1rem]
						placeholder-gray-700 rounded-md border border-slate-300"
					/>
				</label>
				<select name="searchOptions"
					onChange={onSelectOption}
					value={selectOption}
					className="p-[0.5rem] placeholder-gray-700 rounded-md border border-slate-300 mb-3">
					<option value="">Choose an option</option>
					<option value="name">Name</option>
					<option value="email">E-mail</option>
					<option value="username">Username</option>
				</select>
				<button
					type='button'
					onClick={onClickSearchButton}
					className='
						font-normal text-lg text-white tracking-wide 
						bg-[#17a2b8]
						hover:bg-[#0d7686]
						rounded-md p-1 w-28 ml-2'>Search</button>
				<div className='flex flex-wrap items-center justify-center w-[60rem] h-full'>
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