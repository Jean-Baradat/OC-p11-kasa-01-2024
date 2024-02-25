import React, { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import Header from "@/layouts/Header"
import Footer from "@/layouts/Footer"
import { getCardDataLogements } from "@/utils/ApiMock"

const Layout = () => {
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

	return (
		<>
			<Header />
			<Outlet context={[logements]} />
			<Footer />
		</>
	)
}

export default Layout
