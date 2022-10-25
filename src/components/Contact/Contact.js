import React, {useState} from 'react';
import ContactList from '../ContactList/ContactList';
import ContactForm from '../ContactForm/ContactForm';

function Contact() {
  const [contacts, setContacts] = useState([
    {full_name: 'Pooja', phone_number: '9763344297'},
    {full_name: 'Atish', phone_number: '9960461041'},
    {full_name: 'Janardhan', phone_number: '9561239629'}
  ]);
  return (
    <div id='container'>
        <div id='box'>
            <ContactList contacts={contacts} />
            <ContactForm contacts={contacts} addContacts={setContacts} />
        </div>
    </div>
  );
}
export default Contact;
