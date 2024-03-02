import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getLogement } from "@/utils/ApiMock"
import Carousel from "@/components/Carousel"
import HostProfile from "@/components/HostProfile"
import Tags from "@/components/Tags"
import StarRating from "@/components/StarRating"
import Collapsible from "@/components/Collapsible"
import NotFound from "./NotFound"

const Apartment = () => {
	let { id } = useParams()
	const [logement, setLogement] = useState(null)

	useEffect(() => {
		;(async () => {
			try {
				const result = await getLogement(id)
				setLogement(result)
			} catch (error) {
				setLogement(error)
			}
		})()
		// eslint-disable-next-line
	}, [])

	return (
		<main className="min-height-adjustment centered-container apartment">
			{!logement ? (
				<p>Chargement des données...</p>
			) : logement instanceof Error ? (
				<NotFound />
			) : (
				<>
					<Carousel pictures={logement.pictures} />
					<section className="apartment-infos">
						<div className="left-part">
							<h1 className="title">{logement.title}</h1>
							<p className="subtitle">{logement.location}</p>
							<Tags tags={logement.tags} />
						</div>
						<div className="right-part">
							<HostProfile host={logement.host} />
							<StarRating rating={logement.rating} />
						</div>
						<div className="collapsibles">
							<Collapsible
								titleData={{
									size: 18,
									title: "Description",
								}}
								contentData={{
									type: String,
									size: 16,
									content: logement.description,
								}}
							/>
							<Collapsible
								titleData={{
									size: 18,
									title: "Équipements",
								}}
								contentData={{
									type: Array,
									size: 16,
									content: logement.equipments,
								}}
							/>
						</div>
					</section>
				</>
			)}
		</main>
	)
}

export default Apartment
