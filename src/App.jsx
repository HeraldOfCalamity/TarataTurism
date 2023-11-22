import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';

const App = () => {
  const [user, setUser] = useState({ name: '', lastname: '', ci: 0, email: '', country: '' });
  useEffect(() => {
    console.log('effect', user);
  }, [user]);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login setCurrentUser={setUser} />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>

    </>
  );
};


export default App;
