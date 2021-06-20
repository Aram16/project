import svarka from '../../assets/logo/svarka.png'
import mard from '../../assets/logo/mard.png'
import mardd from '../../assets/logo/mardd.png'
import armatura from '../../assets/logo/armatura.png'
import shenqer from '../../assets/logo/shenqer.png'
import sxoc from '../../assets/logo/sxoc.png'
import rectan from '../../assets/logo/rectangleeee.png'
import recta from '../../assets/logo/rectangleee.png'
import rect from '../../assets/logo/rectanglee.png'
import rec from '../../assets/logo/rectangle.png'

const Image = () => {
    return (
        <div>
            <div className="image">
                <div className="displayy-grid">
                    <div>
                        <img src={svarka}/>
                    </div>
                    <div>
                        <img src={mard} />
                    </div>
                    <div>
                        <img src={armatura} />
                    </div>
                    <div>
                        <img src={shenqer}/>
                    </div>
                    <div>
                        <img src={sxoc}/>
                    </div>
                </div>
                <div className="displayy-grid">
                    <div>
                        <img src={rectan}/>
                    </div>
                    <div>
                        <img src={recta} />
                    </div>
                    <div>
                        <img src={rect} />
                    </div>
                    <div>
                        <img src={rec}/>
                    </div>
                    <div>
                      <img src={mardd} className="mardd"/>
                    </div>
                      
                </div>
            </div>  
        </div>
    );
  };
  
  export default Image;
 