import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import Home from './components/home';
import Profile from './components/profile';
function App() {
  return (
    <Routes> {/* Use Routes instead of BrowserRouter */}
      <Route path="/" element={<Home />} />
      {/* <Route path="/login" element={<Login />} /> */}
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
