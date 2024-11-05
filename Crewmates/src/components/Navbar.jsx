import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='icons'>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/create'}>Create a <br />Crewmate!</Link></li>
                <li><Link to={'/gallery'}>Crewmate <br />Gallery</Link></li>
            </ul>
        </div>
        <div>
            <img src="https://shimmering-stardust-c75334.netlify.app/assets/peeking.7c0ab599.png" alt="animate" />
        </div>
    </div>
  )
}

export default Navbar