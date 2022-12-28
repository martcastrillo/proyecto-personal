import "../styles/Famoushoroscope.scss";

import famousframe from "../images/famous-frame.png"
const Famoso = () => {
	return (
		
		<div >
	
		<div className="famous">
        <div className="background" >
			<div className="famous__text">
		
                   <h2 className="famous__h2">Isabel Pantoja - Leo</h2>
             
				<p className="famous__p" >María Isabel Pantoja Martín (Sevilla, 2 de agosto de 1956) es una cantante y actriz española. Es una de las cantantes más famosas e importantes de la historia de España, siendo una de las personas más perseguidas y fotografiadas de la prensa Española. </p>
		
			
				
			</div>
            <div className="famous__buttons">
            <h2 className='fbutton'> Famoso Random</h2>
           <h2 className='fbutton'> Horóscopo Random</h2>
            </div>
      
				</div>
			<div className="famous__divimage">
				<img src={famousframe}alt="" className="famous__divimage__image"/>
			</div>
		
		</div>

		</div>
	);
};
export default Famoso;