import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home';
import './styles.scss';

const App = () => {
  return (
    <body className='main_Container bg-danger vw-100 vh-100' >
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
      </Router>

    </body>
  )
}

export default App