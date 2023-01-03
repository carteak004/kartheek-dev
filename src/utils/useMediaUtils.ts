import { useMemo } from 'react'
import { useMediaQuery } from 'react-responsive'

const useMediaUtils = () => {
	const isMobile = useMediaQuery({ maxWidth: 600 })

	const getValues = useMemo(() => {
		let radius = 250 as number
		let maxSpeed = 20 as number
		let initSpeed = 40 as number
		let direction = 135 as number

		if (isMobile) {
			radius = 180 as number
			maxSpeed = 20 as number
			initSpeed = 25 as number
			direction = 110 as number
		}
		return { radius, maxSpeed, initSpeed, direction }
	}, [isMobile])

	return getValues
}

export default useMediaUtils
