import tw from "twin.macro";
import { Link } from "react-scroll";
import Logo from "./Logo";
import { useMediaQuery } from "react-responsive";
import { deviceSize } from "./responsive";

import { CgMenuRight } from "react-icons/cg";

const NavContainer = tw.div`
    width[90%]
    flex
    h-20
    pl-6
    pr-6
    pt-4
    border-b-2
    border-gray-200
    border-opacity-50
    items-center
    self-center
    justify-between
    text-white
`;

const NavItems = tw.div`
    font-family["Barlow"]
    list-none
    w-full
    h-auto
    lg:w-auto
    lg:h-full
    flex
    lg:ml-20
    justify-center 
    items-center
`;

const NavItem = tw.li`
    padding-left[3rem]
    flex
    items-center
    justify-center
    min-h-full
    cursor-pointer
    font-medium
    text-lg
    lg:text-base
    transition-colors
    transition-duration[300ms]
    hover:text-gray-500
    box-content
    mb-2
    lg:mb-0
`;

const Hamburger = tw.div`
    block
    md:hidden
    text-[2rem]
    cursor-pointer
`;

const Navbar = ({ toggle }) => {
	const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

	const navItems = (
		<NavItems>
			<NavItem>
				<Link to="Home">Home</Link>
			</NavItem>
			<NavItem>
				<Link to="Schedule" smooth={"easeInOutQuad"} duration={500}>
					Learn
				</Link>
			</NavItem>
			<NavItem>
				<Link to="Team" smooth={"easeInOutQuad"} duration={500}>
					Team
				</Link>
			</NavItem>
			<NavItem>
				<Link to="Studio" smooth={"easeInOutQuad"} duration={500}>
					Studio
				</Link>
			</NavItem>
			<NavItem>
				<Link to="Contact">Contact</Link>
			</NavItem>
		</NavItems>
	);

	return (
		<NavContainer>
			<Logo />
			{isMobile && (
				<Hamburger onClick={toggle}>
					<CgMenuRight />
				</Hamburger>
			)}
			{!isMobile && navItems}
		</NavContainer>
	);
};

export default Navbar;
