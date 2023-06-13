import logoIcon from './Logo.svg'
import menuIcon from './Menu.svg'
import landscapeIcon from './Group 20.svg'
import './header.css'
import { useNavigate } from 'react-router-dom';


interface HeaderProps {
    login: string
}

const Header: React.FC<HeaderProps> = ({login}) => {
    const navigate = useNavigate();

    const header = (
        <div className="header">
            <div className="logo">
                <img src={logoIcon} alt="logo" />
            </div>
            <div className="login">
                <img src={landscapeIcon} alt="landscape" />
                <label>{login}</label>
                <label onClick={() => navigate('/', { replace: false })}>LOGOUT</label>
                <img src={menuIcon} alt="menu" />
            </div>
        </div>
    )

    return header
}

export default Header