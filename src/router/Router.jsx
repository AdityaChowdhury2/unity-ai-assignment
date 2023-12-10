import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Mainlayout/MainLayout';
import Home from '../Pages/Home';
import SinglePost from '../Pages/SinglePost';

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
				element: <SinglePost />,
			},
		],
	},
]);

export default Router;
