import { useEffect } from 'react';

import {
	useLocation,
	useParams,
	useNavigate,
} from 'react-router-dom';

import { urlify } from '../utils/index';

function SingleProject() {
	const location = useLocation();
	const { projectId } = useParams();
	const navigate = useNavigate();
	useEffect(() => {
		const getData = async () => {
			const { projects } = await import('../consts/projects');
			projects.forEach((element) => {
				if (urlify(element.name) === projectId) {
					navigate('.', { state: element, replace: true });
				}
			});
		}
		
		if (!location.state) {
			getData();
		} else {
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
