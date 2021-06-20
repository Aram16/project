import React from 'react';
import Footer from '../../components/footer/index';
import UserForm from '../../components/contacts/userForm';
import Address from '../../components/contacts/address';
import MessageForm from '../../components/contacts/messageForm';
import './index.css'
import Navbar from '../../../armenia/components/navbar/index';

const ContactsPage = () => {
    return (
        <div className="contacts">
            <Navbar />
            <h1>Կապվեք մեզ հետ</h1>
            <MessageForm />
            <div className="contact-address">
                <Address />
            </div>
            <Footer />
        </div>
    );
};

export default ContactsPage;