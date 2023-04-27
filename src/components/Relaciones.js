import "../styles/Relaciones.scss";
import aquario from "../images/signs/AQUARIO.png";
import virgo from "../images/signs/VIRGO.png";
const Relaciones = () => {
	return (
		<div>
			<div className="relations">
				<span className="relations__sign">
					<img src={aquario} alt="" className="relations__sign__image" />
					<h2 className="relations__hrscpA">Aquario</h2>
					<span className="selection">
					<form action="">
							<select className="select" name="" id="">
							<option value="">Acuario</option>
							<option value="">Aries</option>
							<option value="">Cáncer</option>
							<option value="">Capricornio</option>
							<option value="">Escorpio</option>
							<option value="">Géminis</option>
							<option value="">Leo</option>
							<option value="">Libra</option>
							<option value="">Piscis</option>
							<option value="">Sagitario</option>
							<option value="">Tauro</option>
							<option value="">Virgo</option>
							</select>
						</form>
						</span>
				</span>
				<h2 className="VS">VS</h2>
				<span className="relations__sign">
					<img src={virgo} alt="" className="relations__sign__image" />
					<h2 className="relations__hrscpB">Virgo</h2>
					<span className="selection">
						
						<form action="">
							<select className="select" name="" id="">
							<option value="">Virgo</option>
							<option value="">Acuario</option>
							<option value="">Aries</option>
							<option value="">Cáncer</option>
							<option value="">Capricornio</option>
							<option value="">Escorpio</option>
							<option value="">Géminis</option>
							<option value="">Leo</option>
							<option value="">Libra</option>
							<option value="">Piscis</option>
							<option value="">Sagitario</option>
							<option value="">Tauro</option>
						
							</select>
						</form>
						<h2 className="rbutton"> Horóscopo Random</h2>
					</span>
				</span>
			</div>

			<h3 className="text_relations">
			Cuando se trata de sus relaciones sentimentales, Virgo y Acuario comparten una personalidad curiosa que hace que experimenten constantemente en diferentes terrenos, Acuario sobre todo, quien adora la aventura arrastrando a Virgo consigo, ¿y qué aventura hay más excitante que el amor?
			</h3>
		</div>
	);
};
export default Relaciones;
