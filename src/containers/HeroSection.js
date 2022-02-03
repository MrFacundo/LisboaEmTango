import styled from "styled-components";
import tw from "twin.macro";
import { Link } from "react-scroll";
import Navbar from "../components/Navbar";
import { BsArrowDownCircle } from "react-icons/bs";

const LandingSection = tw.div`
        w-full
        h-screen
        flex
        flex-col
`;

const InfoSection = tw.div`
        absolute
        top[150px]
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
        flex
        items-center
`;

const OutlinedTextSvg = styled.svg`
	font: bold 100px Century "Archivo Narrow", Arial;
	${tw`
                width[90px]
                height[100px]
                flex
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

const ViewMoreButton = tw.button`
        absolute
        bottom-4
        left-1/2
        -translate-x-1/2
        text-white
        text-4xl
        transition-colors
        duration-200
        hover:text-green-400
`;

const HeroSectionContainer = tw.div`
        w-full
        flex
        flex-col
        h-screen
        relative
`;

const HeroSection = () => {
	return (
		<HeroSectionContainer>
			<LandingSection>
				<Navbar />
				<InfoSection>
					<FloatingText>LISBOA</FloatingText>
					<FloatingText style={{ display: "inline-flex" }}>
						<OutlinedTextSvg viewBox="0 0 100 100">
							><text>EM</text>
						</OutlinedTextSvg>
					</FloatingText>
					<FloatingText>TANGO</FloatingText>
					<DescriptionText>Escuela de tango argentino.</DescriptionText>
				</InfoSection>
				<ViewMoreButton>
					<Link to="Team" smooth={"easeInOutQuad"} duration={500}>
						<BsArrowDownCircle />
					</Link>
				</ViewMoreButton>
			</LandingSection>
		</HeroSectionContainer>
	);
};

export default HeroSection;
