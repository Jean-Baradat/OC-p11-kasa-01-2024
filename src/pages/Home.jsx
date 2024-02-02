import React from "react"
import Heading from "@/components/Heading"
import CardLayout from "@/layouts/CardLayout"

const Home = () => {
	return (
		<main className="min-height-adjustment centered-container home">
			<Heading
				imgData={{ alt: "Paysage côtier", file: "heading-home" }}
				titleData={{
					hasTitle: true,
					content: "Chez vous, partout et ailleurs",
				}}
			/>
			<CardLayout />
		</main>
	)
}

export default Home
