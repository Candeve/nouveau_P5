import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/home'
import Apropos from './Pages/Apropos/propos'
import Error404 from './Pages/Error404/error404'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Apropos" element={<Apropos />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
);
