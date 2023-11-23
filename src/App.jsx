import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Profile from './components/Profile';
import { readCookieByKey } from './user'

const App = () => {
  const [user, setUser] = useState({ name: '', lastname: '', ci: 0, email: '', country: '' });
  useEffect(() => {
    user.name = readCookieByKey('name');
    user.lastname = readCookieByKey('lastname');
    user.ci = readCookieByKey('ci');
    user.email = readCookieByKey('email');
    user.country = readCookieByKey('country');
    console.log(user);
  }, [document.cookie]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={readCookieByKey('name') ? <Home user={user}/> : <Navigate to='/login'/>} />
          <Route path="/login" element={<Login setCurrentUser={setUser} user={user} />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </BrowserRouter>

    </>
  );
};


export default App;
