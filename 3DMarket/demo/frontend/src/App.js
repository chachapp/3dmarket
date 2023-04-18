import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from './Pages/Main';
import Header from './Components/Header';



function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={< Main/>} />
       
      </Routes>
    </BrowserRouter>
    
      
  );
  



   
    
}

export default App;