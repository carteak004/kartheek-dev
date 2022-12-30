import React, { FC } from 'react'
import { Recommendation } from 'models/Recommendation'
import './WorkRecommendation.css'

interface WorkRecommendationProps {
	recommendation: Recommendation
}
const WorkRecommendation: FC<WorkRecommendationProps> = ({
	recommendation,
}) => {
	return (
		<article className='rec'>
			<h5 className='rec-name'>{recommendation.name}</h5>
			<small className='rec-message'>{recommendation.message}</small>
		</article>
	)
}

export default WorkRecommendation
