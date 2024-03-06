import { useEffect } from 'react';

import {
	useLocation,
	useLoaderData,
} from 'react-router-dom';

function SingleProject() {
	const projects = useLoaderData();
	const location = useLocation();
	useEffect(() => {
		if (!location.state) {
			document.title = projects.name;
		} else {
			//? llega desde la navegacion normal, how to skip loader call without using hooks?
			document.title = location.state.name;
		}
	}, [location]);

	return (
		<>
			<div>SingleProject</div>
		</>
	);
}

export default SingleProject;
