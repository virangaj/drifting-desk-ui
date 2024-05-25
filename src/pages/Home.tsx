// constant
// components
import BackgroundImage from '../components/shared/BackgroundImage';
import AboutUsSection from './Home/AboutUsSection';
import HeroSection from './Home/HeroSection';
import ServiceSection from './Home/ServiceSection';
// images
import TestimonialSection from './Home/TestimonialSection';

export default function Home() {
	return (
		<>
			<BackgroundImage />

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
