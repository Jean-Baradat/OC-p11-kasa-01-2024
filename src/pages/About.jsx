import React from "react"
import Heading from "@/components/Heading"

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
			<div>About</div>
		</main>
	)
}

export default About
