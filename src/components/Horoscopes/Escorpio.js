import "../../styles/GenericHorocscope.scss";
import { Link } from "react-router-dom";
import escorpiomarco from "../../images/marco/escorpiomarco.png"

const Escorpio = () => {
	return (
		
		<div className="background">

		<div className="generichoroscope">
			<div className="generichoroscope__divivage">
				<img src={escorpiomarco}alt="" className="generichoroscope__divimage__image"/>
			</div>
			<div>
			<div className="generichoroscope__text">
			<h2 className="generichoroscope__h2">Características</h2>
			<h3 className="generichoroscope__h3">Del 24 de octubre al 22 de noviembre</h3>
				<p className='generichoroscope-paragraph'>Un <span className='generichoroscope-paragraph__strong'>Escorpio</span>  es una persona tranquila que parece alejada de la realidad, aunque nunca dejan de observar todo a su alrededor con el ojo crítico. Tienen mucha fuerza de voluntad y muestran tenacidad , pero también les afecta al estado de ánimo las circunstancias que les rodean. Suelen ser críticos y esto les lleva, a veces, a ser algo resentidos con los demás. Sin embargo son excelentes amigos de aquellos a los que consideran que merecen su respeto.</p>
				
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
export default Escorpio;