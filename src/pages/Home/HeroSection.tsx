import { Link } from 'react-router-dom';
//constant
import { RouteName } from '../../constant/routeNames';

// componenets
import SolidButton from '../../components/shared/SolidButton';
// images
import HeroImage from '../../images/hero-image.svg';

function HeroSection() {
	return (
		<>
			<div className='main-body'>
				<h1 className='main-title'>
					enhancing digital
					<br />
					performance
				</h1>

				<img src={HeroImage} className='hero-image' alt='hero back' />
				{/* <img src={WhiteFadedElipse} className='white-faded-elipse-image' /> */}
			</div>

			<div className='mx-auto w-[80%] -mt-56 grid place-items-center'>
				<p className='hero-desc-text'>
					We have advanced skills & resources to create large-scale solutions as
					well as guide startups from idea to profit.
				</p>
				<Link to={RouteName.ContactPage}>
					<SolidButton title="Let's Connect" className='px-10 py-4 mt-6' />
				</Link>
			</div>
		</>
	);
}

export default HeroSection;
