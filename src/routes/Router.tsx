import { BrowserRouter, Route, Routes } from 'react-router-dom';

//pages
import Home from '.././pages/Home';
import { RouteName } from '../constant/routeNames';
import Blogs from '../pages/Blogs';
import ContactPage from '../pages/ContactPage';
import Operations from '../pages/Operations';
import Solutions from '../pages/Solutions';

const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={RouteName.Home} element={<Home />} />
				<Route path={RouteName.Blogs} element={<Blogs />} />
				<Route path={RouteName.ContactPage} element={<ContactPage />} />
				<Route path={RouteName.Operations} element={<Operations />} />
				<Route path={RouteName.Solution} element={<Solutions />} />
				<Route path={RouteName.ContactPage} element={<ContactPage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRouter;
