import React from 'react';

function AboutUsNumCard({ num, className, text }: any) {
	return (
		<div>
			<div
				className={`${className} rounded-3xl clash-font w-[264px] flex items-center justify-center font-medium text-4xl h-32`}
			>
				{num}
			</div>
			<p className='mt-4 text-xl text-center clash-font text-grayText'>
				{text}
			</p>
		</div>
	);
}

export default AboutUsNumCard;
