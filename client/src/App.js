import 'bootstrap/dist/css/bootstrap.min.css'

import React from 'react';

//alllows us to nest routes
import { Route, Routes } from 'react-router-dom';


//components
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import Home from './components/pages/Home'
import NotFound from './components/pages/NotFound.jsx'
import Podcast from './components/pages/Podcast'


function App() {

return (
  <div className="App">
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}  />
      <Route path="/podcasts/:id" element={<Podcast/>}></Route>
      <Route path="/pagenotfound" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </div>
);
}

export default App;


