import React, { useEffect, useState } from "react"
import Card from "@/components/Card"
import { getCardDataLogements } from "@/utils/ApiMock"

const CardLayout = () => {
	const [logements, setLogements] = useState(null)

	useEffect(() => {
		;(async () => {
			try {
				const result = await getCardDataLogements()
				setLogements(result)
			} catch {
				setLogements(new Error("Impossible de récupérer les données"))
			}
		})()
	}, [])

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
