import { useNavigate } from "react-router-dom";

import logoIcon from "../../assets/logo.svg";
import menuIcon from "../../assets/menu.svg";
import landscapeIcon from "../../assets/avatar.svg";

import "./Header.css";

interface Props {
  username: string | null;
}

export const Header = ({ username }: Props) => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("username");
    navigate("/auth/sign-in", { replace: false });
  };

  return (
    <div className="header">
      <div className="logo">
        <img src={logoIcon} alt="logo" />
      </div>
      <div className="login">
        <img src={landscapeIcon} alt="landscape" />
        <label>{username}</label>
        <label onClick={logout}>LOGOUT</label>
        <img src={menuIcon} alt="menu" />
      </div>
    </div>
  );
};
