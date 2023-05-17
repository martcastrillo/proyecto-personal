import "../../styles/GenericHorocscope.scss";
import { Link } from "react-router-dom";
import cancermarco from "../../images/marco/cancermarco.png"

const Cancer = () => {
	return (
		
		<div className="background">

		<div className="generichoroscope">
			<div className="generichoroscope__divivage">
				<img src={cancermarco}alt="" className="generichoroscope__divimage__image"/>
			</div>
			<div>
			<div className="generichoroscope__text">
			<h2 className="generichoroscope__h2">Características</h2>
			<h3 className="generichoroscope__h3">Del 21 de enero al 19 de febrero</h3>
				<p className='generichoroscope-paragraph'>Los <span className='generichoroscope-paragraph__strong'>Acuario</span> tienen una personalidad fuerte y atractiva, pero hay dos tipos : los que son tímidos, sensibles y pacientes; y los que son exuberantes, vivos y frívolos. Eso sí, ambos son honestos y no dudarán en cambiar su opinión si estaban equivocados. Es el signo más tolerante de los doce, pero tampoco les gusta pertenecer a la multitud. Muchas veces sienten la necesidad de retirarse para meditar. No hacen amigos con facilidad, a pesar de la personalidad abierta que tienen.</p>
				
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
export default Cancer;