import tw from "twin.macro";
import { motion } from "framer-motion";

import ScrollToTop from "../components/ScrollButton";
import Logo from "../components/Logo";
import Hero from "../sections/Hero";
import Learn from "../sections/Learn";
import Schedule from "../sections/Schedule";
import Team from "../sections/Team";
import Studio from "../sections/Studio";
import Contact from "../sections/Contact";
import Show from "../sections/Show";
import Footer from "../components/Footer";
import HamburgerMenu from "../components/HamburgerMenu";
import Anniversary from "../sections/Anniversary";
import Separator from "../components/Separator";

import img from "../images";
import { createImage } from "../utils";
import { useMediaQuery } from "react-responsive";
import { deviceSize } from "../components/responsive";

const separatorImagesMobile = [
	createImage("social1", "social1", img.social1, img.social1fb),
	createImage("social2", "social2", img.social2, img.social2fb),
];

const separatorImages = [
	createImage("social3", "social3", img.social3, img.social3fb),
	createImage("social4", "social4", img.social4, img.social4fb),
];


const HomeContainer = tw.div`
		flex
		flex-col
		w-full
		h-full
		overflow-hidden
		bg-secondary
`;

const Home = () => {
	const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

	return (
		<HomeContainer>
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1 }}
			>
				<Logo />
				<HamburgerMenu />
				<Hero />
				<Learn />
				<Separator image={isMobile ? separatorImagesMobile[0] : separatorImages[0]} />
				<Schedule />
				<Studio />
				<Team />
				<Show />
				<Contact />
				<Footer />
				<ScrollToTop />
			</motion.div>
		</HomeContainer>
	);
};

export default Home;
