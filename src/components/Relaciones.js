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
	const [hscpText, setHscpText] = useState("");
	const handleOnChange = (ev) => {
		let value = ev.target.value;
		setHscp1(value);
		if(value === "Acuario" ){
			setHscpImg1(aquario);
		}
		if(value === "Aries" ){
			setHscpImg1(aries);
		}
		if(value === "Cáncer" ){
			setHscpImg1(cancer);
		}
		if(value === "Capricornio" ){
			setHscpImg1(capricornio);
		}
		if(value === "Escorpio" ){
			setHscpImg1(escorpio);
		}
		if(value === "Géminis" ){
			setHscpImg1(geminis);
		}
		if(value === "Leo" ){
			setHscpImg1(leo);
		}
		if(value === "Libra" ){
			setHscpImg1(libra);
		}
		if(value === "Piscis" ){
			setHscpImg1(piscis);
		}
		if(value === "Sagitario" ){
			setHscpImg1(sagitario);
		}
		if(value === "Tauro" ){
			setHscpImg1(tauro);
		}
		if(value === "Virgo" ){
			setHscpImg1(virgo);
		}
	};
	const handleOnChange2 = (ev) => {
		let value = ev.target.value;
		setHscp2(value);
		if(value === "Acuario" ){
			setHscpImg2(aquario);
		}
		if(value === "Aries" ){
			setHscpImg2(aries);
		}
		if(value === "Cáncer" ){
			setHscpImg2(cancer);
		}
		if(value === "Capricornio" ){
			setHscpImg2(capricornio);
		}
		if(value === "Escorpio" ){
			setHscpImg2(escorpio);
		}
		if(value === "Géminis" ){
			setHscpImg2(geminis);
		}
		if(value === "Leo" ){
			setHscpImg2(leo);
		}
		if(value === "Libra" ){
			setHscpImg2(libra);
		}
		if(value === "Piscis" ){
			setHscpImg2(piscis);
		}
		if(value === "Sagitario" ){
			setHscpImg2(sagitario);
		}
		if(value === "Tauro" ){
			setHscpImg2(tauro);
		}
		if(value === "Virgo" ){
			setHscpImg2(virgo);
		}
	};




	/* const htmlData1 = relations.map((relation, index) => {

		return (<span  key={index}><h2 className="relations__hrscpA">{relation.hsc1}</h2>
			<img src={relation.img1}alt="" className="relations__sign__image " /></span>);
	});
	const htmlData2 = relations.map((relation, index) => {

		return (<span key={index}><h2 className="relations__hrscpB">{relation.hsc2}</h2>
			<img src={relation.img2} alt="" className="relations__sign__image " /></span>);
	}); 
	setHscpImg1();
	setHscpImg2();
	setHscpText();*/




	return (
		<div>
			<div className="relations">

				<span className="relations__sign">
			{/* 		{htmlData1} */}
					<span /* key={index} */ className="spantext"><h2 className="relations__hrscpB">{hscp1}</h2>
					<span className="spanimg">		<img src={hscpImg1} alt="" className="relations__sign__image " /></span>
				</span>	<span className="selection">
						<form action="">
							<select className="select" name="" id="" onChange={handleOnChange}>
							<option value="" selected disabled hidden>Choose here</option>
								<option value="Acuario">Acuario</option>
								<option value="Aries">Aries</option>
								<option value="Cáncer">Cáncer</option>
								<option value="Capricornio">Capricornio</option>
								<option value="Escorpio">Escorpio</option>
								<option value="Géminis">Géminis</option>
								<option value="Leo">Leo</option>
								<option value="Libra">Libra</option>
								<option value="Piscis">Piscis</option>
								<option value="Sagitario">Sagitario</option>
								<option value="Tauro">Tauro</option>
								<option value="Virgo">Virgo</option>
							</select>
						</form>
					</span>
				</span>
				<h2 className="VS">VS</h2>
				<span className="relations__sign">
			{/* 		{htmlData2} */}
					<span /* key={index} */ className="spantext"><h2 className="relations__hrscpB">{hscp2}</h2>
			<span className="spanimg">	<img src={hscpImg2} alt="" className="relations__sign__image " /></span></span>
					<span className="selection">
						<form action="">
							<select className="select" name="" id="" onChange={handleOnChange2}>
							<option value="" selected disabled hidden>Choose here</option>
								<option value="Acuario">Acuario</option>
								<option value="Aries">Aries</option>
								<option value="Cáncer">Cáncer</option>
								<option value="Capricornio">Capricornio</option>
								<option value="Escorpio">Escorpio</option>
								<option value="Géminis">Géminis</option>
								<option value="Leo">Leo</option>
								<option value="Libra">Libra</option>
								<option value="Piscis">Piscis</option>
								<option value="Sagitario">Sagitario</option>
								<option value="Tauro">Tauro</option>
								<option value="Virgo">Virgo</option>

							</select>
						</form>
						{/* <h2 className="rbutton"> Horóscopo Random</h2> */}
					</span>
				</span>
			</div>

			<h3 className="text_relations js_text_relations">
				{hscpText}
			</h3>
		</div>
	);
};
export default Relaciones;
