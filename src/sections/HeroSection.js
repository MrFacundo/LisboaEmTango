/* eslint-disable no-unused-vars */
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import tw from "twin.macro";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { BsChevronDoubleDown } from "react-icons/bs";

import Banner from "../components/Banner";
import LanguageDropdown from "../components/LanguageDropdown";

import bg from "../assets/images/coupleHero.jpg";
import bgMobile from "../assets/images/coupleHeroMobile.jpg";

// styles

const HeroSectionContainer = styled.div`
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

const LandingSection = tw(motion.div)`
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

const CTALink = tw(Link)`
	self-center
	cursor-pointer
	md:self-end
	pb-[4rem]
`;

const CTAButton = tw(motion.div)`
        rounded-full
        hover:bg-primary
        text-white	
        flex
        flex-col
        text-center
        justify-center
        place-items-center
        text-[1rem]
        md:text-[1.5rem]
		2xl:text-[1.8rem]
        border-2
		md:border-4
        h-[8rem]
        w-[8rem]
        md:h-[11rem]
        md:w-[11rem]
		xl:h-[12rem]
        xl:w-[12rem]
		2xl:h-[13rem]
        2xl:w-[13rem]
        hover:text-secondary
        hover:border-secondary
        duration-300
		font-text
		font-semibold
		pt-[1rem]
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

const HeroSection = () => {
	const { t } = useTranslation();

	return (
		<HeroSectionContainer name="Hero">
			<BgGradient />
			<LanguageDropdown />
			<LandingSection>
				<Banner />
				<CTALink to="Learn" smooth={"easeInOutQuad"} duration={1000}>
					<CTAButton
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						transition={{
							ease: [0.6, 0.01, -0.05, 0.95],
							duration: 0.6,
							delay: 2,
						}}
					>
						<motion.span
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{
								ease: "easeInOut",
								duration: 0.6,
								delay: 2.2,
							}}
						>
							{t("hero_section.CTA")}
						</motion.span>
						<motion.span
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{
								ease: "easeInOut",
								duration: 0.6,
								delay: 2.2,
							}}
						>
							<BsChevronDoubleDown className="text-[2rem] md:text-[2.5rem] md:mt-[0.3rem]" />
						</motion.span>
					</CTAButton>
				</CTALink>
			</LandingSection>
		</HeroSectionContainer>
	);
};

export default HeroSection;
