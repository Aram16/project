import emailjs from 'emailjs-com';
import React from 'react';
import'./index.css'

const MessageForm = () => {
    const sendEmail = (e) =>{
        e.preventDefault();

        emailjs.sendForm('default_service', 'template_ph1uvke', e.target, 'user_Gf7LnIX8yVebQUFeJyel8')
        .then((resp) => {
            console.log(resp, 'Thank You');
        }, (err) => {
            console.log(err ,'error');
        });

        e.target.reset()
    }

    const showInput = (e) =>{
        console.log(e.target.value);
    }
    return(
        <div>
        <div className="form">
            <div className="contaiiner">
                        <div className="title">Ուղարկել Հաղորդագրություն</div>
                <div className="content" >
                    <form onSubmit={sendEmail}>
                        <div className="user-details">
                            <div className="input-box">
                                <span className="details"> Անունը</span>
                                <input
                                    type="text"
                                    name="name"
                                    onInput={showInput} 
                                    placeholder="Մուտքագրեք ձեր անունը" required 
                                />
                            </div>
                            <div className="input-box">
                                <span className="details">Էլ. հասցե</span>
                                <input 
                                    type="text" 
                                    name="email"
                                    onInput={showInput} 
                                    placeholder="Մուտքագրեք ձեր Էլ. փոստի հասցեն" required 
                                />
                            </div>
                            <div className="input-box">
                                <span className="details"> Հաղորդագրություն</span>
                                <textarea 
                                    type="text"
                                    name="message"
                                    onInput={showInput}
                                    placeholder="Հաղորդագրություն" required 
                                />
                            </div>
                        </div>
                        <div className="gender-details">
                            </div>
                                <div className="button">
                                <input type="submit" value="Ուղարկել " />
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </div>
    )
}

export default MessageForm