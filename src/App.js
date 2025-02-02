// import components
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Content from "./components/content/Content";
import HomePage from "./components/home/home";
import Profile from "./components/profile/profile";
import Login from "./components/login/loginPage";

// import styles
import "./styles/App.css";
import "./styles/header.css";
import "./styles/sidebar.css";
import "./styles/content.css";
import "./styles/home.css";
import "./styles/login.css";
import "./styles/profile.css";
import "./styles/input.css";
import "./styles/button.css";

// import modules
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React, { useState } from 'react';

function checkLocalStorage() {
  var isAuthorized = localStorage.getItem('authorized') === 'true';
  return isAuthorized;
}

function App() {

  const [authorized, setAuthorized] = useState(checkLocalStorage());

  const authorizedCallback = (LoginData) => {
    setAuthorized(LoginData);
  }

  return (
    <BrowserRouter>
      <div className="Wrapper">
        <Header auth={authorized} callback={authorizedCallback} />
        <Sidebar />
        <div className="WrapperContent">
          <Routes>
            <Route path="/" element={ <Navigate to="/home"/> } />
            <Route path="/home" element={<HomePage />} />
            <Route path="/news" element={<Content />} />
            <Route path="/profile" element={<Profile auth={authorized}/>} />
            <Route path="/login" element={<Login auth={authorized} callback={authorizedCallback}/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
