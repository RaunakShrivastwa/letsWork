import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home';
import './styles.scss';
import Header from './Components/Header/Header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <main className='main_Container dark_theme'>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
      </Router>

    </main>
  )
}

export default App