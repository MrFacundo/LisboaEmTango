import { useTranslation } from "react-i18next";
import styled from "styled-components";
import tw from "twin.macro";
import { motion } from "framer-motion";

import Banner from "../components/Banner";
import LanguageDropdown from "../components/LanguageDropdown";
import CTALink from "../components/CTALink";

import bg from "../assets/images/coupleHero.jpg";
import bgMobile from "../assets/images/coupleHeroMobile.jpg";

const HeroContainer = styled.div`
	${tw`
        w-full
        flex
		flex-col
		items-center
        h-[100vh]
        relative
		justify-end
	`};

	@media only screen and (max-width: 1024px) {
		background-image: url(${bgMobile});
		background-position: bottom 25% left 50%;
	}

	@media only screen and (min-width: 1024px) and (max-width: 1536px) {
		background: url(${bg});
		background-size: cover;
		background-position: bottom 25% left 10%;
	}

	background: url(${bg});
	background-size: cover;
`;

const Landing = tw(motion.div)`
	w-[80%]
	md:w-[80%]
	lg:w-[90%]
	h-[62%]
	md:h-[70%]
	flex
	flex-col
	z-10
	md:items-start
	justify-between
`;


const BannerContainer = tw.div`
	relative
`;

const AnniversaryStamp = tw(motion.div)`
	text-yellow-300
	font-logo
    text-6xl
    lg:text-7xl
	xl:text-8xl
	text-center
	content-center
    h-[3rem]
    w-[15rem]
    xl:w-[20rem]
	-rotate-12
	-my-8
	ml-0
	mt-0
	md:ml-5
	md:my-8
`;

const BgGradient = styled.div`
	${tw`
	absolute
	w-full
	h-full
	z-0
         `};
	background: linear-gradient(
		90deg,
		rgba(26, 37, 75, 0.4) 0%,
		rgba(26, 37, 75, 0.2) 100%
	);
`;

const Hero = () => {
	const { t } = useTranslation();

	return (
		<HeroContainer name="Hero">
			<BgGradient />
			<LanguageDropdown />
			<Landing>
				<BannerContainer>
					<Banner />
					<AnniversaryStamp
						initial={{ scale: 0, rotate: -12 }}
						animate={{ scale: 1, rotate: -12 }}
						transition={{
							ease: [0.6, 0.01, -0.05, 0.95],
							duration: 1,
							delay: 2.2,
						}}
						tw="absolute bottom-0"
					>
						{t("hero.anniversary")}
					</AnniversaryStamp>
				</BannerContainer>
				<CTALink
					to="Anniversary"
					text={t("hero.CTA")}
					icon="chevron_double_down"
					selfEnd = {true}
					pointer
				/>
			</Landing>
		</HeroContainer>
	);
};

export default Hero;