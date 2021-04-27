import React, { useReducer, useState } from 'react';


const formReducer = (state, event) => {
 return {
   ...state,
   [event.name]: event.value
 }
}

export default function FormHandling() {
  const [formData, setFormData] = useReducer(formReducer, {});

  const handleSubmit = event => {
    event.preventDefault();
    fetch("http://174.138.103.233/api/employees", {
      method: 'POST', 
     headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData) // body data type must match "Content-Type" header
    })
  }

  const handleChange = event => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  }

  return(
    <div className="wrapper">
      <h1>Person List</h1>

      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Name</p>
            <input name="firstName" onChange={handleChange}/>
          </label>
          <label>
            <p>Last Name</p>
            <input name="lastName" onChange={handleChange}/>
          </label>
          <label>
            <p>Gender</p>
            <input name="gender" onChange={handleChange}/>
          </label>
          <label>
            <p>Birthday</p>
            <input name="birthday" type="date" onChange={handleChange}/>
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

