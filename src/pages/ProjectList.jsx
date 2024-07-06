import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Marked } from 'marked';

import { urlify, truncate, arrayToCommaString } from '../utils/index';

function ProjectList() {
	const [projects, setProjects] = useState([]);
	const marked = new Marked();
	const renderer = {
		list(body, ordered, start) {
			return body;
		},
		listitem(text, task, checked) {
			return `${text} `;
		},
		paragraph(text) {
			return text;
		},
	};
	marked.use({ renderer });

	useEffect(() => {
		const getProjects = async () => {
			const { projects } = await import('../consts/projects');
			setProjects(projects);
		}
		getProjects();
	}, []);

	return (
		<>
			<ul className='vw-85 m-auto'>
				{
					projects.map((link, index) => {
						return (
							<li key={index} className='card-container'>
								<Link to={`${urlify(link.name)}`} state={link} className='card'>
									<h2 className='card-title'>
										{link.name}
									</h2>
									<h3 className='card-sub'>
										{truncate(arrayToCommaString(link.skills), 90)}
									</h3>
									<p>
										{truncate(marked.parse(link.description || ''))}
									</p>
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
