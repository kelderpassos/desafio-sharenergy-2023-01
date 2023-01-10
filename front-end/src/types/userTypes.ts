import { Dispatch, SetStateAction } from 'react';

export type RandomUserType = {
  picture: Record<string, string>,
  name: Record<string, string>,
  email: string,
  login: Record<string, string>,
  dob: Record<string, string>,
}

export type UserFromDB = {
  name?: string,
  email: string,
  phoneNumber: string,
  address: string,
  cpf: string,
  _id?: string,
}

export type RandomUserContextState = {
  randomUsers: RandomUserType[],
  setRandomUsers: Dispatch<SetStateAction<RandomUserType[]>>
}

export type UserFormProps = {
	update?: boolean,
	create?: boolean,
	_id?: string,
}