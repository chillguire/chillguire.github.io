import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import {
	createBrowserRouter,
	RouterProvider,
	Outlet,
	useLocation,
	useParams,
	useRouteError
} from 'react-router-dom';

import { Header } from './components/Header';
import { Footer } from './components/Footer';

import { socials } from './consts/socials';

import './index.css';

import { findTitle, urlify } from './utils/index';

import Home from './pages/Home';
import ProjectList from './pages/ProjectList';
import SingleProject from './pages/SingleProject';

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
	const location = useLocation();
	const isDynamicRoute = useParams();
	useEffect(() => {
		if (Object.keys(isDynamicRoute).length === 0) {
			const pageTitle = findTitle(pages, location.pathname);
			document.title = pageTitle ? pageTitle : '404';
		}
	}, [location]);

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
			<Footer socials={socials} />
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
