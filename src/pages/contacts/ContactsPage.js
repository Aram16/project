import React from 'react';
import Footer from '../../components/footer/index';
import UserForm from '../../components/contacts/userForm';
import Address from '../../components/contacts/address';
import MessageForm from '../../components/contacts/messageForm';
import './index.css'
import Navbar from '../../components/navbar';

const ContactsPage = () => {
    return (
        <div className="contacts">
            <Navbar />
            <h1>CONTACT US</h1>
            <MessageForm />
            <div className="contact-address">
                <Address />
            </div>
            <Footer />
        </div>
    );
};

export default ContactsPage;
{/* <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3049.1366386406826!2d44.29580741538807!3d40.16151137939557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406a94d7cd99e2af%3A0xf547dc2a378df4d4!2sMachanents%20Tourism%20%26%20Art!5e0!3m2!1sru!2s!4v1623930544202!5m2!1sru!2s"
            width="600"
            height="450" 
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy"
        >
        </iframe> */}