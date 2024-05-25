// components
import HeadingText from '../../components/shared/HeadingText';
import OutlineButton from '../../components/shared/OutlineButton';
// images
import AboutUsSvg from '../../images/about-us.svg';

function AboutUsSection() {
	return (
		<div className='flex-area'>
			<div className='grid place-items-center md:place-items-start'>
				<HeadingText title='about us' />
				<p className='left-align-desc-text gray-text'>
					We have advanced skills & resources to create large-scale solutions as
					well as guide startups from idea to profit.
				</p>
				<OutlineButton title='Our Projects' className='md:items-center' />
			</div>
			<img src={AboutUsSvg} className='flex-image' alt='flex side' />
		</div>
	);
}

export default AboutUsSection;
