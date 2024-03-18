import { useEffect, useState } from 'react';
import {
	useLocation,
	useLoaderData,
	Link,
} from 'react-router-dom';

import { Markdown } from '../components/Markdown';

function SingleProject() {
	const loaderProject = useLoaderData();
	const [project, setProject] = useState(loaderProject);
	const location = useLocation();

	useEffect(() => {
		if (!location.state) {
			document.title = loaderProject.name;
		} else {
			//? llega desde la navegacion normal, how to skip loader call without using hooks?
			document.title = location.state.name;
			setProject(location.state);
		}
	}, [location, project]);

	return (
		<>
			<div className='vw-85 m-auto'>
				<h2 className='project-title'>{`${project.name}`}</h2>
				<div className='project-details'>
					<div className='project-info'>
						<div className='project-buttons'>
							{
								!project.demo ? <span className={`btn disabled`}>Demo</span> : <Link className={`btn`} to={project.demo} target='_blank' rel='noopener noreferrer'>Demo</Link>
							}
							{
								!project.source ? <span className='btn disabled'>Source</span> : <Link className='btn' to={project.source} target='_blank' rel='noopener noreferrer'>Source</Link>
							}
						</div>
						<ul className='project-skills'>
							{project.skills.map((element, key) => (
								<li className='skill' key={key}>{element}</li>
							))}
						</ul>
					</div>
					<div className='project-desc'>
						<Markdown text={project.description} />
					</div>
				</div>
			</div>
			<div className='project-image-container'>
				{
					project.images.map((projectImage, index) => {
						return (
							<img className='project-image' key={index} src={`${projectImage}`} />
						)
					})
				}
			</div>
		</>
	);
}

export default SingleProject;
