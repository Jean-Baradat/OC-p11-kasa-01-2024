import React from "react"
import logo from "@/assets/images/logo-white.svg"

const Footer = () => {
	return (
		<footer className="main-footer">
			<img src={logo} alt="Kasa" className="logo" />
			<p>© {new Date().getFullYear()} Kasa. All rights reserved</p>
		</footer>
	)
}

export default Footer
