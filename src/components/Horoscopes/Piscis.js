import "../../styles/GenericHorocscope.scss";
import { Link } from "react-router-dom";
import piscismarco from "../../images/marco/piscismarco.png"

const Piscis = () => {
	return (
		
		<div className="background">

		<div className="generichoroscope">
			<div className="generichoroscope__divivage">
				<img src={piscismarco}alt="" className="generichoroscope__divimage__image"/>
			</div>
			<div>
			<div className="generichoroscope__text">
			<h2 className="generichoroscope__h2">Características</h2>
			<h3 className="generichoroscope__h3">Del 20 de febrero al 20 de marzo</h3>
				<p className='generichoroscope-paragraph'>Son tranquilos, amables y pacientes. Los <span className='generichoroscope-paragraph__strong'>Piscis</span> son sensibles a los sentimientos de los demás y responden con simpatía al tacto y al sufrimiento. Son queridos por el resto de los signos, debido al carácter afable, cariñoso y amable. Les preocupan más los problemas de los demás que los suyos propios. Eso sí, les cuesta mucho luchar por el poder establecido. Son creativos y artísticos.</p>
				
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
export default Piscis;