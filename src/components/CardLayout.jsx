import React from "react"
import Card from "@/components/Card"
import { useOutletContext } from "react-router-dom"

const CardLayout = () => {
	const [logements] = useOutletContext()

	const render = logements => {
		if (!logements) {
			return <p>Chargement des données...</p>
		} else if (logements instanceof Error) {
			return <p>{logements.message}</p>
		} else {
			return logements.map(logement => (
				<Card key={logement.id} logement={logement} />
			))
		}
	}

	return <div className="cards-layout">{render(logements)}</div>
}

export default CardLayout
