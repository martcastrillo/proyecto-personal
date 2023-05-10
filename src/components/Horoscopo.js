import { Link } from "react-router-dom";
import {  useState } from 'react';
import datadev from "../services/data.json";
const Inicio = () => {
	const [group, setGroup] = useState('todos');
/* 	const handleSearchGroup = (ev) => {
		setGroup(ev.target.value);
		console.log(ev.target.value);
	  } */
	  const handleGroup = (ev) => {
		setGroup(ev.target.id);
		console.log(ev.target.id);
	  }
	const htmlData = datadev
    .filter((filterGroup) => {
      let result = '';
	  
      if (group === 'todos') {
		console.log('todos');
		result = true;
        return result;
      }
      else if (filterGroup.type === group) {
        console.log(filterGroup.type );
		result = true;
        return result;
		
      }
      return result;
    })
	.map((horoscope, index) => {
		
		return (
			<Link to={horoscope.link} className="onehoroscope" key={index}>
					<p className="onehoroscope__name">{horoscope.name}</p>
					<img className="onehoroscope__img" src={horoscope.image_1} alt="" />
				</Link>
		)
	});

	return (
		<div className="background-main">
			<div onClick={handleGroup} id="todos">Todos</div>
			<div onClick={handleGroup} id="fire">Fuego</div>
			<div onClick={handleGroup} id="earth">Tierra</div>
			<div onClick={handleGroup} id="agua">Agua</div>
			<div onClick={handleGroup} id="air">Aire</div>
			{/* <form action="" className="form">
			<input type="checkbox"value="todos" id="todos" onChange={handleSearchGroup}/>
				<label htmlFor=""> Todos</label>
				<input type="checkbox"  value="fire" id="fire" onChange={handleSearchGroup}/>
				<label htmlFor=""> Fuego</label>
				<input type="checkbox"  value="earth" id="earth" onChange={handleSearchGroup}/>
				<label htmlFor=""> Tierra</label>
				<input type="checkbox"   value="air" id="air" onChange={handleSearchGroup}/>
				<label htmlFor=""> Aire</label>
				<input type="checkbox" value="agua" id="agua" />
				<label htmlFor="" onClick={handleSearchGroup} value="agua"> Agua</label>
			</form> */}
			<div className="mainhoroscope">
				{htmlData}
			</div>
		
		</div>
	);
};
export default Inicio;
