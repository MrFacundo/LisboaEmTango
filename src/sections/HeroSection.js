/* eslint-disable no-unused-vars */
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import tw from "twin.macro";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { BsChevronDoubleDown } from "react-icons/bs";
import Banner from "../components/Banner";
import LanguageDropdown from "../components/LanguageDropdown";
import bg from "../assets/images/coupleBanner.jpg";
import bgMobile from "../assets/images/c2.jpg";

// styles

const HeroSectionContainer = styled.div`
	${tw`
        w-full
        flex
        h-[100vh]
        relative
		`};

	@media only screen and (max-width: 768px) {
		background-image: url(${bgMobile});
		background-position: bottom 25% left 50%;
		background-size: 140%;
	}

	background: url(${bg});
	background-size: 120%;
	background-position: 100% 0%;
`;

const LandingSection = tw(motion.div)`
		mr-[2rem]
		mt-[4rem]
		md:mr-[5rem]
		md:mb-[0rem]
		lg:mr-[7rem]
		lg:mb-[5rem]
        w-full
        flex
        flex-col
		self-center
		text-right
`;

const CTAButton = tw(motion.div)`
        rounded-full
        hover:bg-primary
        cursor-pointer
        text-[#F5F6F4]
        flex
        flex-col
        text-center
        justify-center
        place-items-center
        absolute
        bottom-20
        md:bottom-14
        left[33%]
        md:left[58%]
        lg:left[75%]
        text-[1rem]
        md:text-[2rem]
        border-2
        pt-4
        md:pt-8
        h-[8rem]
        w-[8rem]
        md:h-[15rem]
        md:w-[15rem]
        hover:text-[#001F33]
        hover:border-[#001F33]
        duration-300
		font-text
`;

const BgGradient = styled.div`
	${tw`
	absolute
	w-full
	h-full
         `};
	background: linear-gradient(
		110deg,
		rgba(222, 186, 147, 0.2) 20%,
		rgba(26, 37, 75, 0.5) 100%
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
			</LandingSection>
			<Link to="Learn" smooth={"easeInOutQuad"} duration={1000}>
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
						<BsChevronDoubleDown className="text-[2rem] md:text-[4rem] md:mt-[0.3rem]" />
					</motion.span>
				</CTAButton>
			</Link>
		</HeroSectionContainer>
	);
};

export default HeroSection;
