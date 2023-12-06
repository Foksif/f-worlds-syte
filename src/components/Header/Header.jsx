import './style.css';
import { NavLink } from 'react-router-dom';
import Logo from './../../img/logo.png'

function Header() {

  const activeLink = "nav__link nav__link-active";
  const normalLink = "nav__link";


  return (
    <header id='home'>
      <div className="container">
        <div className="header__inner">

          <div className="header__block">
            <div className="header__logo">
              <NavLink to="/">
                <img src={Logo} alt="" className="header__img" />
              </NavLink>
            </div>
          </div>

          <nav className="nav">
            <NavLink className={({ isActive }) => isActive ? activeLink : normalLink} to="/info">Info</NavLink>
            <NavLink className={({ isActive }) => isActive ? activeLink : normalLink} to="/rules">Rules</NavLink>
            <NavLink className={({ isActive }) => isActive ? activeLink : normalLink} to="/donate">donate</NavLink>
            <NavLink className="nav__link" to="https://discord.com/invite/C7gGFrCaXb">discord</NavLink>
          </nav>
        </div>
      </div>

    </header>
  )

}

export default Header;
