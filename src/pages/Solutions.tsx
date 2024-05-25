import HeroSection from './solution/HeroSection';
import BlueWhiteTablet from './solution/BlueWhiteTablet';
import HeadingText from '../components/shared/HeadingText';
import { FiArrowUpRight } from 'react-icons/fi';
import PercentageCard from './solution/PercentageCard';
import ParaText from '../components/shared/ParaText';
import BackgroundImage from '../components/shared/BackgroundImage';

export default function Solutions() {
	return (
		<>
			<BackgroundImage />

			<HeroSection />
			<div className='main-body'>
				{/* first section after hero */}
				<div className='flex items-center justify-between mb-36'>
					<BlueWhiteTablet className='mr-8' />
					<BlueWhiteTablet className='mx-8' />
					<BlueWhiteTablet className='mx-8' />
					<BlueWhiteTablet className='ml-8' />
				</div>

				<HeadingText title='Loreem Ipsum.' />

				<div className='flex items-center justify-between mt-20'>
					<div className='rounded-2xl bg-serviceCardGrayBack h-96 w-[550px] p-10 flex flex-col justify-between'>
						<div className='w-32 h-11 bg-primary rounded-xl'></div>
						<p className='para-text'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. At saepe
							consectetur facilis. Sed earum.
						</p>

						<p className='para-text text-a7a7a7'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. At saepe
							consectetur facilis. Sed earum.
						</p>

						<div className='flex items-center -ml-16'>
							<div className='scale-40 footer-arrow-body'>
								<FiArrowUpRight className='footer-arrow' />
							</div>
							<p className='text-xl cursor-default'>Explore</p>
						</div>
					</div>

					<div className='w-[50%]'>
						<PercentageCard
							number='10'
							text='Earn with us in rewards'
							className='mb-8 bg-serviceCardActiveBg'
						/>
						<PercentageCard
							number='100'
							text='Your crypto in one place'
							className='mt-8 bg-serviceCardGrayBack'
						/>
					</div>
				</div>

				{/* second section */}
				<p className='mt-40 text-5xl font-bold clash-font'>
					Lorem Ipsum is simply dummy text
				</p>
				<p className='mt-6 ml-40 text-5xl font-bold clash-font'>
					of the printing and typesetting industry.
				</p>

				<div className='flex items-center justify-start mt-20'>
					{/* height oval */}
					<div className='bg-serviceCardGrayBack rounded-full w-[360px] h-[540px]'></div>

					{/* flex right section */}
					<div className='ml-52'>
						<p className='text-a7a7a7 w-[360px]'>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry.
						</p>
						<p className='mt-10 text-a7a7a7 w-[360px]'>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry.
						</p>

						<div className='flex items-center mt-10'>
							{/* colored two square */}
							<div className='w-40 h-16 rounded-lg bg-serviceCardActiveBg'></div>
							<div className='w-40 h-16 ml-5 rounded-lg bg-serviceCardActiveBg'></div>
						</div>

						<div className='flex items-center mt-10'>
							{/* bordered two square */}

							<div className='w-[265px] h-48 rounded-lg border-2 border-serviceCardActiveBg'></div>
							<div className='w-[265px] ml-5 h-48 rounded-lg border-2 border-serviceCardActiveBg'></div>
						</div>
					</div>
				</div>

				{/* become a customer */}
				<div className='become-a-customer'>
					{/* left */}
					<div>
						{/* blue bar */}
						<div className='w-52 h-14 bg-primary rounded-2xl'></div>
						{/* heading like text */}
						<p className='mt-10 text-3xl font-medium leading-10 clash-font'>
							Lorem Ipsum is simply <br />
							dummy text of the printing
							<br /> and typesetting industry.
						</p>

						{/* para text */}
						<ParaText className='mt-10 w-[80%]' />

						{/* arrow button */}
						<div className='flex items-center -ml-16'>
							<div className='scale-40 footer-arrow-body'>
								<FiArrowUpRight className='footer-arrow' />
							</div>

							<p className='text-base cursor-default clash-font'>
								Become a Customer
							</p>
						</div>
					</div>
					{/* right */}
					<div>
						<div className='w-[454px] h-[310px] bg-c1c1c1c rounded-2xl'></div>
					</div>
				</div>

				{/* second percentage section */}
				<div className='flex items-center justify-between mt-20'>
					<div className='w-[50%]'>
						<PercentageCard
							number='10'
							text='Earn with us in rewards'
							className='mb-8 bg-serviceCardActiveBg'
						/>
						<PercentageCard
							number='100'
							text='Your crypto in one place'
							className='mt-8 bg-serviceCardGrayBack'
						/>
					</div>
					<div className='rounded-2xl bg-serviceCardGrayBack h-96 w-[550px] p-10 flex flex-col justify-between'>
						<div className='w-32 h-11 bg-primary rounded-xl'></div>
						<p className='para-text'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. At saepe
							consectetur facilis. Sed earum.
						</p>

						<p className='para-text text-a7a7a7'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. At saepe
							consectetur facilis. Sed earum.
						</p>

						<div className='flex items-center -ml-16'>
							<div className='scale-40 footer-arrow-body'>
								<FiArrowUpRight className='footer-arrow' />
							</div>
							<p className='text-xl cursor-default'>Explore</p>
						</div>
					</div>
				</div>

				{/* last section */}
				<div className='w-full h-[421px] bg-serviceCardGrayBack mt-40 rounded-3xl p-20'>
					<p className='mt-10 text-5xl font-bold clash-font'>
						Lorem Ipsum is simply dummy
					</p>
					<p className='mt-6 ml-40 text-5xl font-bold clash-font'>
						of the printing and typesetting
					</p>

					<div className='flex items-center justify-between mt-20'>
						<p className='text-base font-normal text-a7a7a7'>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry.
						</p>
						{/* blue bar */}
						<div className='h-12 w-52 bg-primary rounded-2xl'></div>
					</div>
				</div>
			</div>
		</>
	);
}
