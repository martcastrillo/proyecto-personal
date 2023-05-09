import "../../styles/GenericHorocscope.scss";
import { Link } from "react-router-dom";
import libramarco from "../../images/marco/libramarco.png"

const Libra = () => {
	return (
		<div className="background">
	
		<div className="generichoroscope">
			<div className="generichoroscope__divivage">
				<img src={libramarco}alt="" className="generichoroscope__divimage__image"/>
			</div>
			<div>
			<div className="generichoroscope__text">
			<h2 className="generichoroscope__h2">Características</h2>
			<h3 className="generichoroscope__h3">Del 24 de septiembre al 23 de octubre</h3>
				<p className='generichoroscope-paragraph'>El signo del Zodiaco más civilizado . Tienen encanto, elegancia, buen gusto y son amables y pacíficos, por lo que no es raro que ante conflictos sean imparciales y muestren su rechazo a ellos. Valoran el esfuerzo de los demás y les gusta trabajar en equipo. El lado negativo de <span className='generichoroscope-paragraph__strong'>Libra</span>  es que de lo curiosos que son a veces se entrometen en la vida de los demás . Están en contra de la rutina, y una vez que tengan una opinión de algo no les gusta que se les contradiga.</p>
				
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
export default Libra;