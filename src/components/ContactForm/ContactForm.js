import React, {useState} from 'react';

function ContactForm({contacts, addContacts}) {
  const initialValues = {full_name: "", phone_number: ""};
  const [form, setForm] = useState(initialValues);
  const handleChange = (e) => {
    setForm({
      ...form, [e.target.name] : e.target.value
    });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(form.full_name === "" || form.phone_number === "") {
      alert("Please Enter The Data!!!");
    }
    addContacts([...contacts, form]);
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input name='full_name' type='text' placeholder='Full Name' value={form.full_name} onChange={handleChange} />
      </div>
      <div>
        <input name='phone_number' type='number' placeholder='Phone Number' maxLength='10' minLength='10' value={form.phone_number} onChange={handleChange} />
      </div>
      <div id='button'>
        <button>Add</button>
      </div>
    </form>
  );
}
export default ContactForm;
