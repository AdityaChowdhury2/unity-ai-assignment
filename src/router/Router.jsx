import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Mainlayout/MainLayout';
import Home from '../Pages/Home';

const Router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/item/:id',
			},
		],
	},
]);

export default Router;
