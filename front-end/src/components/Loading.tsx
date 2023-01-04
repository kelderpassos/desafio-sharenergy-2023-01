import React, { FC } from 'react';

type LoadingProps = {
  page: string;
};

export const Loading: FC<LoadingProps> = ({ page }) => {
	return (
		<p>{`Loading ${page}`}</p>
	);
};


