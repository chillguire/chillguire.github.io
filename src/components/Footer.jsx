import { Link } from 'react-router-dom';
import { SiGithub, SiLinkedin, SiMaildotru } from 'react-icons/si';
import { IconContext } from 'react-icons';

function Footer({ socials = [] }) {
	const icons = [
		{
			name: 'SiGithub',
			element: SiGithub,
		},
		{
			name: 'SiLinkedin',
			element: SiLinkedin,
		},
		{
			name: 'SiMaildotru',
			element: SiMaildotru,
		},
	];

	return (
		<footer>
			<div className='footer'>
				<ul className='footer-nav'>
					{
						socials.map((link, index) => {
							const FooterIconComponent = icons.find((icon) => {
								return icon.name.toLowerCase().includes(link.name.toLowerCase());
							}).element;
							return (
								<li key={index}>
									<Link to={link.ref} target='_blank' rel='noopener noreferrer'>
										<IconContext.Provider
											value={{ className: `footer-menu-item ${link.name}`, size: '1.75em' }}
										>
											<FooterIconComponent />
										</IconContext.Provider>
									</Link>
								</li>
							)
						})
					}
				</ul>
			</div>
		</footer>
	);
}

export { Footer };
