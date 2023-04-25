import { BrowserRouter, Route, Routes } from 'react-router-dom';

//pages
import Home from '.././pages/Home';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { RouteName } from '../constant/routeNames';
import Blogs from '../pages/Blogs';
import ContactPage from '../pages/ContactPage';
import Operations from '../pages/Operations';
import Solutions from '../pages/Solutions';
import About from '../pages/About';
import JobOpenings from '../pages/JobOpenings';

const AppRouter = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path={RouteName.Home} element={<Home />} />
				<Route path={RouteName.Blogs} element={<Blogs />} />
				<Route path={RouteName.ContactPage} element={<ContactPage />} />
				<Route path={RouteName.Operations} element={<Operations />} />
				<Route path={RouteName.Solutions} element={<Solutions />} />
				<Route path={RouteName.ContactPage} element={<ContactPage />} />
				<Route path={RouteName.About} element={<About />} />
				<Route path={RouteName.JobOpenings} element={<JobOpenings />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
};

export default AppRouter;
