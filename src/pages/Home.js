import styled from "styled-components";
import tw from "twin.macro";
import BackgroundImage from "../assets/images/temporaryDesktopBg.jpg";
import BackgroundImage2 from "../assets/images/couple1.jpg";

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
        bg-no-repeat
        bg-fixed
        bg-blend-overlay
		bg-cover
    `};
	background-image: url(${BackgroundImage});

	@media only screen and (max-width: 768px) {
		background-image: url(${BackgroundImage2});
		background-position: bottom 0% left 50%;
		background-size: 180%;
	}
`;

// const HomeContainerGradient = styled.div`
// 	${tw`
// 		w-full
// 		h-full
// 		overflow-hidden
//         bg-fixed
//     `};
// 	background-image: linear-gradient(
// 		100deg,
// 		rgba(250, 211, 184, 0) 0%,
// 		rgba(0, 31, 51, 1) 55%
// 	);
// `;

const Home = () => {
	return (
		<HomeContainer>
			{/* <HomeContainerGradient> */}
			<Logo />
			<HamburgerMenu />
			<HeroSection />
			<ServicesSection />
			<ScheduleSection />
			<TeamSection />
			<StudioSection />
			<ContactSection />
			<Footer />
			{/* </HomeContainerGradient> */}
		</HomeContainer>
	);
};

export default Home;
