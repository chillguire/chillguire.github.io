import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import {
	createBrowserRouter,
	RouterProvider,
	Outlet,
	useLocation,
	useParams,
	useRouteError,
} from 'react-router-dom';

import { findTitle, urlify } from './utils/index';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import Home from './pages/Home';
import ProjectList from './pages/ProjectList';
import SingleProject from './pages/SingleProject';

import './index.css';

const pages = [
	{
		path: '/',
		title: 'Ricardo Avendaño',
		element: <Home />,
	},
	{
		path: '/projects',
		title: 'Proyectos',
		children: [
			{
				index: true,
				element: <ProjectList />
			},
			{
				path: ':projectId',
				title: undefined,
				loader: async ({ params }) => {
					const { projectId } = params;
					const { projects } = await import('./consts/projects');
					let match;
					for (let i = 0; i < projects.length; i++) {
						if (urlify(projects[i].name) === projectId) {
							match = projects[i];
						}
					}
					if (match) {
						return match;
					} else {
						throw new Error('doesnt exists');
					}
				},
				element: <SingleProject />
			},
		],
	},
];

function Layout() {
	const [socials, setSocials] = useState([]);
	const location = useLocation();
	const isDynamicRoute = useParams();
	useEffect(() => {
		if (Object.keys(isDynamicRoute).length === 0) {
			const pageTitle = findTitle(pages, location.pathname);
			if (pageTitle) {
				document.title = pageTitle;
			} else {
				throw new Error('doesnt exists');
			}
		}
	}, [location]);

	useEffect(() => {
		const getAboutInfo = async () => {
			const { socials } = await import('./consts/socials');
			setSocials(socials);
		}
		getAboutInfo();
	}, []);

	return (
		<>
			<Header pages={pages} />
			<Outlet />
			<Footer socials={socials} />
		</>
	);
}

function ErrorBoundary() {
	const error = useRouteError();
	useEffect(() => {
		document.title = error;
	}, [location]);

	console.log(error);
	return (
		<>
			<Header pages={pages} />
			<div>{`${error}`}</div>
		</>
	);
}

const router = createBrowserRouter([
	{
		element: <Layout />,
		errorElement: <ErrorBoundary />,
		children: pages,
	}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
