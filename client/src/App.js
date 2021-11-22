import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Nav from './components/nav';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';

import UserContext from './util/userContext';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  return (
    <UserContext.Provider value={{ username, setUsername, password, setPassword, email, setEmail }}>
      <div className="App">
        <Nav />

        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path='/profile' element={<Profile />} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
