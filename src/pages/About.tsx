import AboutUsNumCard from '../components/shared/AboutUsNumCard';
import BackgroundImage from '../components/shared/BackgroundImage';

function About() {
	return (
		<>
			<BackgroundImage />

			{/* main heading */}
			<div className='main-body'>
				{/* main title */}
				<h1 className='mt-60 main-title'>
					Lorem Ipsum <br /> is simply dummy text
				</h1>

				{/*  cards */}
				<div className='flex items-center justify-between mt-40'>
					<AboutUsNumCard
						num='10%'
						className='bg-serviceCardGrayBack'
						text='Lorem Ipsum'
					/>
					<AboutUsNumCard
						num='+12.1K'
						className='bg-serviceCardActiveBg'
						text='Lorem Ipsum'
					/>
					<AboutUsNumCard
						num='+113'
						className='bg-serviceCardGrayBack'
						text='Lorem Ipsum'
					/>
					<AboutUsNumCard
						num='85%'
						className='bg-serviceCardActiveBg'
						text='Lorem Ipsum'
					/>
				</div>

				<div className='flex items-center mt-72'>
					{/* left */}
					<div className='w-[455px] h-[374px] bg-c1c1c1c rounded-xl'></div>
					{/* right */}
					<div className='w-[50%] ml-40'>
						<p className='text-3xl'>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry.
						</p>
						<p className='mt-20 text-lg text-a7a7a7'>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s. Lorem Ipsum is simply dummy text of the
							printing and typesetting industry. Lorem Ipsum has been the
							industry's standard dummy text.
						</p>
					</div>
				</div>

				<div className='flex items-center mt-72'>
					{/* left */}

					<div className='w-[50%]'>
						<p className='text-3xl'>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry.
						</p>
						<p className='mt-20 text-lg text-a7a7a7'>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s. Lorem Ipsum is simply dummy text of the
							printing and typesetting industry. Lorem Ipsum has been the
							industry's standard dummy text.
						</p>
					</div>
					{/* right */}
					<div className='ml-40 w-[455px] h-[374px] bg-c1c1c1c rounded-xl'></div>
				</div>
			</div>
		</>
	);
}

export default About;
