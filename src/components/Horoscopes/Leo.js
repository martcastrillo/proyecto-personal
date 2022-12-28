import "../../styles/GenericHorocscope.scss";
import { Link } from "react-router-dom";
import leomarco from "../../images/marco/leomarco.png";

const Leo = () => {
	return (
		<div className="background">
		
			<div className="generichoroscope">
				<div className="generichoroscope__divivage">
					<img
						src={leomarco}
						alt=""
						className="generichoroscope__divimage__image"
					/>
				</div>
				<div>
					<div className="generichoroscope__text">
						<h2 className="generichoroscope__h2">Características</h2>
						<h3 className="generichoroscope__h3">Del 22 de julio al 23 de agosto</h3>
						<p className="generichoroscope-paragraph">
						Es el signo más dominante del Zodiaco. Es creativo y extrovertido. Tienen ambición, fuerza, valentía y seguridad en sus capacidades. No temen a los obstáculos y suelen ser buenos, idealistas e inteligentes. Para los <span className='generichoroscope-paragraph__strong'>Leo</span>, el lujo y el poder están entre sus gustos. Asimismo, son capaces de utilizar trucos y mentiras para desacreditar a sus enemigos. A veces, también pueden caer en la superioridad y la prepotencia.
						</p>
					</div>
					<div className="opciones">
					
					<Link to="/Horoscopos" className="link">
						<i className="fa-solid fa-chevron-left"></i>Volver
					</Link>
					<Link to="/Famosos-de-tu-signo" className="link">
					Famosos de este signo  <i className="fa-solid fa-chevron-down"></i>
					</Link>
					<Link to="/Relaciones" className="link">Chequea la compatibilidad 	<i className="fa-solid fa-chevron-right"></i>	
					</Link>
					
					</div>
				</div>
			</div>
		</div>
	);
};
export default Leo;
