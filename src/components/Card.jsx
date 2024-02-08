import React from "react"
import { PropTypes } from "prop-types"

const Card = ({ logement }) => {
	return (
		<div className="card">
			<h2 className="title">{logement.title}</h2>
			<div className="image-wrapper">
				<img
					src={logement.cover}
					alt={logement.title}
					className="bg-image"
				/>
			</div>
		</div>
	)
}

Card.propTypes = {
	logement: PropTypes.shape({
		title: PropTypes.string.isRequired,
		cover: PropTypes.string.isRequired,
	}),
}

export default Card
