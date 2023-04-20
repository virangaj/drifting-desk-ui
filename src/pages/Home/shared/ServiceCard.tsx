import { useState } from 'react';
import { RxDotFilled } from 'react-icons/rx';
import { FiArrowUpRight, FiArrowDownRight } from 'react-icons/fi';
import OutlineButton from '../../../components/shared/OutlineButton';

function ServiceCard() {
	const [active, setActive] = useState(false);

	console.log(active);
	return (
		<>
			<div
				className={`${
					active ? 'service-card-container-active' : 'service-card-container'
				}`}
			>
				<div
					className={`flex items-center justify-between  h-40  w-[93%] mx-auto ${
						active ? 'cursor-default' : 'cursor-pointer'
					}`}
					onClick={() => setActive((val) => !val)}
				>
					<p className='flex items-center'>
						<RxDotFilled
							className={`w-10 h-10 mr-10 ${
								active ? 'text-black' : 'text-primary'
							}`}
						/>
						<span className='service-txt-head'>Remote Team Building</span>
					</p>
					{active ? (
						// when drop down ois active
						<FiArrowUpRight
							className={`w-16 h-16 mr-10 cursor-pointer z-30`}
							onClick={() => setActive((val) => !val)}
						/>
					) : (
						<FiArrowDownRight className={`w-16 h-16 mr-10 cursor-pointer`} />
					)}
				</div>

				{active ? (
					<div className='service-detail-section'>
						<img
							src='https://m.economictimes.com/thumb/msid-95779647,width-2123,height-1413,resizemode-4,imgsize-238776/digital-transformation-istock.jpg'
							className='w-[50%] rounded-md mr-10'
						/>
						<div className='w-[50%]'>
							<p className='para-text'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. At
								saepe consectetur facilis. Sed earum, labore alias accusamus
								debitis minima unde illo itaque, rerum enim placeat maxime vel
								animi. Provident, in?
							</p>
							<OutlineButton title='Learn More' />
						</div>
					</div>
				) : (
					<></>
				)}
			</div>
		</>
	);
}

export default ServiceCard;
