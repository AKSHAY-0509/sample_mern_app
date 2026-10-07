import { useState } from 'react'

import './App.css'
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div>
      <Header />
      <div>
        <h1> My first website</h1>
        <h2>Welcome to my website varma</h2>
        <Footer />
      </div>
    </div>
  )
}

export default App
