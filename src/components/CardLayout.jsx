import React from "react"
import Card from "@/components/Card"
import { useOutletContext } from "react-router-dom"

const CardLayout = () => {
	const [logements] = useOutletContext()

	return (
		<div className="cards-layout">
			{!logements ? (
				<p>Chargement des données...</p>
			) : logements instanceof Error ? (
				<p>{logements.message}</p>
			) : (
				logements.map(logement => (
					<Card key={logement.id} logement={logement} />
				))
			)}
		</div>
	)
}

export default CardLayout
