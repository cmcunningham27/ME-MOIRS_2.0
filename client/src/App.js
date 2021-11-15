import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route exact path='/' element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
