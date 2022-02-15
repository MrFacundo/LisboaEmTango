/* eslint-disable no-unused-vars */
import styled from "styled-components";
import tw from "twin.macro";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { BsChevronDoubleDown } from "react-icons/bs";

const LandingSection = tw.div`
        w-full
        flex
        flex-col
`;

const InfoSection = tw.div`
        absolute
        right[3rem]
        left-auto
        sm:right[5rem]
        lg:right[10rem]
        lg:left-auto
        2xl:right[10rem]
        2xl:top[200px]
        2xl:left-auto
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
        2xl:font-size[150px]
        2xl:line-height[125px]
        font-family["Archivo Narrow"]
        md:flex
        items-center
`;

const OutlinedTextSvg = styled.svg`
	font: bold 100px Century "Archivo Narrow", Arial;
	${tw`
                width[90px]
                height[100px]
                hidden
                md:flex
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
                        2xl:transform[translateY(113px)]
                        lg:transform[translateY(97px)]
                        transform[translateY(71px)]
    `};
		text-shadow: 0px 0px 0px rgba(255, 255, 255, 0.5);
	}
`;

const DescriptionText = tw.h2`
        pt-10
        text-2xl
        lg:text-3xl
        text-white
        text-opacity-90
        mt-10
        max-w-xs
        lg:max-w-lg
        2xl:max-w-xl
        font-family["Barlow"]

`;

const ViewMoreButton = tw(motion.div)`
        rounded-full
        bg-transparent
        hover:bg-[#DEBA93]
        cursor-pointer
        text-white
        flex
        flex-col
        text-center
        justify-center
        place-items-center
        self-center
        absolute
        bottom-10
        md:bottom-20

        left[28%]
        md:left[75%]
        text-[1.2rem]
        md:text-[2rem]
        border-2
        pt-4
        md:pt-8
        h-[10rem]
        w-[10rem]
        md:h-[15rem]
        md:w-[15rem]
        hover:text-[#001F33]
        hover:border-[#001F33]
        duration-300
`;

const HeroSectionContainer = tw.div`
        w-full
        flex
        flex-col
        h-[100vh]
        relative
`;

const HeroSection = () => {
	return (
		<HeroSectionContainer name="Hero">
			<LandingSection>
				{/* <InfoSection>
					<FloatingText>LISBOA</FloatingText>
					<FloatingText style={{ display: "inline-flex" }}>
						<OutlinedTextSvg viewBox="0 0 100 100">
							<text>EM</text>
						</OutlinedTextSvg>
					</FloatingText>
					<FloatingText>TANGO</FloatingText>
					<DescriptionText>Tango School Lisbon</DescriptionText>
				</InfoSection> */}
			</LandingSection>
			<Link to="Services" smooth={"easeInOutQuad"} duration={1000}>
				<ViewMoreButton
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					transition={{
						ease: [0.6, 0.01, -0.05, 0.95],
						duration: 0.6,
						delay: 1,
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
						className="max-w-[15rem]"
					>
						CLASSES / WORKSHOPS
					</motion.span>
					<motion.span
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{
							ease: "easeInOut",
							duration: 0.6,
							delay: 1.8,
						}}
						className="max-w-[15rem]"
					>
						<BsChevronDoubleDown className="text-[2rem] md:text-[4rem] md:mt-[0.3rem]" />
					</motion.span>
				</ViewMoreButton>
			</Link>
		</HeroSectionContainer>
	);
};

export default HeroSection;
