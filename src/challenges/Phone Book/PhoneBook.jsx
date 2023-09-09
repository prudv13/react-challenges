import React, { useState } from 'react'

const InputForm = ({type, placeholder, value, setInput}) => {

    function handleChange(e){
        setInput(e.target.value);
    }
    return (  
        <input 
            type={type}
            className='form-control mb-2'
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
        />
    );
}

const DisplayTable = ({data}) => {
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Phone Number</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((person) => (
                        <tr key={person.phoneNumber}>
                            <td>{person.firstName}</td>
                            <td>{person.lastName}</td>
                            <td>{person.phoneNumber}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
}

const PhoneBook = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [data, setData] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newData = {firstName, lastName, phoneNumber};
        setData([...data, newData])
        setFirstName("");
        setLastName("");
        setPhoneNumber("");
    }

    data.sort((a,b) => a.lastName.toLowerCase() > b.lastName.toLowerCase() ? 1 : -1);
    
  return (
    <div className='d-flex flex-column gap-4 align-items-center'>
      <form onSubmit={handleSubmit}>
        <InputForm 
            type='text' 
            placeholder='first name' 
            value={firstName} 
            setInput={setFirstName} 
        />
        <InputForm 
            type='text' 
            placeholder='last name' 
            value={lastName} 
            setInput={setLastName} 
        />
        <InputForm 
            type='text' 
            placeholder='phone number' 
            value={phoneNumber} 
            setInput={setPhoneNumber} 
        />

        <button 
            type='submit' 
            className='btn btn-info btn-sm'
        >
        submit
        </button>
      </form>

      <DisplayTable data={data} />
    </div>
  )
}

export default PhoneBook;
