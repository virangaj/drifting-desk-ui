import { useState } from 'react';
import { RxDotFilled } from 'react-icons/rx';
import { FiArrowUpRight, FiArrowDownRight } from 'react-icons/fi';
import OutlineButton from '../../../components/shared/OutlineButton';

function ServiceCard({ title, img, desc }: any) {
	const [active, setActive] = useState<boolean>(false);

	const detailsSection = () => {
		setActive(!active);
		// console.log(active);
	};
	return (
		<>
			<div
				className={`${
					active ? 'service-card-container-active' : 'service-card-container'
				}`}
			>
				<div className={`${active ? '' : 'service-card-animation'}`}>
					<div
						className={`flex items-center justify-between w-[97%] h-40  mx-auto ${
							active ? 'cursor-default' : 'cursor-pointer'
						}`}
						onClick={detailsSection}
					>
						<p className='flex items-center'>
							<RxDotFilled
								className={`w-10 h-10 mr-10 ${
									active ? 'text-black' : 'text-primary dot-color'
								}`}
							/>
							<span className='service-txt-head'>{title}</span>
						</p>
						{active ? (
							// when drop down ois active
							<FiArrowUpRight
								className={`w-16 h-16 mr-10 cursor-pointer !z-50`}
								onClick={detailsSection}
							/>
						) : (
							<FiArrowDownRight className={`w-16 h-16 mr-10 cursor-pointer`} />
						)}
					</div>
				</div>

				{active ? (
					<div className='relative service-detail-section'>
						<img
							src={img}
							className='w-[50%] rounded-md mr-10'
							alt='service card pic'
						/>
						<div className='w-[50%]'>
							<p className='para-text'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. At
								saepe consectetur facilis. Sed earum, labore alias accusamus
								debitis minima unde illo itaque, rerum enim placeat maxime vel
								animi. Provident, in?
							</p>
							<div className='absolute bottom-0'>
								<OutlineButton title='Learn More' />
							</div>
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
