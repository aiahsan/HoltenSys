
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/style.css'
import React, { useState } from 'react';
import axios from 'axios';
import Routes from './routes';

function App() {
  axios.defaults.baseURL = 'http://localhost:4545';
    return (   
      <>
        <Routes/>
      </>
    )
  }

export default App;
