import React, {  useState } from 'react';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Login from './components/login';
import Students from './components/students';
import Logout from './components/logout';

const Home = () => <div>Home Page</div>;

const App = () => {
  let [username,setUsername]=useState('')
  return (
    <BrowserRouter>
      <Navbar username={username}/>
      <hr />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login setUsername={setUsername}/>} />
      <Route path="/students" element={<Students />} />
      <Route path="/logout" element={<Logout setUsername={setUsername}/>}></Route>
      </Routes>
      <hr />
    </BrowserRouter>
  );
};

export default App;
