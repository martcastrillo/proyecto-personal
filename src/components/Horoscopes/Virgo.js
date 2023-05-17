import "../../styles/GenericHorocscope.scss";
import { Link } from "react-router-dom";
import virgomarco from "../../images/marco/virgomarco.png"

const Virgo = () => {
	return (
		
		<div className="background">
	
		<div className="generichoroscope">
			<div className="generichoroscope__divivage">
				<img src={virgomarco}alt="" className="generichoroscope__divimage__image"/>
			</div>
			<div>
			<div className="generichoroscope__text">
				<h2 className="generichoroscope__h2">Características</h2>
				<h3 className="generichoroscope__h3">Del 21 de marzo al 20 de abril</h3>
			
				<p className='generichoroscope-paragraph'>Único signo zodiacal representado por una mujer. Los <span className='generichoroscope-paragraph__strong'>Virgo</span> son observadores, pacientes y les cuesta hacer amigos por su carácter frío que muestran a veces. A pesar de ello tienen encanto y suelen ayudar a los demás cuando se presenta un problema. El método, el estudio y la lógica predominan en ellos, por eso les gusta aprender siempre, así como tener un análisis de la situación. Tanto se paran a pensar que a veces pueden retrasar la conclusión de los proyectos más complicados que llevan a cabo. Son intuitivos y capaces de ver todos los lados de un argumento.</p>
				
			</div>
			<div className="opciones">
					
					<Link to="/Horoscopos" className="link">
						<i className="fa-solid fa-chevron-left"></i>Volver
					</Link>
				{/* 	<Link to="/Famosos-de-tu-signo" className="link">
					Famosos de este signo  <i className="fa-solid fa-chevron-down"></i>
					</Link> */}
					<Link to="/Compatibilidad" className="link">Chequea la compatibilidad 	<i className="fa-solid fa-chevron-right"></i>	
					</Link>
					
					</div>
				</div>
		</div>
		</div>
	);
};
export default Virgo;