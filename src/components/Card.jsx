import React from "react"

const Card = ({ logement }) => {
	return (
		<div className="card">
			<h2 className="title">{logement.title}</h2>
			<div className="image-wrapper">
				<img src={logement.cover} alt="" className="bg-image" />
			</div>
		</div>
	)
}

export default Card
