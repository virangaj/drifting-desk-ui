// constant
// components
import AboutUsSection from './Home/AboutUsSection';
import HeroSection from './Home/HeroSection';
import ServiceSection from './Home/ServiceSection';
// images
import HeroTexture from '../images/hero-texture.png';
import TestimonialSection from './Home/TestimonialSection';

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

			{/* Hero section */}
			<HeroSection />

			<div className='mt-0 main-body'>
				{/* about us flex part */}
				<AboutUsSection />
				{/* ouser serrvice section */}
				<ServiceSection />

				{/* Testimonial section */}
				<TestimonialSection />
			</div>
		</>
	);
}
