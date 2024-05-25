import React from 'react';

function HeadingText({ title, className }: any) {
	return <h1 className={`${className} sub-main-text clash-font`}>{title}</h1>;
}

export default HeadingText;
