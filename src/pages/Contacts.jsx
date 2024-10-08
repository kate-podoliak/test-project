import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/Contacts.scss';
import contactData from '../constants/contactData';
import geo from '../assets/img/geo.svg';
import phone from '../assets/img/phone.svg';
import email from '../assets/img/email.svg';

function Contacts() {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        setTimeout(() => {
            navigate('/');
            window.scrollTo(0, 0);
        }, 1000);
    };

    return (
        <main>
            <section className='contacts'>
                <div className="container">
                    <h2 className="contacts-title">Contacten</h2>
                    <div className="contact-info">
                        <div className="contact-item">
                            <img src={geo} alt="Location icon" className="contact-icon"/>
                            <span>{contactData.address}</span>
                        </div>
                        <div className="contact-item">
                            <img src={phone} alt="Phone icon" className="contact-icon"/>
                            <span>{contactData.phone}</span>
                        </div>
                        <div className="contact-item">
                            <img src={email} alt="Email icon" className="contact-icon"/>
                            <a href={`mailto:${contactData.email}`}>{contactData.email}</a>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input type="text" id="name" name="name" placeholder="Naam" className='contact-input'
                                   required/>
                        </div>
                        <div className="form-group">
                            <input type="email" id="email" name="email" placeholder="Mail" className='contact-input'
                                   required/>
                        </div>
                        <button type="submit">Versturen</button>
                    </form>

                    <div className='contacts-map'>
                        <iframe
                            title="Map location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2455.8934490250713!2d5.397820676964358!3d52.00881947193175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c65a4673b0df13%3A0x8b132cbf91d5cb3e!2zQnJvZWtodWl6ZXJsYWFuIDIsIDM5NTYgTlMgTGVlcnN1bSwg0J3QuNC00LXRgNC70LDQvdC00Ys!5e0!3m2!1sen!2spl!4v1728395862296!5m2!1sen!2spl"
                            width="600"
                            height="400"
                            style={{border: 0}}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Contacts;
