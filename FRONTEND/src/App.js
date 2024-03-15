import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import Home from './components/home';
import Login from './components/login';

function App() {
  return (
    <Routes> {/* Use Routes instead of BrowserRouter */}
      <Route path="/" element={<Home />} />
      {/* <Route path="/login" element={<Login />} /> */}
    </Routes>
  );
}

export default App;
