import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../client';

const Edit = () => {
    const { id } = useParams();
    const [crewmate, setCrewmate] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        speed: '',
        color: '',
    });

    const fetchCrewmate = async () => {
        const { data, error } = await supabase
            .from('Crewmate')
            .select()
            .eq('id', id.split('-')[1])
            .single();

        if (error) {
            console.error('Error fetching crewmate:', error);
        } else {
            setCrewmate(data);
            setFormData({
                name: data.Name,
                speed: data.Speed,
                color: data.Color,
            });
            console.log(crewmate)
        }
    };
    useEffect(() => {
        fetchCrewmate();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const submit = async (event) => {
        event.preventDefault(); 
        const { data, error } = await supabase
            .from('Crewmate')
            .update({
                Name: formData.name,
                Speed: formData.speed,
                Color: formData.color,
            })
            .eq('id', id.split('-')[1]);
            fetchCrewmate();
        if (error) {
            console.error('Error updating crewmate:', error);
        }
    };

    const deleteCrew = async () =>{
        await supabase.from('Crewmate').delete().eq('id', id.split('-')[1]);
        window.location = "/gallery";
    }

    return (
        <div className='view Create'>
            <div className='inner'>
                <h1>Update this Crewmate :) </h1>
                <img src="https://shimmering-stardust-c75334.netlify.app/assets/crewmates.43d07b24.png" alt="amongus" />
                {(crewmate === null)?
                (<p>loading...</p>):
                (<div>
                    <h2>Name: {crewmate.Name}</h2>
                    <h2>Speed: {crewmate.Speed}</h2>
                    <h2>Color: {crewmate.Color}</h2>
                </div>)}
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
                    <div className='buttons'>
                        <button type="submit">Update Crewmate</button>
                        <button onClick={deleteCrew}>Delete Crewmate</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Edit;
