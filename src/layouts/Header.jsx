import React from "react"
import { NavLink } from "react-router-dom"
import logo from "@/assets/images/logo.svg"

const Header = () => {
	return (
		<header className="main-header">
			<nav className="main-nav">
				<img src={logo} alt="Kasa" className="logo" />
				<ul className="links">
					<li>
						<NavLink
							to="/"
							className={({ isActive }) =>
								isActive ? "link active" : "link"
							}
						>
							Accueil
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/about"
							className={({ isActive }) =>
								isActive ? "link active" : "link"
							}
						>
							À propos
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header
