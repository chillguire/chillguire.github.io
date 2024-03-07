import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { urlify } from '../utils/index';

function ProjectList() {
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		const getProjects = async () => {
			const { projects } = await import('../consts/projects');
			setProjects(projects);
		}
		getProjects();
	}, []);

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
