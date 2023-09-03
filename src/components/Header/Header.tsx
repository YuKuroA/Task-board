import logoIcon from "./Logo.svg";
import menuIcon from "./Menu.svg";
import landscapeIcon from "./Group 20.svg";
import "./Header.css";
import { useNavigate } from "react-router-dom";

function getUser() {
  // will return user
  return {} as any;
}

interface HeaderProps {
  login: string;
}

const Header: React.FC<HeaderProps> = ({ login }) => {
  const navigate = useNavigate();
  const user = getUser();

  return (
    <div className="header">
      <div className="logo">
        <img src={logoIcon} alt="logo" />
      </div>
      {user && user.username && <div>user.username</div>}
      <div className="login">
        <img src={landscapeIcon} alt="landscape" />
        <label>{login}</label>
        <label onClick={() => navigate("/", { replace: false })}>LOGOUT</label>
        <img src={menuIcon} alt="menu" />
      </div>
    </div>
  );
};

export default Header;
