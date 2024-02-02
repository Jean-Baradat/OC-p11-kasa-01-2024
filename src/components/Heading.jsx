import React from "react"
import { getImageUrl } from "@/utils/Utils"

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

export default Heading
