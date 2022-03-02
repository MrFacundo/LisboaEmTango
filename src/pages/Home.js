import tw, { styled } from "twin.macro";
import { motion } from "framer-motion";
import BackgroundImageSm from "../assets/images/couple1.jpg";
import BackgroundImageMd from "../assets/images/couple1.jpg";

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

const HomeBackground = styled(motion.div)`
	${tw`
		w-full
		h-full
		overflow-hidden
		bg-no-repeat
        bg-fixed
        bg-blend-overlay
    `};
	background-image: url(${BackgroundImageMd});
	background-position: bottom 60% left 80%;
	background-size: 150%;

	@media only screen and (max-width: 768px) {
		background-image: url(${BackgroundImageSm});
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
				<LearnSection />
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
