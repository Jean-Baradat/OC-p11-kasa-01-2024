import React from "react"
import { Link } from "react-router-dom"

const NotFound = () => {
	return (
		<main className="min-height-adjustment centered-container not-found">
			<h1 className="title">404</h1>
			<p className="mess">Oups! La page que vous demandez n'existe pas.</p>
			<Link
				to="/"
				className="link"
			>
				Retourner sur la page d’accueil
			</Link>
		</main>
	)
}

export default NotFound
