import { Link } from 'react-router-dom';
//constant
import { RouteName } from '../constant/routeNames';
//components
import SolidButton from './shared/SolidButton';
// images
import Logo from '../images/Logo.svg';

const navLinks: any = [
	{
		title: 'Home',
		link: RouteName.Home,
	},
	{
		title: 'Operations',
		link: RouteName.Operations,
	},
	{
		title: 'Solutions',
		link: RouteName.Solutions,
	},
	{
		title: 'Blogs',
		link: RouteName.Blogs,
	},
];

function Navbar() {
	return (
		<div className='navbar-section'>
			<div className='navbar-container'>
				<Link to={RouteName.Home}>
					<img src={Logo} className='nav-logo' alt='logo' />
				</Link>
				<div className='navber-link-section'>
					{navLinks.map((l: any, i: number) => (
						<p className='nav-link-text' key={i}>
							<Link to={l.link}>{l.title}</Link>
						</p>
					))}
				</div>
				<Link to={RouteName.ContactPage}>
					<SolidButton title="Let's Connect" />
				</Link>
			</div>
		</div>
	);
}

export default Navbar;
