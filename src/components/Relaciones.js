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
						{/* <h2 className="rbutton"> Horóscopo Random</h2> */}
					</span>
				</span>
			</div>

			<h3 className="text_relations">
			Aries es un signo cardinal, y dos personas nacidas bajo este signo comparten esa característica en común; con ello, no es muy difícil deducir que presentan, más o menos, los mismos rasgos, para bien y para mal. Generalmente, aborrecen y aprecian las mismas cosas, así que, en principio, suelen congeniar estupendamente. En el ámbito profesional tienen talento para el mando, aunque cuando tienen que trabajar conjuntamente deben intentar no imponer su voluntad a la otra parte, pues si lo hacen se perderán en unas luchas de poder improductivas.			</h3>
		</div>
	);
};
export default Relaciones;
