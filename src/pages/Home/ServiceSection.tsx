import React from 'react';
import HeadingText from '../../components/shared/HeadingText';
import ServiceCard from './shared/ServiceCard';

const data = [
	{
		title: 'Remote Team Building',
		img: 'https://m.economictimes.com/thumb/msid-95779647,width-2123,height-1413,resizemode-4,imgsize-238776/digital-transformation-istock.jpg',
		desc: '',
	},
	{
		title: 'Project management',
		img: 'https://m.economictimes.com/thumb/msid-95779647,width-2123,height-1413,resizemode-4,imgsize-238776/digital-transformation-istock.jpg',
		desc: '',
	},
	{
		title: 'Product development',
		img: 'https://m.economictimes.com/thumb/msid-95779647,width-2123,height-1413,resizemode-4,imgsize-238776/digital-transformation-istock.jpg',
		desc: '',
	},
	{
		title: 'RND',
		img: 'https://m.economictimes.com/thumb/msid-95779647,width-2123,height-1413,resizemode-4,imgsize-238776/digital-transformation-istock.jpg',
		desc: '',
	},
	{
		title: 'Business Operations',
		img: 'https://m.economictimes.com/thumb/msid-95779647,width-2123,height-1413,resizemode-4,imgsize-238776/digital-transformation-istock.jpg',
		desc: '',
	},
];

function ServiceSection() {
	return (
		<>
			<div className='mb-10 flex-area'>
				<HeadingText title='about us' />
				<p className='w-[40%] gray-text'>
					We have advanced skills & resources to create large-scale solutions as
					well as guide startups from idea to profit.
				</p>
			</div>

			{data.map((d: any, i: number) => (
				<ServiceCard {...d} key={i} />
			))}
		</>
	);
}

export default ServiceSection;
