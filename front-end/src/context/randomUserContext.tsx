/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from 'react';
import { RandomUserContextState } from '../types/userTypes';

const contextDefaultValues: RandomUserContextState = {
	randomUsers: [],
	setRandomUsers: () => {}
};

export const RandomUserContext = createContext<RandomUserContextState>(contextDefaultValues);