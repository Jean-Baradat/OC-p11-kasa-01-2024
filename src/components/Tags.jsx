import React from "react"
import { PropTypes } from "prop-types"

const Tags = ({ tags }) => {
	return (
		<div className="tags">
			{tags.map((tag, index) => {
				return (
					<div
						// eslint-disable-next-line
						key={index}
						className="tag"
					>
						{tag}
					</div>
				)
			})}
		</div>
	)
}

Tags.propTypes = {
	tags: PropTypes.arrayOf(PropTypes.string),
}

export default Tags
