import { Routes, Route, Link, NavLink } from "react-router-dom";

import "../styles/App.scss";

import Inicio from "./Inicio";
import Famoso from "./Famoso";
import Horoscopo from "./Horoscopo";
import Relaciones from "./Relaciones";

import handleft from "../images/handleft.png";
import handright from "../images/handright.png";
import Aries from "./Horoscopes/Aries";
import Tauro from "./Horoscopes/Tauro";
import Piscis from "./Horoscopes/Piscis";
import Capricornio from "./Horoscopes/Capricornio";
import Libra from "./Horoscopes/Libra";
import Escorpio from "./Horoscopes/Escorpio";
import Cancer from "./Horoscopes/Cancer";
import Sagitario from "./Horoscopes/Sagitario";
import Acuario from "./Horoscopes/Acuario";
import Virgo from "./Horoscopes/Virgo";
import Leo from "./Horoscopes/Leo";
import Geminis from "./Horoscopes/Geminis";
function App() {
	return (
		<>
			<ul className="nav">
				<li>
					<NavLink to="/" className="nav__element" id="contact-link">
						Inicio
					</NavLink>
				</li>
				<li>
					<NavLink to="/Horoscopos" className="nav__element" id="contact-link">
						Horoscopos
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/Famosos-de-tu-signo"
						className="nav__element"
						id="contact-link"
					>
						Famosos de tu signo
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/Relaciones"
						className="nav__element"
						id="contact-link"
					>
						Relaciones
					</NavLink>
				</li>
			</ul>
			<Link to="/" className="link header">
				<header className="headermain">
					<img
						className="logomain"
						src={handleft}
						alt="logo"
						title="rick-and"
					/>
					<h1 className="h1main">horóscopo</h1>
					<img
						className="logomain"
						src={handright}
						alt="logo"
						title="rick-and"
					/>
				</header>
			</Link>
			<Routes>
				<Route path="/" element={<Inicio />}></Route>
				<Route
					path="/Horoscopos"
					element={<Horoscopo />
						
					}
				></Route>
				<Route path="/Famosos-de-tu-signo" element={<Famoso />}>
	
				</Route> 
				<Route path="/Relaciones" element={<Relaciones />}></Route>
				<Route path="/aries" element={<Aries />}></Route>
				<Route path="/tauro" element={<Tauro />}></Route>
				<Route path="/Geminis" element={<Geminis />}></Route>
				<Route path="/cancer" element={<Cancer />}></Route>
				<Route path="/leo" element={<Leo />}></Route>
				<Route path="/virgo" element={<Virgo />}></Route>
				<Route path="/libra" element={<Libra />}></Route>
				<Route path="/escorpio" element={<Escorpio />}></Route>
				<Route path="/sagitario" element={<Sagitario />}></Route>
				<Route path="/capricornio" element={<Capricornio />}></Route>
				<Route path="/acuario" element={<Acuario />}></Route>
				<Route path="/piscis" element={<Piscis />}></Route>
			</Routes>
			<footer class="page__footer">
				<p class="footer">&copy; Marta Castrillo 2022</p>
			</footer>
		</>
	);
}

export default App;
