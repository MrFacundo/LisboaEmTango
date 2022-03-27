import { motion } from "framer-motion";
import { useState } from "react";
import tw from "twin.macro";
import { MenuToggle } from "./MenuToggle";
import NavMenu from "./NavMenu";

// styles

const HamburgerMenuContainer = tw.div`
	w-full
	relative
	flex
`;

const MenuContainer = tw(motion.div)`
	flex
	min-w-[300px]
	w-full
	md:max-w-[60%]
	lg:max-w-[40%]
	h-full
	fixed
	top-0
	right-0
	p-[1em 2.5em]
	bg-secondary
	select-none
	z-50
	transition[translateX(4em)]
`;

const MenuShadowSection = tw(motion.div)`
	hidden
	md:flex
	w-full
	h-full
	fixed
	bg-gray-700 
	opacity-50
	z-50
	transition[translateX(4em)]
`;

const menuVariants = {
	open: {
		transform: "translateX(0%)",
	},
	closed: {
		transform: "translateX(100%)",
	},
};

const menuTransition = {
	duration: 0.5,
	stiffness: 70,
	delay: 0.1,
};

const HamburgerMenu = () => {
	const [isOpen, setOpen] = useState(false);

	const toggleMenu = () => {
		setOpen(!isOpen);

		isOpen
			? (document.body.style.overflow = "visible")
			: (document.body.style.overflow = "hidden");
	};

	return (
		<HamburgerMenuContainer>
			<MenuToggle toggle={toggleMenu} isOpen={isOpen} />
			<MenuShadowSection
				onClick={toggleMenu}
				initial={false}
				animate={isOpen ? "open" : "closed"}
				variants={menuVariants}
				transition={menuTransition}
			/>
			<MenuContainer
				initial={false}
				animate={isOpen ? "open" : "closed"}
				variants={menuVariants}
				transition={menuTransition}
			>
				<NavMenu isOpen={isOpen} toggle={toggleMenu} />
			</MenuContainer>
		</HamburgerMenuContainer>
	);
};

export default HamburgerMenu;
