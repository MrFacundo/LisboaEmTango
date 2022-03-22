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
		background-position: bottom 25% left 50%;
	}

	background: url(${bg});
	background-size: cover;
`;

const LandingSection = tw(motion.div)`
	w-[80%]
	md:w-[80%]
	lg:w-[90%]
	h-[65%]
	md:h-[70%]
	flex
	flex-col
	z-10
	md:items-start
	justify-between
`;

const CTAButton = tw(motion.div)`
		mb-[6rem]
		mt-[2rem]
		md:mr-10
        rounded-full
        hover:bg-primary
        cursor-pointer
        text-[#F5F6F4]
        flex
        flex-col
        text-center
        justify-center
        place-items-center
        text-[1rem]
        md:text-[1.5rem]
        border-2
		md:border-4
        pt-4
        md:pt-8
        h-[8rem]
        w-[8rem]
        md:h-[12rem]
        md:w-[12rem]
		md:self-end
        hover:text-[#001F33]
        hover:border-[#001F33]
        duration-300
		font-text
		font-semibold
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
				<Link
					to="Learn"
					smooth={"easeInOutQuad"}
					duration={1000}
					className="self-end"
				>
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
							<BsChevronDoubleDown className="text-[2rem] md:text-[3rem] md:mt-[0.3rem]" />
						</motion.span>
					</CTAButton>
				</Link>
			</LandingSection>
		</HeroSectionContainer>
	);
};

export default HeroSection;
