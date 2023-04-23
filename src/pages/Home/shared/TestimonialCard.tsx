import { AiFillStar } from 'react-icons/ai';
import ParaText from '../../../components/shared/ParaText';

function TestimonialCard({ star, name, role, img, desc }: any) {
	const num = 5;

	return (
		<div className='cursor-default testamonial-card'>
			<div className='flex'>
				<AiFillStar className='w-5 h-5 mr-6 text-blue-500' />
				<AiFillStar className='w-5 h-5 mr-6 text-blue-500' />
				<AiFillStar className='w-5 h-5 mr-6 text-blue-500' />
				<AiFillStar className='w-5 h-5 mr-6 text-blue-500' />
			</div>

			<ParaText text='nothing' />

			{/* profile pic and name */}
			<div className='flex items-center'>
				{/* profile pic */}
				<div
					style={{
						backgroundImage: `url(https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg)`,
						height: '64px',
						width: '64px',
						borderRadius: '50%',
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						backgroundRepeat: 'no-repeat',
					}}
				></div>
				<div className='ml-8 lowercase'>
					<p className='text-lg text-primary clash-font'>john smith</p>
					<p className='text-xs font-thin'>INSTRUCTIONAL DESIGNER</p>
				</div>
			</div>
		</div>
	);
}

export default TestimonialCard;
