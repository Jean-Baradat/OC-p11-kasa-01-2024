import React from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/images/logo.svg";

const Header = () => {
	return (
		<header>
			<nav>
				<div>
					<img src={logo} alt="Kasa" />
				</div>
				<ul>
					<li>
						<Link to="/">Accueil</Link>
					</li>
					<li>
						<Link to="/about">À propos</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
