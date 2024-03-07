import { useEffect, useState } from 'react';
import {
	useLocation,
	useLoaderData,
} from 'react-router-dom';

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
			<div>{`${project.name}`}</div>
			<div>{`${project.demo}`}</div>
			<div>{`${project.source}`}</div>
			<div>{`${project.description}`}</div>
		</>
	);
}

export default SingleProject;
