import React from 'react';
import girl from '../../../assets/logo/girl.png'
import '../chess/index.css';


const ProgrammingNews = ({laboratoryprogram}) => {
    return (
        <div>
             <div  className="enginner-div">
                    <div>
                        <h3 className="chess-h3">
                            PROGRAMMING LABORATORY
                        </h3>
                        <p className="chess-p">
                            {laboratoryprogram}
                        </p>
                        <h4 className="h4">CONDITIONS:</h4>
                        <div className="eng">
                            <div>
                                <p><b>Age:</b> 16</p>
                            </div>
                            <div>
                                <p><b>Grafic:</b> 2 days in week</p>
                            </div>
                            <div>
                                <p><b>Knowlage:</b> beginner</p>
                            </div>
                            <div>
                                <p><b>Tevoghutyun:</b> 10 mounth</p>
                            </div>
                            <div>
                                <p><b>Price:</b> Free</p>
                            </div>
                        </div>
                        <h4 className="chess-h4">TEACHERS</h4>
                        <div className="teachers-div">
                            <div className="image">
                                <img src={girl}  />
                            </div>
                            <div className="lorem">
                                <p className="p"><b>LIA MORTINEZ</b><br />ADOBE PHOTOSHOP, ADOBE ILLUSTRATOR</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ipsum, eligendi voluptatum laborum distinctio laboriosam assumenda aspernatur facilis mollitia quos similique, porro cum esse unde quasi quaerat, laudantium amet soluta.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ipsum, eligendi voluptatum laborum distinctio laboriosam assumenda aspernatur facilis mollitia quos similique, porro cum esse unde quasi quaerat, laudantium amet soluta.</p>
                            </div>
                        </div>
                         <div className="teachers-div">
                             <div className="image">
                                 <img src={girl}  />
                             </div>
                             <div className="lorem">
                                 <p className="p"><b>LIA MORTINEZ</b><br />ADOBE PHOTOSHOP, ADOBE ILLUSTRATOR</p>
                                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ipsum, eligendi voluptatum laborum distinctio laboriosam assumenda aspernatur facilis mollitia quos similique, porro cum esse unde quasi quaerat, laudantium amet soluta.
                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ipsum, eligendi voluptatum laborum distinctio laboriosam assumenda aspernatur facilis mollitia quos similique, porro cum esse unde quasi quaerat, laudantium amet soluta.</p>
                             </div>
                         </div>
                     </div>
             </div> 
            {/* <Footer /> */}
        </div>
    );
};

export default ProgrammingNews;