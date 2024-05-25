import { HiOutlineLocationMarker, HiOutlineClock } from 'react-icons/hi';
import OutlineButton from '../../components/shared/OutlineButton';
function JobViewer({ title, desc, type, time }: any) {
	return (
		<>
			<hr className='border border-line' />
			<div className='flex items-center justify-between my-8'>
				<div>
					<p className='text-3xl font-medium clash-font'>{title}</p>
					<p className='mt-3 para-text text-a7a7a7'>{desc}</p>

					<div className='flex items-center mt-10'>
						<p className='flex items-center p-4 border border-white cursor-default rounded-xl'>
							<HiOutlineLocationMarker className='w-5 h-5 mr-2' /> {type}
						</p>

						<p className='flex items-center p-4 ml-5 border border-white cursor-default rounded-xl'>
							<HiOutlineClock className='w-5 h-5 mr-2' /> {time}
						</p>
					</div>
				</div>
				<div>
					<OutlineButton title='Apply' className='font-medium' />
				</div>
			</div>
			<hr className='border border-line' />
		</>
	);
}

export default JobViewer;
