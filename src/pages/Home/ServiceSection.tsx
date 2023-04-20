import React from 'react';
import HeadingText from '../../components/shared/HeadingText';
import ServiceCard from './shared/ServiceCard';

function ServiceSection() {
	return (
		<>
			<div className='flex-area'>
				<HeadingText title='about us' />
				<p className='w-[40%] gray-text'>
					We have advanced skills & resources to create large-scale solutions as
					well as guide startups from idea to profit.
				</p>
			</div>

			<ServiceCard />
		</>
	);
}

export default ServiceSection;
