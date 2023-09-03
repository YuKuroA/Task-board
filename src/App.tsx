import "./App.css";
import "typeface-inter";
import UserBoard from "./pages/UserBoard/UserBoard";
import Auth from "./pages/Auth/Auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";

function App() {
  const [userLogin, setUserLogin] = useState("");

  const passLogin = (login: string) => {
    setUserLogin(login);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="user-board" element={<UserBoard login={userLogin} />} />
        <Route path="auth/*" element={<Auth passLogin={passLogin} />} />
        <Route path="/" element={<Auth passLogin={passLogin} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
