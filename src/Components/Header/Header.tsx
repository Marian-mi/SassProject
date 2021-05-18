import Nav from './Nav';
import logo from '../../assets/images/logo.png';
import { navItems } from './HeaderData';

const Header = () => {
    return (
        <div className="header">
            <div className="header__logo">
                <img src={logo} alt="butterfly logo" />
            </div>
            <Nav data={navItems} />
        </div>
    )
}

export default Header

