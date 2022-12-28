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
			<h3 className="generichoroscope__h3">Del  22 de junio al 21 de julio</h3>
				<p className='generichoroscope-paragraph'>Los <span className='generichoroscope-paragraph__strong'>Cáncer</span>  son personas complicadas de clasificar, si se atiende a su carácter. Los hay tímidos y aburridos , pero también brillantes y famosos . De hecho, algunos presentan una alta capacidad literaria y artística, gracias a su capacidad imaginativa. Les encanta ser extrovertidos, pero también tienen tendencia a retraerse. El hogar es lo más importante para ellos, por la seguridad y el calor que encuentran en él.</p>
				
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
export default Cancer;