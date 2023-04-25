import React from 'react';
import HeadingText from '../../components/shared/HeadingText';
import { Link } from 'react-router-dom';
import { RouteName } from '../../constant/routeNames';
import SolidButton from '../../components/shared/SolidButton';
import { FiArrowUpRight } from 'react-icons/fi';
import OutlineButton from '../../components/shared/OutlineButton';
import SmallTitle from '../../components/shared/SmallTitle';

function HeroSection() {
	return (
		<div className='mt-52 main-body'>
			<div className='flex items-start justify-between'>
				<HeadingText title='Loreem Ipsum.' />

				<div className='w-[40%]'>
					<p className='text-xl leading-10'>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry.
					</p>
					<div className='flex items-center'>
						<Link to={RouteName.ContactPage}>
							<SolidButton title='Get Started' />
						</Link>
						<div className='scale-40 footer-arrow-body'>
							<FiArrowUpRight className='footer-arrow' />
						</div>
						<p className='text-xl cursor-default'>Explore</p>
					</div>
				</div>
			</div>

			<div className='flex justify-between p-20 border-2 rounded-3xl bg-serviceCardGrayBack border-primary'>
				<div className='flex flex-col justify-between mr-10'>
					<SmallTitle title='Lorem Ispum' />
					<p className='para-text text-a7a7a7'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. At saepe
						consectetur facilis. Sed earum, labore alias accusamus debitis
						minima unde illo itaque.
					</p>
					<OutlineButton title='Learn More' />
				</div>
				<img
					src='https://i.pinimg.com/originals/53/c6/03/53c603b5424be3c25fb60c70356e05c5.jpg'
					className='w-[50%] rounded-lg ml-10'
					alt='hero pic'
				/>
			</div>
		</div>
	);
}

export default HeroSection;
