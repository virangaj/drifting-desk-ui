import { FiArrowUpRight } from 'react-icons/fi';

function OutlineButton({ title, className }: any) {
	return (
		<button className={`${className && className} outline-btn`}>
			{title} <FiArrowUpRight className='w-10 h-10 ml-2' />
		</button>
	);
}

export default OutlineButton;
