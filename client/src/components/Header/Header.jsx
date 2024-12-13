import './style.css'
import { NavLink } from 'react-router-dom'
import Logo from './../../img/logo.png'

function Header() {
	const activeLink = 'nav__link nav__link-active'
	const orangeLink = 'orange__link'

	const normalLink = 'nav__link'
	const normalLinkO = 'nav__link' + ' ' + orangeLink

	return (
		<header id='home'>
			<div className='container'>
				<div className='header__inner'>
					<div className='header__block'>
						<div className='header__logo'>
							<NavLink to='/'>
								<img src={Logo} alt='' className='header__img' />
							</NavLink>
						</div>
					</div>

					<nav className='nav'>
						<NavLink
							className={({ isActive }) => (isActive ? activeLink : normalLink)}
							to='/info'
						>
							информация
						</NavLink>
						<NavLink
							className={({ isActive }) => (isActive ? activeLink : normalLink)}
							to='/rules'
						>
							правила
						</NavLink>
						{/* <NavLink
							className={({ isActive }) => (isActive ? activeLink : normalLink)}
							to='/donate'
						>
							донат
						</NavLink> */}
						<NavLink
							className={({ isActive }) =>
								isActive ? activeLink : normalLinkO
							}
							to='/success'
						>
							заявки
						</NavLink>
					</nav>
				</div>
			</div>
		</header>
	)
}

export default Header
