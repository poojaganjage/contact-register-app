import React, {useState} from 'react';

function ContactList({contacts}) {
  const [filteredText, setFilteredText] = useState("")
  const filteredData = contacts.filter((item) => {
    return Object.keys(item).some((key) => item[key].toString().toLowerCase().includes(filteredText.toLowerCase()));
  });
  console.log(filteredData);
  return (
    <div>
      <h2>Contact List</h2>
      <input placeholder='search' value={filteredText} onChange={(e) => setFilteredText(e.target.value)} />
      <ul id='list'>
        {
          filteredData.map((item, index) => (
            <li key={index}>
              <span>{item.full_name}</span>
              <span>{item.phone_number}</span>
            </li>
          ))
        }
      </ul>
      <span id='totalCount'>
        Total Contacts: {filteredData.length}
      </span>
    </div>
  );
}
export default ContactList;
