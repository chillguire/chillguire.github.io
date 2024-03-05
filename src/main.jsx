import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import {
	createBrowserRouter,
	RouterProvider,
	Outlet,
	useLocation,
	useParams,
} from 'react-router-dom';

import { Header } from './components/Header';
import { Footer } from './components/Footer';

import { socials } from './consts/socials';

import './index.css';

import { findTitle } from './utils/index';

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

const router = createBrowserRouter([
	{
		element: <Layout />,
		errorElement: <div>Error</div>,
		children: pages,
	}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
