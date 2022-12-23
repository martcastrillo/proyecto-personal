import { Link } from "react-router-dom";

const Inicio = () => {
	return (
	<div className="inicio">
	

	
		<h3 className='h3'>Los 12 signos tradicionales del zodiaco occidental son <strong> Aries, Tauro, Géminis, Cáncer, Leo, Virgo, Libra, Escorpio, Sagitario, Capricornio, Acuario y Piscis</strong>, y cada uno de ellos tiene asignadas unas características específicas que, según la tradición y las costumbres, se traspasan a todas aquellas personas que nacen en el momento del año en el que rige cada uno de e﻿llos.</h3>
		
		<Link class="button " to="/Horoscopos" ><h2 className='h2'> Entra y descúbrelos</h2></Link>
	
	</div>
	);
};
export default Inicio;