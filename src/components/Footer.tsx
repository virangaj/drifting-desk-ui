import { FiArrowUpRight } from 'react-icons/fi';
import { FaLinkedinIn, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';
// images
import Logo from '../images/Logo.svg';

function Footer() {
	return (
		<div className='footer-section'>
			<div className='flex items-center justify-between p-40 footer-container'>
				<div className=''>
					<img src={Logo} className='nav-logo' alt='logo' />
					<div className='flex items-center justify-center mt-6'>
						<FaLinkedinIn className='footer-icon' />
						<FaTelegramPlane className='footer-icon' />
						<FaWhatsapp className='footer-icon' />
					</div>
				</div>
				<hr className='w-[1px] h-[230px] bg-white' />
				<div className='flex items-center'>
					<h1 className='text-white sub-main-text clash-font'>
						let’s discuss <br />
						your project
					</h1>
					<div className='footer-arrow-body'>
						<FiArrowUpRight className='footer-arrow' />
					</div>
				</div>
			</div>
			<div className='footer-bottom-text-section'>
				<p>©{new Date().getFullYear()} DriftingDesk</p>
				<div className='flex items-center'>
					<p className='mr-8'>Privacy Policy</p>
					<p>Terms of Service</p>
				</div>
			</div>
		</div>
	);
}

export default Footer;
