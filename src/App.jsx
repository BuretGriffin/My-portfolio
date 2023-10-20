import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css'
import Home from './Pages/Home/HomeScreen/Index';
import ContactMe from './Pages/Home/HomeScreen/Contactme';

function App() {

  return (
    <div className='App'>
      <Home/>
    </div>
  );
}

export default App;
