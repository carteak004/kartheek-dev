import React from 'react'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css' // core Swiper
import 'swiper/css/pagination'
import SectionHead from 'components/sectionHead'
import { recommendations } from 'constants/Recommendattions'
import './Recommendations.css'

const Recommendations = () => {
	return (
		<section id='recommendations'>
			<SectionHead lineOne='Review from co-workers' lineTwo='Recommendations' />
			<Swiper
				className=' recommendations-container'
				modules={[Pagination]}
				spaceBetween={40}
				slidesPerView={1}
				pagination={{ clickable: true }}
			>
				{recommendations.map((recommendation, index) => {
					return (
						<SwiperSlide className='rec' key={recommendation.name + index}>
							<h3>{recommendation.name}</h3>
							<h5 className='rec-designation'>{recommendation.designation}</h5>
							<small className='rec-message'>{recommendation.message}</small>
						</SwiperSlide>
					)
				})}
			</Swiper>
		</section>
	)
}

export default Recommendations
