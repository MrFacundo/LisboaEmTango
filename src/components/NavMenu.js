import { motion } from "framer-motion";
import { Link } from "react-scroll";
import tw from "twin.macro";

const sections = [
	{
		name: "Home",
		title: "Home",
	},
	{
		name: "Services",
		title: "Learn",
	},
	{
		name: "Schedule",
		title: "Schedule / Registration",
	},
	{
		name: "Team",
		title: "Instructors",
	},
	{
		name: "Studio",
		title: "Our Studio",
	},
	{
		name: "Orquesta",
		title: "Orquesta",
	},
	{
		name: "Contact",
		title: "Address / Contact Us",
	},
];

const SidebarLink = tw(Link)`
    items-center 
    content-center
	text-[1.5rem]
    md:text-[2rem]
    text-decoration[none]
    text-[#DEBA93]
    cursor-pointer
    hover:text-white
    transition-[0.2s ease-in-out]
	font-title
`;

const NavMenuContainer = tw.div`
	w-full
	flex
	flex-col
	pt-[5rem]
`;

const NavList = tw.ul`
	w-full
	flex
	flex-col
	items-center
`;

const NavItem = tw(motion.li)`
	py-3
	md:py-6
`;

const variants = {
	show: {
		transform: "translateX(0em)",
		opacity: 1,
	},
	hide: {
		transform: "translateX(5em)",
		opacity: 0,
	},
};

const NavMenu = ({ isOpen, toggle }) => {
	return (
		<NavMenuContainer>
			<NavList>
				{sections.map((section, index) => {
					return (
						<NavItem
							initial={false}
							animate={isOpen ? "show" : "hide"}
							variants={{
								show: {
									...variants.show,
									transition: {
										delay: (index + 2) * 0.1,
										duration: index * 0.1,
									},
								},
								hide: {
									...variants.hide,
									transition: { delay: 0.05, duration: 0.05 },
								},
							}}
							whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
						>
							<SidebarLink
								key={index}
								to={section.name}
								smooth={"easeInOutQuad"}
								duration={500}
								onClick={toggle}
							>
								{section.title}
							</SidebarLink>
						</NavItem>
					);
				})}
			</NavList>
		</NavMenuContainer>
	);
};

export default NavMenu;
