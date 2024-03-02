import React, { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { PropTypes } from "prop-types"

const StarRating = ({ rating }) => {
	const [stars, setStars] = useState([])
	const ratingNum = parseInt(rating)

	useEffect(() => {
		let stars = []

		for (let i = 0; i < 5; i++) {
			stars[i] = (
				<FontAwesomeIcon
					className={ratingNum >= i + 1 ? "icon active" : "icon"}
					key={`star-${i}`}
					alt="Étoile"
					icon={faStar}
				/>
			)
		}

		setStars(stars)
		// eslint-disable-next-line
	}, [])

	return (
		<div className="star-rating">
			{stars.map(star => (
				<div
					className="star"
					key={star.key}
				>
					{star}
				</div>
			))}
		</div>
	)
}

StarRating.propTypes = {
	rating: PropTypes.string.isRequired,
}

export default StarRating
