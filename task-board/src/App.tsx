import './App.css';
import 'typeface-inter';
import UserBoard from './pages/userBoard/userBoard';
import SignInPage from './pages/signIn/signInPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from "react";


function App() {
  const [userLogin, setUserLogin] = useState('');

  const passLogin = (login:string) => {
    setUserLogin(login);
  };
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<SignInPage passLogin={passLogin} />} />
        <Route path='user-board' element={<UserBoard login={userLogin} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
