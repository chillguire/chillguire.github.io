import { NavLink } from 'react-router-dom';
import { Logo } from './Logo';

function Header({ pages = [] }) {
	const links = pages.filter((element) => element.path !== '/');

	return (
		<header>
			<div className='header'>
				<NavLink to={`/`}>
					<Logo />
				</NavLink >
				<nav>
					<ul>
						{
							links.map((link, index) => {
								return (
									<li key={index}>
										<NavLink to={link.path} className='header-menu-item'>
											{link.title.toUpperCase()}
										</NavLink >
									</li>
								)
							})
						}
					</ul>
				</nav>
			</div>
		</header>
	);
}

export { Header }