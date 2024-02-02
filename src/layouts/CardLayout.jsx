import React from "react"
import Card from "@/components/Card"
import { useOutletContext } from "react-router-dom"

const CardLayout = () => {
	const [logements] = useOutletContext()

	return (
		<div className="cards-layout">
			{logements ? (
				logements.map(logement => (
					<Card key={logement.id} logement={logement} />
				))
			) : (
				<p>Chargement des données...</p>
			)}
		</div>
	)
}

export default CardLayout
