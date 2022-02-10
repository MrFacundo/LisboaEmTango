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
        ease-in-out duration-500 
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
	font-title
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

const Sidebar = ({ sections, isOpen, toggle }) => {
	return (
		<SidebarContainer isOpen={isOpen} onClick={toggle}>
			<Icon>
				<CloseIcon></CloseIcon>
			</Icon>
			<SidebarWrapper>
				<SidebarMenu>
					{sections.map((section, index) => {
						return (
							<SidebarLink
								key={index}
								to={section.name}
								smooth={"easeInOutQuad"}
								duration={500}
								onClick={toggle}
							>
								{section.title}
							</SidebarLink>
						);
					})}
				</SidebarMenu>
			</SidebarWrapper>
		</SidebarContainer>
	);
};

export default Sidebar;
