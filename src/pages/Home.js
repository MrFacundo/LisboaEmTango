import tw, { styled } from "twin.macro";
import { motion } from "framer-motion";
import BackgroundImage from "../assets/images/couple1.jpg";

import { ScrollToTop } from "../components/ScrollButton";

import Logo from "../components/Logo";
import HeroSection from "../sections/HeroSection";
import LearnSection from "../sections/LearnSection";
import ScheduleSection from "../sections/ScheduleSection";
import TeamSection from "../sections/TeamSection";
import StudioSection from "../sections/StudioSection";
import ContactSection from "../sections/ContactSection";
import ShowSection from "../sections/ShowSection";
import Footer from "../components/Footer";
import HamburgerMenu from "../components/HamburgerMenu";

const HomeContainer = tw.div`
		flex
		flex-col
		w-full
		h-full
		overflow-hidden
		bg-secondary
`;

const Home = () => {
	return (
		<HomeContainer>
			<Logo />
			<HamburgerMenu />
			<HeroSection />
			<LearnSection />
			<ScheduleSection />
			<TeamSection />
			<StudioSection />
			<ShowSection />
			<ContactSection />
			<Footer />
			<ScrollToTop />
		</HomeContainer>
	);
};

export default Home;
