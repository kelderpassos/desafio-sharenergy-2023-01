import { UserFromDB } from '../types/userTypes';

const numbersOnly = /^[0-9]+$/;

export const validateInputs = (values: UserFromDB) => {
	if (!values.name) return;

	const validations = 
  values.name.length > 2 &&
  values.email.length > 2 &&
	values.address.length > 2 &&
	values.phoneNumber.length === 11 && 
	values.cpf.length === 11 &&
	numbersOnly.test(values.phoneNumber) &&
	numbersOnly.test(values.cpf);
  
	if (validations) return true;
};

export const invalidNumberInputs = (values: UserFromDB) => {
	return numbersOnly.test(values.phoneNumber) && numbersOnly.test(values.cpf);
};

export const invalidInputsLengths = (values: UserFromDB) => {
	if (!values.name) return;

	console.log(values.name.length,
		values.email.length,
		values.address.length,
		values.phoneNumber.length, 
		values.cpf.length);
  
	return values.name.length > 2 &&
  values.email.length > 2 &&
	values.address.length > 2 &&
	values.phoneNumber.length === 11 && 
	values.cpf.length === 11;
};