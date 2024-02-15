import React, { useRef, useState } from "react"
import collapsibleIcon from "@/assets/images/collapsible-icon.svg"
import PropTypes from "prop-types"

const Collapsible = ({ title, content }) => {
	const [open, setOpen] = useState(false)

	const contentRef = useRef()

	return (
		<div className="collapsible">
			<button
				className={open ? "isOpen" : ""}
				type="button"
				onClick={() => setOpen(!open)}
			>
				<h3 className="title">{title}</h3>
				<img
					src={collapsibleIcon}
					alt="Icône rétractable"
					className="collapsible-icon"
				/>
			</button>
			<p
				className="content"
				ref={contentRef}
				style={
					open
						? { height: contentRef.current.scrollHeight + "px" }
						: { height: 0 + "px" }
				}
			>
				<span className="content-text">{content}</span>
			</p>
		</div>
	)
}

Collapsible.propTypes = {
	title: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
}

export default Collapsible
