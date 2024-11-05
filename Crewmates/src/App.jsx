import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Create from './views/Create';
import Gallery from './views/Gallery';
import Crew from './views/Crew';
import Edit from './views/Edit';
import './App.css';
import { useState } from 'react';

function App() {
  const [data, setData] = useState(false);

  return (
    <div className='app-container'>
      <Navbar />
      <div className='view-container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Create setData={setData} />} />
          <Route path='/gallery/:id' element={<Crew />} />
          <Route path='/gallery/:id/edit' element={<Edit />} />
          <Route path='/gallery' element={<Gallery data={data} />} />
          <Route path='/*' element={
            <div>
              <h1>Ops .... Page Not Found!</h1>
            <img src="https://shimmering-stardust-c75334.netlify.app/assets/peeking.7c0ab599.png" alt="animate" />
            </div>
          }/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
