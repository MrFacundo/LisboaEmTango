import styled from "styled-components";
import tw from "twin.macro";
import "./App.css";
import BackgroundImage from "./components/images/pexels-marko-zirdum-2188012.jpg";

import HeroSection from "./containers/HeroSection";
import ExploreSection from "./containers/ExploreSection";
import TeamSection from "./containers/TeamSection";
import Footer from "./components/Footer";
import ContactSection from "./containers/ContactSection";

const AppContainer = styled.div`
	${tw`
		flex
		flex-col
		w-full
		h-full
		overflow-hidden
    `};
	background-image: url(${BackgroundImage});
	background-repeat: no-repeat;
	background-attachment: fixed;
	background-blend-mode: overlay;
	background-size: cover;
	background-position: bottom 30% center;
`;

function App() {
	return (
		<AppContainer>
			<HeroSection />
			<TeamSection />
			<ExploreSection />
			<ContactSection />
			<Footer />
		</AppContainer>
	);
}

export default App;
