import React from "react"
import { PropTypes } from "prop-types"

const HostProfile = ({ host }) => {
	return (
		<div className="host-information">
			<p className="host-name">
				{host.name.split(" ")[0]}
				<br />
				{host.name.split(" ")[1]}
			</p>
			<img
				src={host.picture}
				alt={`Profil de ${host.name}`}
				className="host-picture"
			/>
		</div>
	)
}

HostProfile.propTypes = {
	host: PropTypes.objectOf(PropTypes.string),
}

export default HostProfile
