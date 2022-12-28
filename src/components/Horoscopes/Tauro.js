import "../../styles/GenericHorocscope.scss";
import { Link } from "react-router-dom";
import tauromarco from "../../images/marco/tauromarco.png"

const Tauro = () => {
	return (
		
		<div className="background">

		<div className="generichoroscope">
			<div className="generichoroscope__divivage">
				<img src={tauromarco}alt="" className="generichoroscope__divimage__image"/>
			</div>
			<div>
			<div className="generichoroscope__text">
			<h2 className="generichoroscope__h2">Características</h2>
			<h3 className="generichoroscope__h3">Del 21 de abril al 20 de mayo</h3>
				<p className='generichoroscope-paragraph'>Un <span className='generichoroscope-paragraph__strong'>Tauro</span>  es una persona que tiene una gran fuerza de voluntad, es práctico y decidido en la toma de decisiones. Suelen ser personas estables y conservadoras y no dudan en seguir a un líder si les despierta confianza. Son gente de paz, por lo que lo normal es que respeten las leyes y normas. El hecho de que tengan entusiasmo por la rutina y la continuidad hace que sean algo tozudos y de ideas fijas. No suelen hundirse en las dificultades y siempre salen adelante. Amantes de la buena comida, bebida y distintos placeres de la vida deben tener cuidado con los excesos.</p>
				
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
export default Tauro;