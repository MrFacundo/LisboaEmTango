import styled from "styled-components";
import tw from "twin.macro";
import BackgroundImage from "../components/images/pexels-marko-zirdum-2188012.jpg";

import HeroSection from "../containers/HeroSection";
import ServicesSection from "../containers/ServicesSection";
import ScheduleSection from "../containers/ScheduleSection";
import StudioSection from "../containers/StudioSection";
import TeamSection from "../containers/TeamSection";
import Footer from "../components/Footer";
import ContactSection from "../containers/ContactSection";
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
