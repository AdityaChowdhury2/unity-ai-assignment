import { Outlet } from 'react-router-dom';

const MainLayout = () => {
	return (
		<>
			<h1 className="text-3xl text-center font-fira-code mt-2">
				Unity.ai Labs Assignment
			</h1>
			<Outlet />
		</>
	);
};

export default MainLayout;
