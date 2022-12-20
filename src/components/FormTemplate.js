import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const FormTemplate = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        const formMessage = document.querySelector('.form-message')
        emailjs.sendForm('service_mlirvt8', 'template_k32yaad', form.current, 
        process.env.REACT_APP_ID)
            .then((result) => {
                console.log(result.text);
                form.current.reset()
                formMessage.innerHTML="<p class='success'>Message envoyer</p>";
                //faire disparaitre notre message success
                setTimeout(() => {
                    formMessage.innerHTML="";
                }, 2500);


            }, (error) => {
                console.log(error.text);
                formMessage.innerHTML="<p class='error'>Une erreur s'est produite veuillez reessayer </p>";
                //faire disparaitre notre message  error
                setTimeout(() => {
                    formMessage.innerHTML="";
                }, 2500);
            });
    };

    return (
        <div className="form-container">
            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="name"  required autoComplete='off' />
                <label>Email</label>
                <input type="email" name="email" required  autoComplete='off' />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>
            <div className="form-message">
                
            </div>
        </div>

    );
};

export default FormTemplate;