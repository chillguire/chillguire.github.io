import { Link } from 'react-router-dom';

function Header({ pages }) {
	const links = pages.filter((element) => element.path !== '/');

	return (
		<header>
			<Link to={`/`}>
				<img
					src={`https://placehold.co/55`} width={55} height={55} alt={`Logo`}
				/>
			</Link>
			<nav>
				<ul>
					{
						links.map((link, index) => {
							return (
								<li key={index}>
								</li>
							)
						})
					}
				</ul>
			</nav>
		</header>
	);
}

export { Header }