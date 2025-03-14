import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import tw from "twin.macro";

import { LogoContainer } from "./Logo";

import logo from "../assets/images/logoNavMenu.png";

const sections = [
	{
		name: "Learn",
		title: "nav_menu.learn",
	},
	{
		name: "Schedule",
		title: "nav_menu.schedule",
	},
	{
		name: "Team",
		title: "nav_menu.instructors",
	},
	{
		name: "Studio",
		title: "nav_menu.studio",
	},
	{
		name: "Shows",
		title: "nav_menu.shows",
	},
	{
		name: "Contact",
		title: "nav_menu.contact",
	},
];

const SidebarLink = tw(Link)`
    items-center 
    content-center
	text-[1.3rem]
	md:text-[1.4rem]
    xl:text-[1.7rem]
	2xl:text-[1.9rem]
    text-decoration[none]
    text-white
    cursor-pointer
    hover:text-primary
    transition-[0.2s ease-in-out]
	font-title
`;

const NavMenuContainer = tw(motion.div)`
	w-full
	flex
	flex-col
	self-center
`;

const NavList = tw(motion.ul)`
	w-full
	flex
	flex-col
	items-center
	text-center
`;

const NavItem = tw(motion.li)`
	py-3
	2xl:py-5
`;

const NavLogo = tw(LogoContainer)`
	md:ml-[-1rem]
	md:mt-[-1rem]
`;

const container = {
	show: {
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const item = {
	hidden: { opacity: 0, x: 100 },
	show: {
		opacity: 1,
		x: 0,
		transition: {
			ease: "easeInOut",
			duration: 0.5,
		},
	},
	exit: {
		opacity: 0,
		transition: {
			ease: "easeInOut",
			duration: 0.3,
		},
	},
};

const NavMenu = ({ isOpen, toggle }) => {
	const { t } = useTranslation();

	return (
		<NavMenuContainer>
			<AnimatePresence>
				{isOpen && (
					<>
						<NavLogo
							to={"Hero"}
							smooth={"easeInOut"}
							duration={800}
							onClick={toggle}
						>
							<img
								className="max-w-[6rem]"
								src={logo}
								alt="Lisboa em Tango Logo"
							/>
						</NavLogo>

						<NavList
							variants={container}
							initial="hidden"
							animate="show"
							exit="exit"
						>
							{sections.map((section, index) => {
								return (
									<NavItem
										key={index}
										variants={item}
										whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
									>
										<SidebarLink
											to={section.name}
											smooth={"easeInOut"}
											duration={800}
											onClick={toggle}
										>
											{t(section.title)}
										</SidebarLink>
									</NavItem>
								);
							})}
						</NavList>
					</>
				)}
			</AnimatePresence>
		</NavMenuContainer>
	);
};

export default NavMenu;
