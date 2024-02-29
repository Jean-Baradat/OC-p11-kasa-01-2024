import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getLogement } from "@/utils/ApiMock"
import Carousel from "@/components/Carousel"

const Apartment = () => {
	let { id } = useParams()
	const [logement, setLogement] = useState(null)
	const navigate = useNavigate()

	useEffect(() => {
		;(async () => {
			try {
				const result = await getLogement(id)
				setLogement(result)
			} catch (error) {
				navigate("/")
			}
		})()
		// eslint-disable-next-line
	}, [])

	return (
		<main className="min-height-adjustment centered-container apartment">
			{!logement ? (
				<p>Chargement des données...</p>
			) : (
				<>
					<Carousel pictures={logement.pictures} />
					<div>
						<p>{logement.title}</p>
						<p>{logement.location}</p>
					</div>
				</>
			)}
		</main>
	)
}

export default Apartment
