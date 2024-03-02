import React, { useRef, useState } from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronUp } from "@fortawesome/free-solid-svg-icons"

const Collapsible = ({ titleData, contentData }) => {
	const [open, setOpen] = useState(false)

	const contentRef = useRef()

	return (
		<div className="collapsible">
			<button
				className={open ? "isOpen" : ""}
				type="button"
				onClick={() => setOpen(!open)}
			>
				<h3
					className="title"
					style={{
						fontSize: `${titleData.size}px`,
					}}
				>
					{titleData.title}
				</h3>
				<FontAwesomeIcon
					className="collapsible-icon"
					alt="Icône rétractable"
					icon={faChevronUp}
				/>
			</button>
			<div
				className="content"
				ref={contentRef}
				style={
					open
						? { height: contentRef.current.scrollHeight + "px" }
						: { height: 0 + "px" }
				}
			>
				{contentData.type === Array ? (
					<ul
						className="content-text"
						style={{
							fontSize: `${contentData.size}px`,
						}}
					>
						{contentData.content.map((content, index) => (
							// eslint-disable-next-line
							<li key={index}>{content}</li>
						))}
					</ul>
				) : (
					<p
						className="content-text"
						style={{
							fontSize: `${contentData.size}px`,
						}}
					>
						{contentData.content}
					</p>
				)}
			</div>
		</div>
	)
}

Collapsible.propTypes = {
	contentData: PropTypes.shape({
		type: PropTypes.oneOfType([
			PropTypes.instanceOf(String),
			PropTypes.instanceOf(Number),
			PropTypes.instanceOf(Array),
			PropTypes.instanceOf(Object),
		]).isRequired,
		content: PropTypes.any.isRequired,
		size: PropTypes.number,
	}).isRequired,
	titleData: PropTypes.shape({
		title: PropTypes.string.isRequired,
		size: PropTypes.number,
	}).isRequired,
}

export default Collapsible
