import './Contact.scss'
import Loader from 'react-loaders'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal)

const Contact = () => {

    const refForm = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            'service_civlkgw',
            'template_cjz7nec',
            refForm.current,
            '0ibMOEEIkDewL3hAe'
        )
        .then(
            ()=>{
                Swal.fire(
                    {   text: 'Thanks for get in touch!',
                        icon: 'success',
                        iconColor: "orange",
                        confirmButtonColor: 'orange'
                    },
                    refForm.current.reset()
                );
                
            },
            (erorr)=>{
                alert('Failed to send the message, please try again');
                console.log(erorr)
            }
        );
        
    }

    return (
        <div>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <div className='text-place'>
                        <h1>Contact <p className='letter-r'>M</p>e</h1>
                        <div className='text-container'>
                            <p className='text'>I'm interested in jobs opportunities - especially ambitous or 
                            large projects-. <br />Hownever, if you have other request or question, 
                            don't hesitate to contact me using the form either, or throught my social networks</p>
                        </div>
                    </div>
                </div>
                <div className='form-container'>
                    <form className='contact-form' ref={refForm} onSubmit={sendEmail}> 
                        <input className='input-field' type='text' name='form_name' placeholder='Name' required />
                        <input className='input-field' type='text' name='form_subject' placeholder='Subject' required />
                        <input className='input-field' type='email' name='form_email' placeholder='Email' required />
                        <textarea className="text-field" name='message' placeholder='Message' required />
                        <button type='submit' className='flat-button' > SEND<p className="down-slash">_</p></button>
                    </form>
                </div>
            </div>
            <Loader type='cube-transition' />
        </div>
    )
}

export default Contact