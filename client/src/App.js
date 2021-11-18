import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Nav from './components/nav';
import Login from './pages/Login';
import Profile from './pages/Profile';

import UserContext from './util/userContext';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState({});

  return (
    <UserContext.Provider value={{ username, setUsername, password, setPassword, userData, setUserData }}>
      <div className="App">
        <Nav />

        <Routes>
          <Route exact path='/' element={<Login />}></Route>
          <Route exact path='/profile' element={<Profile />}></Route>
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
