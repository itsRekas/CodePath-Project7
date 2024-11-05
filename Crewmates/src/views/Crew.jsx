import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { supabase } from '../client';

const Crew = () => {
  const { id } = useParams();
  const [crewmate, setCrewmate] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCrewmate = async () => {
      const { data } = await supabase.from('Crewmate').select().eq('id', id.split('-')[1]).single();
      setCrewmate(data);
    };
    fetchCrewmate();
  }, [id]);

  return (
    <div>
      {crewmate !==null ? (
        <div>
            <div>
                <h1>Crewmate: {crewmate.Name}</h1>
                <h1>Stats:</h1>
                <p>Speed: {crewmate.Speed}</p>
                <p>Color: {crewmate.Color}</p>
            
                {(crewmate.Speed >200)?(<p>Wow, this Crewmate is super fast, that will be helpful! 🏃💨</p>):
                (<p>You may want to find a Crewmate with more speed, this one is kind of slow 😬</p>)}

                <button onClick={() => navigate(`/gallery/${id}/edit`)} >Wanna edit this Crewmate?</button>
            </div>

            <img src="https://shimmering-stardust-c75334.netlify.app/assets/suspect.bdfacc7e.png" alt="dead" />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Crew;
