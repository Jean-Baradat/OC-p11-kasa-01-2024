import React, { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import Header from "@/layouts/Header"
import Footer from "@/layouts/Footer"
import { fetchData } from "@/utils/ImportData"

const Layout = () => {
	const [logements, setLogements] = useState(null)

	useEffect(() => {
		;(async () => {
			setLogements(null)
			const result = await fetchData()
			setLogements(result)
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
