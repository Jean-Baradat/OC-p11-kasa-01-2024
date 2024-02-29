import React from "react"
import { PropTypes } from "prop-types"
import { Link } from "react-router-dom"

const Card = ({ logement }) => {
	return (
		<Link
			to={`/apartment/${logement.id}`}
			className="card"
		>
			<h2 className="title">{logement.title}</h2>
			<div className="image-wrapper">
				<img
					src={logement.cover}
					alt={logement.title}
					className="bg-image"
				/>
			</div>
		</Link>
	)
}

Card.propTypes = {
	logement: PropTypes.shape({
		title: PropTypes.string.isRequired,
		cover: PropTypes.string.isRequired,
		id: PropTypes.string.isRequired,
	}),
}

export default Card
