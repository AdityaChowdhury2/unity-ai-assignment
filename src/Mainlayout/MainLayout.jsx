import { Link, Outlet } from 'react-router-dom';

const MainLayout = () => {
	return (
		<>
			<Link to={'/'}>
				<h1 className="text-3xl text-center font-fira-code mt-2">
					Unity.ai Labs Assignment
				</h1>
			</Link>
			<Outlet />
		</>
	);
};

export default MainLayout;
