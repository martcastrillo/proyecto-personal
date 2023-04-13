import { Link } from "react-router-dom";
import tauro from "../images/horoscope-icon/tauro.png";
import leo from "../images/horoscope-icon/leo.png";
import escorpio from "../images/horoscope-icon/escorpio.png";
import geminis from "../images/horoscope-icon/geminis.png";
import libra from "../images/horoscope-icon/libra.png";
import aries from "../images/horoscope-icon/aries.png";
import piscis from "../images/horoscope-icon/piscis.png";
import capricornio from "../images/horoscope-icon/capricornio.png";
import acuario from "../images/horoscope-icon/acuario.png";
import cancer from "../images/horoscope-icon/cancer.png";
import virgo from "../images/horoscope-icon/virgo.png";
import sagitario from "../images/horoscope-icon/sagitario.png";

const Inicio = () => {

	return (
		<div className="background-main">
			<form action="" className="form">
				<input type="radio" />
				<label htmlFor=""> Fuego</label>
				<input type="radio" />
				<label htmlFor=""> Tierra</label>
				<input type="radio" />
				<label htmlFor=""> Aire</label>
				<input type="radio" />
				<label htmlFor=""> Agua</label>
			</form>
			<div className="mainhoroscope">
			
			 <Link to="/Aries" className="onehoroscope">
					<p className="onehoroscope__name">aries</p>
					<img className="onehoroscope__img" src={aries} alt="" />
				</Link>
				<Link to="/Tauro" className="onehoroscope">
					<p className="onehoroscope__name">tauro</p>
					<img className="onehoroscope__img" src={tauro} alt="" />
				</Link>
				<Link to="/Geminis" className="onehoroscope">
					<p className="onehoroscope__name">geminis</p>
					<img className="onehoroscope__img" src={geminis} alt="" />
				</Link>
				<Link to="/Cancer" className="onehoroscope">
					<p className="onehoroscope__name">cancer</p>
					<img className="onehoroscope__img" src={cancer} alt="" />
				</Link>
				<Link to="/Leo" className="onehoroscope">
					<p className="onehoroscope__name">leo</p>
					<img className="onehoroscope__img" src={leo} alt="" />
				</Link>
				<Link to="/Virgo" className="onehoroscope">
					<p className="onehoroscope__name">virgo</p>
					<img className="onehoroscope__img" src={virgo} alt="" />
				</Link>
				<Link to="/Libra" className="onehoroscope">
					<p className="onehoroscope__name">libra</p>
					<img className="onehoroscope__img" src={libra} alt="" />
				</Link>
				<Link to="/Escorpio" className="onehoroscope">
					<p className="onehoroscope__name">escorpio</p>
					<img className="onehoroscope__img" src={escorpio} alt="" />
				</Link>
				<Link to="/Sagitario" className="onehoroscope">
					<p className="onehoroscope__name">sagitario</p>
					<img className="onehoroscope__img" src={sagitario} alt="" />
				</Link>
				<Link to="/Capricornio" className="onehoroscope">
					<p className="onehoroscope__name">capricornio</p>
					<img className="onehoroscope__img" src={capricornio} alt="" />
				</Link>
				<Link to="/Acuario" className="onehoroscope">
					<p className="onehoroscope__name">acuario</p>
					<img className="onehoroscope__img" src={acuario} alt="" />
				</Link>
				<Link to="/Piscis" className="onehoroscope">
					<p className="onehoroscope__name">piscis</p>
					<img className="onehoroscope__img" src={piscis} alt="" />
				</Link> 
			</div>
		
		</div>
	);
};
export default Inicio;
