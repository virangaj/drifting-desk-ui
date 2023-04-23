import HeadingText from '../../components/shared/HeadingText';
import TestimonialCard from './shared/TestimonialCard';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation } from 'swiper';
function TestimonialSection() {
	return (
		<div className='mt-40'>
			<HeadingText title='testimonials' />
			<Swiper
				slidesPerView={2}
				spaceBetween={30}
				pagination={{
					clickable: true,
				}}
				modules={[Pagination, Navigation]}
				className='mt-20 mb-5 mySwiper'
			>
				<SwiperSlide>
					<TestimonialCard />
				</SwiperSlide>
				<SwiperSlide>
					<TestimonialCard />
				</SwiperSlide>
				<SwiperSlide>
					<TestimonialCard />
				</SwiperSlide>
				<SwiperSlide>
					<TestimonialCard />
				</SwiperSlide>
			</Swiper>
		</div>
	);
}

export default TestimonialSection;
