import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './components/init';
import './index.css'
//import  { StateContextProvider }  from './context';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Register from './components/Register';
import Admin from './components/Admin';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/Admin' element={<Admin/>}/>
    
    </Routes>
    </Router>
    
  </React.StrictMode>,
)
