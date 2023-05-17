import "../../styles/GenericHorocscope.scss";
import { Link } from "react-router-dom";

import geminismarco from "../../images/marco/geminismarco.png"
const Geminis = () => {
	return (
		
			<div className="background">

		<div className="generichoroscope">
			<div className="generichoroscope__divivage">
				<img src={geminismarco}alt="" className="generichoroscope__divimage__image"/>
			</div>
			<div>
			<div className="generichoroscope__text">
			<h2 className="generichoroscope__h2">Características</h2>
			<h3 className="generichoroscope__h3">Del 22 de junio al 21 de julio </h3>
				
				<p className='generichoroscope-paragraph'>Carácter doble, complejo y contradictorio es lo que mejor define a un <span className='generichoroscope-paragraph__strong'>Géminis</span>. Al contrario que los Aries, los Géminis empiezan con entusiasmo nuevas aventuras, pero tienden a aburrirse rápido por la falta de constancia. Son personas cariñosas, amables y generosas , aunque tienen algo de mentirosos si quieren obtener algo. Eso sí, sin perder el encanto. Suelen ser personas que se desaniman con facilidad ante las dificultades, por lo que necesitan escuchar halagos y recibir atención. Inteligencia y capacidad para aprender la tienen, aunque suelen aburrirse en el proceso de aprendizaje.</p>
				
			</div>
			<div className="opciones">
					
					<Link to="/Horoscopos" className="link">
						<i className="fa-solid fa-chevron-left"></i>Volver
					</Link>
				{/* 	<Link to="/Famosos-de-tu-signo" className="link">
					Famosos de este signo  <i className="fa-solid fa-chevron-down"></i>
					</Link> */}
						<Link to="/Compatibilidad"  className="link">Chequea la compatibilidad 	<i className="fa-solid fa-chevron-right"></i>	
					</Link>
					
					</div>
				</div>
		</div>
		</div>
	);
};
export default Geminis;