import React from "react";
import LoginPage from "./login/login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate
} from 'react-router-dom';
import MainPage from "./view/mainpage";

function App() {
  return (
    <Router>

     
    
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>     
        <Route path="/main" element={<MainPage/>}></Route> 
      </Routes>
    </Router>
    
)}

export default App;
