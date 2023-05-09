import "../../styles/GenericHorocscope.scss";
import { Link } from "react-router-dom";
import ariesmarco from "../../images/marco/ariesmarco.png"

const Aries = () => {
	return (
		
		<div className="background">
	
		<div className="generichoroscope">
			<div className="generichoroscope__divivage">
				<img src={ariesmarco}alt="" className="generichoroscope__divimage__image"/>
			</div>
			<div>
			<div className="generichoroscope__text">
			<h2 className="generichoroscope__h2">Características</h2>
			<h3 className="generichoroscope__h3">Del 21 de marzo al 20 de abril</h3>
				<p className='generichoroscope-paragraph'>Los <span className='generichoroscope-paragraph__strong'>Aries</span> son personas llenas de energía y entusiasmo por la vida. Aventureros por naturaleza, les encantan los retos, la libertad y las nuevas ideas, por lo que nunca tienen miedo a los comienzos o nuevas etapas. Son líderes y prefieren dar órdenes a recibirlas. La energía que emana de ellos les lleva a ser algo agresivos, tercos e inquietos. Si te cruzas con alguno de ellos ten cuidado de no ofenderlos, ya que pueden sentirse así de forma muy fácil. Es complicado hacer las paces con ellos. Aries es el primer signo del Zodiaco, de ahí que sean líderes y les guste empezar nuevos retos. Siempre lucharán si creen que la causa merece la pena.</p>
				
			
			
				
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
					
					</div>	</div>
		</div>
		</div>
	);
};
export default Aries;