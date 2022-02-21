import styled from "styled-components";
import tw from "twin.macro";
import { motion } from "framer-motion";
import BackgroundImage2 from "../assets/images/couple5.jpg";

import Logo from "../components/Logo";
import HeroSection from "../sections/HeroSection";
import ServicesSection from "../sections/ServicesSection";
import ScheduleSection from "../sections/ScheduleSection";
import TeamSection from "../sections/TeamSection";
import StudioSection from "../sections/StudioSection";
import ContactSection from "../sections/ContactSection";
import ShowSection from "../sections/ShowSection";
import Footer from "../components/Footer";
import HamburgerMenu from "../components/HamburgerMenu";

const HomeContainer = styled.div`
	${tw`
		flex
		flex-col
		w-full
		h-full
		overflow-hidden
        bg-no-repeat
        bg-fixed
        bg-blend-overlay
		bg-black
    `};
`;

const HomeBackground = styled(motion.div)`
	${tw`
		w-full
		h-full
		overflow-hidden
		bg-no-repeat
        bg-fixed
        bg-blend-overlay
    `};
	background-image: url(${BackgroundImage2});
	background-position: bottom 60% left 0%;
	background-size: 100%;

	@media only screen and (max-width: 768px) {
		background-image: url(${BackgroundImage2});
		background-position: bottom 10% left 50%;
		background-size: 170%;
	}
`;

const Home = () => {
	return (
		<HomeContainer>
			<HomeBackground
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{
					ease: "easeOut",
					duration: 2,
				}}
			>
				<Logo />
				<HamburgerMenu />
				<HeroSection />
				<ServicesSection />
				<ScheduleSection />
				<TeamSection />
				<StudioSection />
				<ShowSection />
				<ContactSection />
				<Footer />
			</HomeBackground>
		</HomeContainer>
	);
};

export default Home;
