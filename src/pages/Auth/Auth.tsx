import { Route, Routes } from "react-router-dom";
import SignIn from "../../components/SignIn/SignIn";
import "./Auth.css";
import { NotFoundPage } from "../NotFoundPage/NotFoundPage";

interface SignInPageProps {
  passLogin: (login: string) => void;
}

const Auth: React.FC<SignInPageProps> = ({ passLogin }) => {
  return (
    <div className="Auth">
      <Routes>
        <Route path="/" element={<SignIn passLogin={passLogin} />} />
        <Route path="sign-in" element={<SignIn passLogin={passLogin} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default Auth;
