import "./App.css";
import "typeface-inter";
import { Auth, UserBoard } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="auth/*" element={<Auth />} />
        <Route path="*" element={<UserBoard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
