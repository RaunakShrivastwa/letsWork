import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home';
import './styles.scss';
import Header from './Components/Header/Header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

const App = () => {
  const [theme, setTheme] = useState('light_theme');
  return (
    <main className={`main_Container ${theme}`}>
      <Router>
        <Header setTheme={setTheme} />
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
      </Router>

    </main>
  )
}

export default App