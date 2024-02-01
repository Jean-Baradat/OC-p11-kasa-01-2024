import React from "react"
import { Route, Routes } from "react-router-dom"
import Layout from "@/layouts/Layout"
import { Home, About, NotFound } from "@/pages/Index"

const Router = () => {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route index element={<Home />} />

				<Route path="/about" element={<About />} />

				<Route path="*" element={<NotFound />} />
			</Route>
		</Routes>
	)
}

export default Router
