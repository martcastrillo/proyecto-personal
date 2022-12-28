import "../../styles/GenericHorocscope.scss";
import { Link } from "react-router-dom";
import sagitariomarco from "../../images/marco/sagitariomarco.png";

const Sagitario = () => {
	return (
		<div className="background">
			<div className="generichoroscope">
				<div className="generichoroscope__divivage">
					<img
						src={sagitariomarco}
						alt=""
						className="generichoroscope__divimage__image"
					/>
				</div>
				<div>
					<div className="generichoroscope__text">
						<h2 className="generichoroscope__h2">Características</h2>
						<h3 className="generichoroscope__h3">Del 23 de noviembre al 21 de diciembre</h3>
						<p className="generichoroscope-paragraph">
						<span className='generichoroscope-paragraph__strong'>Sagitario</span>  es el signo más positivo de todo el Zodiaco . Cuando las cosas se ponen complicadas un Sagitario siempre sacará la mejor versión y se olvidará de la negatividad. Entre sus mejores características están las de ser buenos organizadores y abarcar nuevos proyectos y aprender cosas nuevas. El lado negativo es el genio que pueden mostrar a veces, sobre todo cuando detectan que alguien no va a su ritmo. Muchas veces también son exigentes con los demás , porque cuando un objetivo se les pone enfrente no dudan en sacrificarse.
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
export default Sagitario;
