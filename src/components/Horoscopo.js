import { Link } from "react-router-dom";
import datadev from "../services/data.json";
const Inicio = () => {
	const htmlData = datadev.map((horoscope, index) => {
		
		return (
			<Link to={horoscope.link} className="onehoroscope" key={index}>
					<p className="onehoroscope__name">{horoscope.name}</p>
					<img className="onehoroscope__img" src={horoscope.image_1} alt="" />
				</Link>
		)
	});

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
				{htmlData}
			</div>
		
		</div>
	);
};
export default Inicio;
