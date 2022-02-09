import styled from "styled-components";
import tw from "twin.macro";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const SidebarContainer = styled.aside`
	${tw`
        fixed
        z-[999]
        w-full
        h-full
        bg-[#0d0d0d]
        grid
        items-center
        left-0
        transition-[0.3 ease-in-out]
    `};
	opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
	top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

const CloseIcon = tw(FaTimes)`
    text-white
`;

const Icon = tw.div`
    absolute
    top-[1.2rem]
    right-[1.5rem]
    bg-transparent
    text-[2rem]
    cursor-pointer
    outline-none
`;

const SidebarWrapper = tw.div`
    text-white
`;

const SidebarMenu = tw.div`
    grid
    grid-template-columns[1fr]
    grid-template-rows[repeat(6, 80px)]
    place-items-center
`;

const SidebarLink = tw(Link)`
    flex
    items-center 
    content-center
    text-[1.5rem]
    text-decoration[none]
    text-white
    cursor-pointer
    hover:text-[#01bf71]
    transition-[0.2s ease-in-out]
`;

const Sidebar = ({ isOpen, toggle }) => {
	return (
		<SidebarContainer isOpen={isOpen} onClick={toggle}>
			<Icon>
				<CloseIcon></CloseIcon>
			</Icon>
			<SidebarWrapper>
				<SidebarMenu>
					<SidebarLink to="Home" onClick={toggle}>
						Home
					</SidebarLink>
					<SidebarLink
						to="Team"
						smooth={"easeInOutQuad"}
						duration={500}
						onClick={toggle}
					>
						Team
					</SidebarLink>
					<SidebarLink
						to="Studio"
						smooth={"easeInOutQuad"}
						duration={500}
						onClick={toggle}
					>
						Studio
					</SidebarLink>
					<SidebarLink
						to="Contact"
						smooth={"easeInOutQuad"}
						duration={500}
						onClick={toggle}
					>
						Contact
					</SidebarLink>
				</SidebarMenu>
			</SidebarWrapper>
		</SidebarContainer>
	);
};

export default Sidebar;
