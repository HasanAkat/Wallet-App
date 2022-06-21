import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import background from "./background.png"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import React from "react";
import Home from "./components/Pages/HomePage";
import Login from "./components/Pages/LoginPage";

function App() {
  return (
    <div style={{ backgroundImage: `url(${background})`, width:'auto',height:"10000px"}}>
    <BrowserRouter><div>
      <div>
        <Routes>
         <Route path="/Home" element={ <Home />} />
         <Route path="/" element={ <Login />} />
         <Route path="/Login" element={ <Login />} />
         </Routes>
      </div>
      </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
