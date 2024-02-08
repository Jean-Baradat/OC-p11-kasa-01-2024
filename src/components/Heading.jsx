import React from "react"
import { getImageUrl } from "@/utils/Utils"
import PropTypes from "prop-types"

const Heading = ({ imgData, titleData }) => {
	const displayTitle = () => {
		if (titleData.hasTitle) {
			return <h1 className="title">{titleData.content}</h1>
		}
	}

	return (
		<div className="heading">
			{displayTitle()}
			<img
				src={getImageUrl(imgData.file)}
				alt={imgData.alt}
				className="bg-image"
			/>
		</div>
	)
}

Heading.propTypes = {
	titleData: PropTypes.shape({
		content: PropTypes.string,
		hasTitle: PropTypes.bool.isRequired,
	}),
	imgData: PropTypes.shape({
		alt: PropTypes.string.isRequired,
		file: PropTypes.string.isRequired,
	}),
}

export default Heading
