import React from 'react'
import SectionHead from 'components/sectionHead'
import WorkRecommendation from 'components/workRecommendations'
import { recommendations } from 'constants/Recommendattions'
import './Recommendations.css'

const Recommendations = () => {
	return (
		<section id='recommendations'>
			<SectionHead lineOne='Review from co-workers' lineTwo='Recommendations' />
			<div className='container recommendations-container'>
				{recommendations.map((recommendation, index) => {
					return (
						<WorkRecommendation
							recommendation={recommendation}
							key={recommendation.name + index}
						/>
					)
				})}
			</div>
		</section>
	)
}

export default Recommendations
