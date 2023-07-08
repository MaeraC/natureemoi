import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import './index.css'
import App from './App'
import Error from './pages/Error'
import AllPlants from './pages/AllPlantes'
import Footer from './components/Footer'
import Accessories from './pages/Accessories'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/toutes-les-plantes" element={<AllPlants />} />
        <Route path="/error-404" element={<Error />} />
        <Route path="/accessoires" element={<Accessories />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
)
