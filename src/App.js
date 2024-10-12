import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles.scss';
import Header from './Components/Header/Header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import Test from './Components/Root/Root.jsx';
import SignIn from './Components/Auth/SignIn/SignIn.jsx';
import About from './Components/About/AboutUs.jsx';
import Footer from './Components/Footer/Footer.jsx';

const App = () => {
  const [theme, setTheme] = useState('light_theme');
  return (
     <main className={`main_Container ${theme}`}>
      <Router>
        <Header setTheme={setTheme} theme={theme} />
        <Routes>
        <Route exact path='/' element={<Test theme={ theme} />} />
        <Route exact path='/api/auth/signin/user' element={<SignIn />} />
        <Route exact path='/api/letswork/about' element={<About />} />
        </Routes>
      </Router>
     <SignIn />
    </main>
  ) 
}

export default App