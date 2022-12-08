import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarCom from './NavbarCom';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavbarCom />
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='Login'
            element={<Login />}
          />
          <Route
            path='Signup'
            element={<Signup />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
