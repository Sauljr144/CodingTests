import React, { FormEvent, useEffect, useRef, useState } from 'react'
import { getData, postData } from '../services/DataService';
import { CardData } from '../services/card-service';

const AddNames = () => {
  const [contacts, setContacts] = useState<CardData[]>([])
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [phone, setPhone] = useState(0)

  const handleSubmit =(e: FormEvent) => {
    e.preventDefault();
    addContact();
  }

  const fnameRef = useRef<HTMLInputElement>(null);
  const lnameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);

  const addContact = async () => {
    let data = {
      id: 0,
      fname: fname,
      lname: lname,
      phone: phone
    }
    console.log(data);

    setContacts([...contacts, data]);

    await postData(data);

  }

  return (
  <div className="w-96">
  
    <form className="m-5 bg-zinc-100 p-5" style={{borderRadius:'20px'}} onSubmit={handleSubmit}>
       <label className="block">
            <span className="block text-sm font-medium text-slate-700 text-base mb-3">Frist Name</span>
            <input type="name" className="mb-5 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Add First Name"
            ref={fnameRef}/>
        </label>
       <label className="block">
            <span className="block text-sm font-medium text-slate-700 text-base mb-3">Last Name</span>
            <input type="name" className="mb-3 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Add First Name"
            ref={lnameRef}/>
        </label>
       <label className="block">
            <span className="block text-sm font-medium text-slate-700 text-base mb-3">Phone Number</span>
            <input type="number" className="mb-3 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Add Phone Number" ref={phoneRef}
            />
        </label>
        <button className='rounded-full bg-indigo-500 text-indigo-50 font-semibold w-24 py-2 ' type='submit'
        >Add</button>
    </form>
  
  
    </div>
  )
}

export default AddNames
