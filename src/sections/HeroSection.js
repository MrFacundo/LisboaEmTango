/* eslint-disable no-unused-vars */
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import tw from "twin.macro";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { BsChevronDoubleDown } from "react-icons/bs";
import Banner from "../components/Banner";
import LanguageDropdown from "../components/LanguageDropdown";

// animations

const banner = {
	animate: {
		transition: {
			delayChildren: 0.4,
			staggerChildren: 0.1,
		},
	},
};

const letterAni = {
	initial: { y: 400 },
	animate: {
		y: 0,
		transition: {
			ease: [0.6, 0.01, -0.05, 0.95],
			duration: 1,
		},
	},
};

// styles

const HeroSectionContainer = tw.div`
        w-full
        flex
        h-[100vh]
        relative
`;

const ImagesContainer = tw.div`
	flex
	flex-row
	w-[90%]
`;

const Image1 = tw.img`
		h-[55rem]
		mt-[4rem]
		object-cover
`;

const Image2 = tw(Image1)`
		mt-[5em]
		ml-[-2rem]

`;

const Image3 = tw(Image1)`
	mt-[6rem]
	ml-[-2rem]

`;
const LandingSection = tw(motion.div)`
		mr-[1rem]
		md:mr-[7rem]
        w-full
        flex
        flex-col
		self-center
		text-right
`;

const FloatingText = tw.h1`
        hidden
        mb-6
        font-black
        text-white
        font-size[60px]
        line-height[25px]
        lg:font-size[100px]
        lg:line-height[60px]
        font-family["Archivo Narrow"]
        md:flex
        items-center
`;

const OutlinedTextSvg = styled.svg`
	font: bold 100px Century "Archivo Narrow", Arial;
	${tw`
                width[90px]
                height[90px]
                hidden
                md:flex
                mb-6
         `};
	overflow: overlay;
	text {
		max-height: 100%;
		flex: 1;
		fill: none;
		stroke: white;
		stroke-width: 2px;
		stroke-linejoin: round;
		z-index: 99;
		${tw`
                        lg:transform[translateY(97px)]
                        transform[translateY(71px)]
    `};
		text-shadow: 0px 0px 0px rgba(255, 255, 255, 0.5);
	}
`;

const CTAButton = tw(motion.div)`
        rounded-full
        bg-transparent
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
        md:bottom-20
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
`;

const BgGradient = styled.div`
	${tw`
	absolute
	w-full
	h-full
         `};
	background: linear-gradient(
		178deg,
		rgba(222, 186, 147, 0.2) 0%,
		rgba(26, 37, 75, 0.4) 100%
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
				{/* <FloatingText>TEXTO SOBRE</FloatingText>
					<FloatingText style={{ display: "inline-flex" }}>
						<OutlinedTextSvg viewBox="0 0 100 100">
							<text>LA</text>
						</OutlinedTextSvg>
					</FloatingText>
					<FloatingText>ESCUELA</FloatingText> */}
			</LandingSection>
			<Link to="Services" smooth={"easeInOutQuad"} duration={1000}>
				<CTAButton
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					transition={{
						ease: [0.6, 0.01, -0.05, 0.95],
						duration: 0.6,
						delay: 1.5,
					}}
				>
					<motion.span
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{
							ease: "easeInOut",
							duration: 0.6,
							delay: 1.8,
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
							delay: 1.8,
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
