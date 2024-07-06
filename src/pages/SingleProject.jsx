import { useEffect, useState } from 'react';
import {
	useLocation,
	useLoaderData,
	Link,
} from 'react-router-dom';

import { InvokeCommand } from '@aws-sdk/client-lambda';
import { lambdaClient } from '../lambda';

import { Markdown } from '../components/Markdown';

import { awaitTimeout } from '../utils/index';


function SingleProject() {
	const location = useLocation();
	const loaderProject = useLoaderData();
	const [project, setProject] = useState(loaderProject);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(false);

	useEffect(() => {
		if (!location.state) {
			document.title = loaderProject.name;
		} else {
			//? llega desde la navegacion normal, how to skip loader call without using hooks?
			document.title = location.state.name;
			setProject(location.state);
		}
	}, [location, project]);

	useEffect(() => {
		async function bootProjectDemo() {
			if (isLoading) {
				try {
					const params = {
						FunctionName: import.meta.env.VITE_FUNCTION_NAME,
						Payload: JSON.stringify({
							project: project.ID,
						}),
					}
					const data = await lambdaClient.send(new InvokeCommand(params));
					const textDecoder = new TextDecoder('utf-8');
					const response = JSON.parse(textDecoder.decode(data.Payload));

					if ((response.statusCode === 200 && !response.errorMessage) || response.body?.data?.DNS) {
						await awaitTimeout(5000); // a veces tarda un poco en levantar el nginx y la aplicacion
						project.demo = `http://${response.body.data.DNS}`;
						return setProject({ ...project });
					}

					throw new Error(response.errorMessage || response.body?.error);
				} catch (error) {
					setError(error.message);
				} finally {
					setIsLoading(false);
				}
			}

		}
		bootProjectDemo();
	}, [isLoading]);

	return (
		<>
			<div className='vw-85 m-auto'>
				<h2 className='project-title'>{`${project.name}`}</h2>
				<div className='project-details'>
					<div className='project-info'>
						<div className='project-buttons'>
							{
								project.demo ?
									<Link className={`btn ${!isLoading && project.ID ? 'disabledToActive' : ''}`} to={`${project.demo}`} target='_blank' rel='noopener noreferrer'>Demo</Link>
									:
									<span className={`btn disabled`}>Demo</span>
							}
							{
								error && <span className='error-text'>{error}</span>
							}
							{
								(!project.demo && project.ID) && (
									<span
										onClick={() => {
											if (!isLoading) {
												setIsLoading(true);
												setError(false);
											}
											return null
										}}
										className={`${(!isLoading && !error) && 'load'} ${isLoading && 'loading'} ${error && 'error'}`}
									>
										{(error && `Intentar de nuevo`) || (isLoading && 'Cargando') || 'Cargar proyecto'}
									</span>
								)
							}
							{
								project.source ? <Link className={`btn`} to={project.source} target='_blank' rel='noopener noreferrer'>Source</Link> : <span className='btn disabled'>Source</span>
							}
						</div>
						<ul>
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
