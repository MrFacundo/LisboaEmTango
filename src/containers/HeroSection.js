import styled from "styled-components";
import tw from "twin.macro";
import { Link } from "react-scroll";
import { BsArrowDownCircle } from "react-icons/bs";

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

const ViewMoreButton = tw(Link)`
        cursor-pointer
        flex
        absolute
        bottom-10
        left[15%]
        md:left[40%]
        text-2xl
        md:text-[2rem]
        text-green-400
        transition-colors
        duration-200
        border-2
        border-green-400
        rounded-full
        p-3
        md:p-5
        items-center
        w-min
`;

const HeroSectionContainer = tw.div`
        w-full
        flex
        flex-col
        h-[calc(100vh - 5rem)]
        relative
`;

const HeroSection = () => {
	return (
		<HeroSectionContainer>
			<LandingSection>
				<InfoSection>
					<FloatingText>LISBOA</FloatingText>
					<FloatingText style={{ display: "inline-flex" }}>
						<OutlinedTextSvg viewBox="0 0 100 100">
							<text>EM</text>
						</OutlinedTextSvg>
					</FloatingText>
					<FloatingText>TANGO</FloatingText>
					<DescriptionText>Tango School Lisbon</DescriptionText>
				</InfoSection>
			</LandingSection>
			<ViewMoreButton to="Services" smooth={"easeInOutQuad"} duration={500}>
				<p className="max-w-[15rem]">CLASSES AND WORKSHOPS</p>
				<BsArrowDownCircle className="text-[6rem] md:text-[8rem]" />
			</ViewMoreButton>
		</HeroSectionContainer>
	);
};

export default HeroSection;
