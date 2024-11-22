import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles.scss';
import Header from './commonComponents/Header/Header.jsx';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import Test from './Components/Root/Root.jsx';
import SignIn from './authComponent/SignIn/SignIn.jsx';
import About from './Components/About/AboutUs.jsx';
import BlogPage from './Components/BlogPage/BlogPage.jsx';
import Career from './Components/CareerPage/Career.jsx';
import Services from './Components/Services/Services.jsx';
import OurWork from './Components/OurWork/WorkView/WorkView.jsx';
import Project from './Components/OurWork/ProjectCard/Project.jsx';
import Contact from './Components/Contact/Contact.jsx';
import SignUp from './authComponent/SignUp/SignUp.jsx';

const App = () => {
  const [theme, setTheme] = useState('light_theme');
  return (
    <main className={`main_Container ${theme}`}>
      <Router>
        <Header setTheme={setTheme} theme={theme} />
        <Routes>
          <Route exact path="/api/letswork/blog" element={<BlogPage />} />
          <Route exact path="/" element={<Test theme={theme} />} />
          <Route exact path="/api/auth/signin/user" element={<SignIn />} />
          <Route exact path="/api/letswork/about" element={<About />} />
          <Route exact path="/api/letswork/services" element={<Services />} />
          <Route exact path="/api/letswork/career" element={<Career />} />
          <Route exact path="/api/letswork/our/work" element={<OurWork />} />
          <Route exact path="/api/letswork/contact/us" element={<Contact />} />
          <Route exact path="/api/letswork/register/account" element={<SignUp />} />
        </Routes>
      </Router>
      <SignIn />
    </main>
  );
}

export default App