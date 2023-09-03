import { Route, Routes } from "react-router-dom";
import { NotFound, SignIn } from "../../components";
import "./Auth.css";

export const Auth = () => {
  return (
    <div className="Auth">
      <Routes>
        <Route path="sign-in" element={<SignIn />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
