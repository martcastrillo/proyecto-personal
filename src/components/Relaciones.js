import "../styles/Relaciones.scss";
import aquario from "../images/signs/AQUARIO.png";
import aries from "../images/signs/ARIES.png";
import cancer from "../images/signs/CANCER.png";
import capricornio from "../images/signs/CAPRICORNIO.png";
import escorpio from "../images/signs/ESCORPIO.png";
import geminis from "../images/signs/GEMINIS.png";
import leo from "../images/signs/LEO.png";
import libra from "../images/signs/LIBRA.png";
import piscis from "../images/signs/PISCIS.png";
import sagitario from "../images/signs/SAGITARIO.png";
import tauro from "../images/signs/TAURO.png";
import virgo from "../images/signs/VIRGO.png";
import int from "../images/signs/INTERROGATION.png";
import relations from "../services/relations.json";
import { useState } from "react";
const Relaciones = () => {
	const [hscp1, setHscp1] = useState("");
	const [hscp2, setHscp2] = useState("");
	const [hscpImg1, setHscpImg1] = useState(int);
	const [hscpImg2, setHscpImg2] = useState(int);

	const handleOnChange = (ev) => {
		let value = ev.target.value;
		setHscp1(value);
		if (value === "Acuario") {
			setHscpImg1(aquario);
		}
		if (value === "aries") {
			setHscpImg1(aries);
		}
		if (value === "cancer") {
			setHscpImg1(cancer);
		}
		if (value === "capricornio") {
			setHscpImg1(capricornio);
		}
		if (value === "escorpio") {
			setHscpImg1(escorpio);
		}
		if (value === "geminis") {
			setHscpImg1(geminis);
		}
		if (value === "leo") {
			setHscpImg1(leo);
		}
		if (value === "libra") {
			setHscpImg1(libra);
		}
		if (value === "piscis") {
			setHscpImg1(piscis);
		}
		if (value === "sagitario") {
			setHscpImg1(sagitario);
		}
		if (value === "tauro") {
			setHscpImg1(tauro);
		}
		if (value === "virgo") {
			setHscpImg1(virgo);
		}
	};
	const handleOnChange2 = (ev) => {
		let value = ev.target.value;
		setHscp2(value);
		if (value === "acuario") {
			setHscpImg2(aquario);
		}
		if (value === "aries") {
			setHscpImg2(aries);
		}
		if (value === "cancer") {
			setHscpImg2(cancer);
		}
		if (value === "capricornio") {
			setHscpImg2(capricornio);
		}
		if (value === "escorpio") {
			setHscpImg2(escorpio);
		}
		if (value === "geminis") {
			setHscpImg2(geminis);
		}
		if (value === "leo") {
			setHscpImg2(leo);
		}
		if (value === "libra") {
			setHscpImg2(libra);
		}
		if (value === "piscis") {
			setHscpImg2(piscis);
		}
		if (value === "sagitario") {
			setHscpImg2(sagitario);
		}
		if (value === "tauro") {
			setHscpImg2(tauro);
		}
		if (value === "virgo") {
			setHscpImg2(virgo);
		}
	};



	const htmlData = relations.filter((group) => {
		let result = '';
		if ((hscp1 === group.hsc1 && hscp2 === group.hsc2) || (hscp1 === group.hsc2 && hscp2 === group.hsc1)) {

			console.log('coincide');
			result = true;
			
		}
		return result;
	})
		.map((group, index) => {

			return (
				<h3 className="text_relations js_text_relations" key={index}>{group.text}</h3>
			)
		});



	return (
		<div>
			<div className="relations">

				<span className="relations__sign">

					<span className="spantext"><h2 className="relations__hrscpB">{hscp1}</h2>
						<span className="spanimg">		<img src={hscpImg1} alt="" className="relations__sign__image " /></span>
					</span>	<span className="selection">
						<form action="">
							<select className="select" name="" id="" onChange={handleOnChange}>
								<option value="default" selected disabled hidden>Choose here</option>
								<option value="acuario">Acuario</option>
								<option value="aries">Aries</option>
								<option value="cancer">Cáncer</option>
								<option value="capricornio">Capricornio</option>
								<option value="escorpio">Escorpio</option>
								<option value="geminis">Géminis</option>
								<option value="leo">Leo</option>
								<option value="libra">Libra</option>
								<option value="piscis">Piscis</option>
								<option value="sagitario">Sagitario</option>
								<option value="tauro">Tauro</option>
								<option value="virgo">Virgo</option>
							</select>
						</form>
					</span>
				</span>
				<h2 className="VS">VS</h2>
				<span className="relations__sign">

					<span className="spantext"><h2 className="relations__hrscpB">{hscp2}</h2>
						<span className="spanimg">	<img src={hscpImg2} alt="" className="relations__sign__image " /></span></span>
					<span className="selection">
						<form action="">
							<select className="select" name="" id="" onChange={handleOnChange2}>
								<option value="default" selected disabled hidden>Choose here</option>
								<option value="acuario">Acuario</option>
								<option value="aries">Aries</option>
								<option value="cancer">Cáncer</option>
								<option value="capricornio">Capricornio</option>
								<option value="escorpio">Escorpio</option>
								<option value="geminis">Géminis</option>
								<option value="leo">Leo</option>
								<option value="libra">Libra</option>
								<option value="piscis">Piscis</option>
								<option value="sagitario">Sagitario</option>
								<option value="tauro">Tauro</option>
								<option value="virgo">Virgo</option>

							</select>
						</form>
						{/* <h2 className="rbutton"> Horóscopo Random</h2> */}
					</span>
				</span>
			</div>


			{htmlData}

		</div>
	);
};
export default Relaciones;
