import "../styles/Famoushoroscope.scss";

import famousframe from "../images/famous-frame.png"
const Famoso = () => {
	return (
		
		<div >
	
		<div className="famous">
        <div className="background" >
			<div className="famous__text">
		
                   <h2 className="famous__h2">Isabel Pantoja - Leo</h2>
             
				<p >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui maiores
				consequatur dolor aperiam fugiat voluptas, soluta, repellendus assumenda
				asperiores exercitationem minus labore ducimus unde quo veniam
				doloremque itaque tempora eum?</p>
		
			
				
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