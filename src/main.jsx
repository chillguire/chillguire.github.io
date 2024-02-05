import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import {
	createBrowserRouter,
	RouterProvider,
	Outlet,
} from 'react-router-dom';

import { Header } from './components/Header';
import { Footer } from './components/Footer';

import Home from './pages/Home';
import ProjectList from './pages/ProjectList';
import SingleProject from './pages/SingleProject';

import './index.css';

const pages = [
	{
		path: '/',
		title: '',
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
	const socials = ["github", "linkedin", "correo?"];

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
