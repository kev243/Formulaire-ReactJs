import React, { useRef,useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import {supabase} from '../client'


const FormTemplate = () => {
    // variable supabase
    const[post,setPost]=useState({name:"", email:"", message:""})
    const {name,email,message}=post

   

    // fonction post dans la bd supabase
    async function createPost(){ await supabase.from('clients').insert([{name, email, message}]).single()
    setPost({name:"", email:"", message:""});
    
    }

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

            // on appel notre fonction pour envoyer les informations a la bd
           createPost()
            
    };

    return (
        <div className="form-container">
            <form ref={form} onSubmit={ sendEmail}>
          
                <label>Name</label>
                <input type="text" name="name" value={name}  required autoComplete='off' onChange={e=>setPost({...post ,name:e.target.value})}  />
                <label>Email</label>
                <input type="email" name="email" value={email} required  autoComplete='off'  onChange={e=>setPost({...post ,email:e.target.value})} />
                <label>Message</label>
                <textarea name="message"  value={message} onChange={e=>setPost({...post ,message:e.target.value})}/>
                <input type="submit" value="Send" />
             
            </form>
            <div className="form-message">
                
            </div>
        </div>
//123alpharomeo@
    );
};

export default FormTemplate;