import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Mainlayout/MainLayout';

const Router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{
				path: '/item/:id',
			},
		],
	},
]);

export default Router