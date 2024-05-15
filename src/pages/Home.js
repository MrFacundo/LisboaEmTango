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
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1 }}
			>
				<Logo />
				<HamburgerMenu />
				<Hero />
				<Anniversary />
				<Learn />
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
