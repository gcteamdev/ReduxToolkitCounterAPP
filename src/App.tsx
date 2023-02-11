import * as React from 'react';
import './App.css';
import Home from './components/Home';
import Fun from './components/Fun';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fun" element={<Fun />} />
      </Routes>
    </div>
  );
}

export default App;
