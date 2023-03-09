import React from 'react';
import { Link } from 'react-router-dom';
import { RouteName } from '../constant/routeNames';
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
				<img src={Logo} className='nav-logo' />
				<div className='navber-link-section'>
					{navLinks.map((l: any, i: number) => (
						<p className='nav-link-text'>
							<Link to={l.link}>{l.title}</Link>
						</p>
					))}
				</div>
				<button className='btn primary-btn'>Let's Connect</button>
			</div>
		</div>
	);
}

export default Navbar;
