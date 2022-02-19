import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import tw from "twin.macro";

const sections = [
	{
		name: "Hero",
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
		name: "Shows",
		title: "Shows",
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

const NavMenuContainer = tw(motion.div)`
	w-full
	flex
	flex-col
	pt-[5rem]
`;

const NavList = tw(motion.ul)`
	w-full
	flex
	flex-col
	items-center
`;

const NavItem = tw(motion.li)`
	py-3
	md:py-6
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
			ease: [0.6, 0.01, -0.05, 0.95],
			duration: 0.3,
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
	return (
		<NavMenuContainer>
			<AnimatePresence>
				{isOpen && (
					<NavList
						variants={container}
						initial="hidden"
						animate="show"
						exit="exit"
					>
						{sections.map((section, index) => {
							return (
								<NavItem
									variants={item}
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
				)}
			</AnimatePresence>
		</NavMenuContainer>
	);
};

export default NavMenu;
