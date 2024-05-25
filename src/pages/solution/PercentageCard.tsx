import React from 'react';

function PercentageCard({ number, text, className }: any) {
	return (
		<div
			className={`${className} rounded-3xl h-44 flex items-center justify-between px-10`}
		>
			<p className='font-medium clash-font text-7xl'>{number}%</p>
			<p className='font-thin text-grayText'>{text}</p>
		</div>
	);
}

export default PercentageCard;
