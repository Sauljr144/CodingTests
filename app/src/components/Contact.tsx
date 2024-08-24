import React, { useEffect, useState } from 'react'
import Card from './Card'
import AddNames from './AddNames'
import { getData, postData } from '../services/DataService';
import { CardData } from '../services/card-service';



const Contact = () => {

  useEffect(() => {
    getContacts();
  }, []);

  const [contacts, setContacts] = useState<CardData[]>([])
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [phone, setPhone] = useState(0)

  const getContacts = async () => {
    let data = await getData();
    setContacts(data);
    console.log(data);
  }

 



  return (
    <div className='flex justify-center'>
      <div>
        {contacts.map((contact:CardData) => {
          return <Card key={contact.fname} firstname={contact.fname} lastname={contact.lname} phoneNumber={contact.phone}/>
        })}
      </div>
      <div>
        <AddNames/>
      </div>
    </div>
  )
}

export default Contact
