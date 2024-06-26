import { useState } from 'react';
import HeadingText from '../components/shared/HeadingText';
import SolidButton from '../components/shared/SolidButton';
import LeftBlur from '../images/Vector_left.png';
import RightBlur from '../images/Vector_right.png';
import JobViewer from './jobOpenings/JobViewer';

const backendJobs = [
	{
		title: 'Back End Developer',
		desc: 'We are seeking a senior back end developer to join our team.',
		type: 'Remote',
		time: 'Full-Time',
	},
	{
		title: 'Back End Developer',
		desc: 'We are seeking a senior back end developer to join our team.',
		type: 'Remote',
		time: 'Full-Time',
	},
];

const UIJobs = [
	{
		title: 'UI/UX Designer',
		desc: 'We are seeking a seniorUI/UX Designer to join our team.',
		type: 'Remote',
		time: 'Full-Time',
	},
	{
		title: 'UI/UX Designer',
		desc: 'We are seeking a senior UI/UX Designer to join our team.',
		type: 'Remote',
		time: 'Full-Time',
	},
];

const frontendJobs = [
	{
		title: 'Front End Developer',
		desc: 'We are seeking a senior front end developer to join our team.',
		type: 'Remote',
		time: 'Full-Time',
	},
	{
		title: 'Front End Developer',
		desc: 'We are seeking a senior front end developer to join our team.',
		type: 'Remote',
		time: 'Full-Time',
	},
];
const FullStackJobs = [
	{
		title: 'Full Stack Engineer',
		desc: 'We are seeking a seniorFull Stack Engineer to join our team.',
		type: 'Remote',
		time: 'Full-Time',
	},
	{
		title: 'Full Stack Engineer',
		desc: 'We are seeking a senior Full Stack Engineer to join our team.',
		type: 'Remote',
		time: 'Full-Time',
	},
];

function JobOpenings() {
	const [activeTab, setActiveTab] = useState(0);
	// console.log(activeTab);
	return (
		<>
			<img
				src={LeftBlur}
				alt='left side blur'
				className='absolute top-[50px] left-[40px] !-z-10'
			/>
			<img
				src={RightBlur}
				alt='right side blur'
				className='absolute top-[50px] right-[0] !-z-10'
			/>

			<div className='main-body'>
				<HeadingText
					title='Be a part of our team!'
					className='text-center mt-96'
				/>
				<p className='text-lg text-center text-a7a7a7 w-[80%] mx-auto font-normal'>
					At <span className='text-primary'>Drifting Desk</span>, we're always
					looking for talented, driven individuals to join our team. Whether
					you're just starting out or you're an experienced professional, we
					offer a wide range of opportunities to help you grow your career.
				</p>

				<HeadingText title='current job openings' className='mt-60' />
				<p className='text-lg text-a7a7a7'>
					Take a look at our current job openings to see if there's a position
					that's right for you. We offer a variety of roles across different
					departments. Click on each job title to learn more about the
					responsibilities, qualifications, and benefits of the position needed.
				</p>

				{/* tab section */}

				{/* tabs top buttons */}
				<div className='flex items-center mt-10'>
					<div onClick={() => setActiveTab(0)}>
						<SolidButton
							title='Back End Developer'
							className={`!z-50 ${
								activeTab === 0 ? '' : 'bg-transparent border border-white'
							}`}
						/>
					</div>

					<div onClick={() => setActiveTab(1)}>
						<SolidButton
							title='UI/UX Designer'
							className={`!z-50 ml-5 ${
								activeTab === 1 ? '' : 'bg-transparent border border-white'
							}`}
						/>
					</div>

					<div onClick={() => setActiveTab(2)}>
						<SolidButton
							title='Front End Developer'
							className={`!z-50 ml-5 ${
								activeTab === 2 ? '' : 'bg-transparent border border-white'
							}`}
						/>
					</div>

					<div onClick={() => setActiveTab(3)}>
						<SolidButton
							title='Full Stack Engineer'
							className={`!z-50 ml-5 ${
								activeTab === 3 ? '' : 'bg-transparent border border-white'
							}`}
						/>
					</div>
				</div>

				{/* tab show section */}
				<div className='mt-20 mb-40'>
					{activeTab === 0 ? (
						<>
							{backendJobs.map((j: any, i: number) => (
								<JobViewer {...j} />
							))}
						</>
					) : activeTab === 1 ? (
						<>
							{UIJobs.map((j: any, i: number) => (
								<JobViewer {...j} />
							))}
						</>
					) : activeTab === 2 ? (
						<>
							{frontendJobs.map((j: any, i: number) => (
								<JobViewer {...j} />
							))}
						</>
					) : (
						<>
							{FullStackJobs.map((j: any, i: number) => (
								<JobViewer {...j} />
							))}
						</>
					)}
				</div>

				{/* why work with us  */}
				<HeadingText title='why work with us?' />

				<p className='para-text'>
					At <span className='font-medium text-primary'>Drifting Desk</span>,
					we're committed to creating a positive work environment that
					encourages growth, innovation, and collaboration. We offer competitive
					compensation packages, comprehensive benefits, and opportunities for
					professional development. We also have a diverse and inclusive culture
					that values teamwork, creativity, and work-life balance.
				</p>

				<p className='mt-10 para-text'>
					Ready to join our team? Click on the{' '}
					<span className='font-medium text-primary'>"Apply"</span> button on
					each job listing to submit your application. We look forward to
					hearing from you!
				</p>
			</div>
		</>
	);
}

export default JobOpenings;
