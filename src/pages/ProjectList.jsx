import { Link } from 'react-router-dom';

import { urlify } from '../utils/index';

import { projects } from '../consts/projects';

function ProjectList() {
	return (
		<>
			<div>ProjectList</div>
			<ul>
				{
					projects.map((link, index) => {
						return (
							<li key={index}>
								<Link to={`${urlify(link.name)}`} state={link}>
									{link.name}
								</Link>
							</li>
						)
					})
				}
			</ul>
		</>
	);
}

export default ProjectList;
