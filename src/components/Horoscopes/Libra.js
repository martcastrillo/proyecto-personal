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
				<p className='generichoroscope-paragraph'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui maiores
				consequatur dolor aperiam fugiat voluptas, soluta, repellendus assumenda
				asperiores exercitationem minus labore ducimus unde quo veniam
				doloremque itaque tempora eum?</p>
				<p className='generichoroscope-paragraph'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui maiores
				consequatur dolor aperiam fugiat voluptas, soluta, repellendus assumenda
				asperiores exercitationem minus labore ducimus unde quo veniam
				doloremque itaque tempora eum?</p>
				<p className='generichoroscope-paragraph'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui maiores
				consequatur dolor aperiam fugiat voluptas, soluta, repellendus assumenda
				asperiores exercitationem minus labore ducimus unde quo veniam
				doloremque itaque tempora eum?</p>
				
			</div>
			<Link to="/Horoscopos" className="link">
				
					<i className="fa-solid fa-chevron-left"></i>Return
				</Link>
				</div>
		</div>
		</div>
	);
};
export default Libra;