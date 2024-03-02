import React from "react"
import Heading from "@/components/Heading"
import Collapsible from "@/components/Collapsible"

const About = () => {
	return (
		<main className="min-height-adjustment centered-container about">
			<Heading
				imgData={{
					alt: "Paysage montagneux",
					file: "heading-about",
				}}
				titleData={{
					hasTitle: false,
				}}
			/>
			<div className="content">
				<Collapsible
					titleData={{
						size: 24,
						title: "Fiabilité",
					}}
					contentData={{
						type: String,
						content:
							"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
					}}
				/>
				<Collapsible
					titleData={{
						size: 24,
						title: "Respect",
					}}
					contentData={{
						type: String,
						content:
							"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
					}}
				/>
				<Collapsible
					titleData={{
						size: 24,
						title: "Service",
					}}
					contentData={{
						type: String,
						content:
							"Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
					}}
				/>
				<Collapsible
					titleData={{
						size: 24,
						title: "Sécurité",
					}}
					contentData={{
						type: String,
						content:
							"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
					}}
				/>
			</div>
		</main>
	)
}

export default About
