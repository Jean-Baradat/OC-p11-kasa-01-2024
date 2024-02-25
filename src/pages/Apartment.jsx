import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getLogement } from "@/utils/ApiMock"

const Apartment = () => {
	let { id } = useParams()
	const [logement, setLogement] = useState(null)

	useEffect(() => {
		;(async () => {
			try {
				const result = await getLogement(id)
				setLogement(result)
			} catch (error) {
				console.log(error)
			}
		})()
		// eslint-disable-next-line
	}, [])

	return (
		<main className="min-height-adjustment centered-container">
			<div>Fiche logement</div>
		</main>
	)
}

export default Apartment
