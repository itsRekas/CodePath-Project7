import React, { useEffect, useState } from 'react'
import { supabase } from '../client'
import { Link, useNavigate} from 'react-router-dom'
import Loading from '../components/Loading'

const Gallery = ({data}) => {
  const [crew,setCrew] = useState(null);
  const navigate = useNavigate();
  useEffect(()=>{
    const getdata = async ()=>{
      let data = await supabase.from('Crewmate').select();
      setCrew(data.data)
    }
    getdata()
  },[data])

  return (
    <div className='view Gallery'>
      <h1>Your Crewmate Gallery!</h1>
      <div className='catalog'>
        {(crew === null)?(<Loading/>):(
          (crew.length===0)?(<div>
            <h1>Looks empty</h1>
          <img src="https://shimmering-stardust-c75334.netlify.app/assets/peeking.7c0ab599.png" alt="animate" />
          </div>):
          crew.map((ele)=>{
            return (
              <div key={ele.id} className={`card ${ele.Color}`}>
                <Link to={`/gallery/${ele.Name}-${ele.id}`} key={ele.id}>
                <div>
                  <img src="https://shimmering-stardust-c75334.netlify.app/assets/crewmate.ce385016.png" alt="body" />
                  <h3>Name of Crewmate: {ele.Name}</h3>
                  <h3>Speed of Crewmate: {ele.Speed}</h3>
                  <h3>Color of Crewmate: {ele.Color}</h3>
                </div>
                </Link>
                <button onClick={() => navigate(`/gallery/${ele.Name}-${ele.id}/edit`)}>Edit Crewmate</button>
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}

export default Gallery