import "../../styles/GenericHorocscope.scss";
import { Link } from "react-router-dom";
import capricorniomarco from "../../images/marco/capricorniomarco.png"

const Capricornio = () => {
	return (
		
		<div className="background">
	
		<div className="generichoroscope">
			<div className="generichoroscope__divivage">
				<img src={capricorniomarco}alt="" className="generichoroscope__divimage__image"/>
			</div>
			<div>
			<div className="generichoroscope__text">
			<h2 className="generichoroscope__h2">Características</h2>
			<h3 className="generichoroscope__h3">Del 22 de diciembre al 20 de enero</h3>
				<p className='generichoroscope-paragraph'>Estabilidad, seguridad y tranquilidad es lo que mejor define a un <span className='generichoroscope-paragraph__strong'>Capricornio</span>. Son personas justas y exigentes con los demás, porque también lo son con ellos mismos. Suelen perder el control de sus emociones, por lo que es fácil que sean pesimistas y melancólicos, pero siempre tratan de buscar ayuda. Por eso es recomendable que mantengan la estabilidad emocional a través de la meditación, respiración o actividades que les ayuden a relajarse.</p>
				
			</div>
			<div className="opciones">
					
					<Link to="/Horoscopos" className="link">
						<i className="fa-solid fa-chevron-left"></i>Volver
					</Link>
				{/* 	<Link to="/Famosos-de-tu-signo" className="link">
					Famosos de este signo  <i className="fa-solid fa-chevron-down"></i>
					</Link> */}
					<Link to="/Relaciones" className="link">Chequea la compatibilidad 	<i className="fa-solid fa-chevron-right"></i>	
					</Link>
					
					</div>
				</div>
		</div>
		</div>
	);
};
export default Capricornio;