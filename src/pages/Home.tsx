import { Link } from 'react-router-dom';
import SolidButton from '../components/shared/SolidButton';
import TextCarousel from '../components/TextCarousel';
import { RouteName } from '../constant/routeNames';
import HeroImage from '../images/hero-image.png';
import HeroTexture from '../images/hero-texture.png';
import WhiteFadedElipse from '../images/white-faded-elipse.png';
import AboutUsSvg from '../images/about-us.svg';

export default function Home() {
	return (
		<>
			<div
				id='back-img'
				style={{
					background: `url(${HeroTexture}) center no-repeat`,
					backgroundSize: '100%',
					position: 'absolute',
					zIndex: -10,
					height: '500px',
					top: '80px',
					overflow: 'hidden',
					width: '100%',
					transform: 'scaleY(2)',
				}}
			></div>
			<div className='main-body'>
				<h1 className='main-title clash-display-font'>
					enhancing digital
					<br />
					performance
				</h1>

				<img src={HeroImage} className='hero-image' alt='hero back' />
				{/* <img src={WhiteFadedElipse} className='white-faded-elipse-image' /> */}
			</div>
			<div
				style={{
					background: `url(${WhiteFadedElipse}) center no-repeat`,
					backgroundSize: 'cover',
					zIndex: -10,
					height: '500px',
					marginTop: '-160px',
					overflow: 'hidden',
					width: '100%',
					transform: 'scale(1)',
				}}
			>
				<div className='mx-auto w-[80%] mt-52'>
					<p className='hero-desc-text'>
						We have advanced skills & resources to create large-scale solutions
						as well as guide startups from idea to profit.
					</p>
					<Link to={RouteName.ContactPage}>
						<SolidButton title="Let's Connect" className='py-3 mt-6' />
					</Link>
				</div>
			</div>
			<div className='mt-0 main-body'>
				{/* <TextCarousel /> */}

				{/* about us flex part */}
				<div className='flex-area'>
					<div>
						<h1>about us</h1>
						<p className='left-align-desc-text '>
							We have advanced skills & resources to create large-scale
							solutions as well as guide startups from idea to profit.
						</p>
					</div>
					<img src={AboutUsSvg} className='hero-image' alt='hero back' />
				</div>
			</div>
		</>
	);
}
