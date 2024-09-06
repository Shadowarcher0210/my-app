import React from 'react';
import Homelandingpage from './components/Homelanding.js';
import CreateAppraisal from './components/CreateAppraisal.js'
import { Route, Routes } from 'react-router-dom'
// import Leftnavbar from '.';

const App = () => {
  return (
      <Routes>
        <Route path='/' element= {<Homelandingpage/>}/>
      <Route path='/CreateAppraisal' element={<CreateAppraisal/>} />
    </Routes>
  );
};

export default App;
