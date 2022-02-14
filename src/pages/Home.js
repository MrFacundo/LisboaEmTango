import styled from "styled-components";
import tw from "twin.macro";
import BackgroundImage from "../components/images/pexels-marko-zirdum-2188012.jpg";

import Logo from "../components/Logo";
import HeroSection from "../sections/HeroSection";
import ServicesSection from "../sections/ServicesSection";
import ScheduleSection from "../sections/ScheduleSection";
import StudioSection from "../sections/StudioSection";
import TeamSection from "../sections/TeamSection";
import Footer from "../components/Footer";
import ContactSection from "../sections/ContactSection";
import HamburgerMenu from "../components/HamburgerMenu";

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
	return (
		<HomeContainer>
			<Logo />
			<HamburgerMenu />
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
