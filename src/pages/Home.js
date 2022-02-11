import styled from "styled-components";
import tw from "twin.macro";
import BackgroundImage from "../components/images/pexels-marko-zirdum-2188012.jpg";
import { useState } from "react";

import Navbar from "../components/Navbar";
import HeroSection from "../containers/HeroSection";
import ServicesSection from "../containers/ServicesSection";
import ScheduleSection from "../containers/ScheduleSection";
import StudioSection from "../containers/StudioSection";
import TeamSection from "../containers/TeamSection";
import Footer from "../components/Footer";
import ContactSection from "../containers/ContactSection";
import Sidebar from "../components/Sidebar";

const HomeContainer = styled.div`
	${tw`
		flex
		flex-col
		w-full
		h-full
		overflow-hidden
        bg-home-md
        bg-no-repeat
        bg-fixed
        bg-blend-overlay
        bg-cover
        bg-bottom
    `};
	background-image: url(${BackgroundImage});
	background-position: bottom 30% center;
`;

const Home = () => {
	const SectionNames = [
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
	const [isOpen, setIsOpen] = useState(false);

	const toggleSidebar = () => {
		setIsOpen(!isOpen);
	};

	return (
		<HomeContainer>
			<Sidebar sections={SectionNames} isOpen={isOpen} toggle={toggleSidebar} />
			<Navbar toggle={toggleSidebar} />
			<HeroSection />
			<ServicesSection />
			<ScheduleSection />
			<TeamSection />
			<StudioSection />
			<ContactSection />
			<Footer />
		</HomeContainer>
	);
};

export default Home;
