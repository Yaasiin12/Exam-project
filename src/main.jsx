import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Menu from './Components/Menu.jsx'
import Footer from './Components/Footer.jsx'
import Header from './Components/Header.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
 
 <div>
  <Header/>
  <Menu/>
  <Footer/>
  
 </div>
)
