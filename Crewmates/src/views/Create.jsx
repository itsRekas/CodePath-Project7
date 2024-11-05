import React, { useState } from 'react'
import { supabase } from '../client'


const Create = ({setData}) => {

  const [formData, setFormData] = useState({
    name: '',
    speed: '',
    color: '',
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const submit = async (event) => {
    event.preventDefault(); 
    await supabase.from('Crewmate').insert({
      Name: formData.name,
      Speed: formData.speed,
      Color: formData.color,
    });
    setData(true);
    window.location = "/gallery";
  };

  return (
    <div className='view Create'>
      <div className='inner'>
        <h1>Create a New Crewmate</h1>
        <img src="https://shimmering-stardust-c75334.netlify.app/assets/crewmates.43d07b24.png" alt="amongus" />
        <form onSubmit={submit}>
          <div className='form'>
            <div className='input'>
              <h2>Name:</h2>
              <input
                type="text"
                name="name"
                placeholder="Enter crewmate's name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className='input'>
              <h2>Speed (mph):</h2>
              <input
                type="text"
                name="speed"
                placeholder="Enter speed in mph"
                value={formData.speed}
                onChange={handleChange}
              />
            </div>
            <div className='color'>
              <h2>Color:</h2>
              <ul>
                {['Red', 'Blue', 'Green', 'Grey', 'Yellow', 'Brown', 'Pink'].map(color => (
                  <li key={color}>
                    <input
                      id={color.toLowerCase()}
                      name="color"
                      type="radio"
                      value={color}
                      checked={formData.color === color}
                      onChange={handleChange}
                    />
                    <label htmlFor={color.toLowerCase()}>{color}</label>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <button type="submit">Create Crewmate</button>
        </form>
      </div>
    </div>
  );
}

export default Create