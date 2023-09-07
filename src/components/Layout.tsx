import { Outlet } from "react-router-dom";

export const Layout = () => {
	return (
		<div className="p-10 flex justify-center">
			<Outlet />
		</div>
	);
};
