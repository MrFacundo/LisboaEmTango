import styled from "styled-components";
import tw from "twin.macro";
import { Title } from "../styles";
import { Element } from "react-scroll";
import Carousel from "react-responsive-carousel/lib/js/components/Carousel/index";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import studio1 from "../assets/images/studio1.jpeg";
import studio2 from "../assets/images/studio2.jpeg";
import studio3 from "../assets/images/studio3.jpeg";

const studioImages = [
	{ image: studio1, description: "description 1" },
	{ image: studio2, description: "description 2" },
	{ image: studio3, description: "description 3" },
];

const StudioSectionContainer = tw(Element)`
        w-full
        min-h-screen
        flex
        flex-col
        relative
        pt-1
        pb-1
        xl:pt-2
        xl:pb-2
        items-center
        // bg-[rgba(107, 185, 10, 0.3)]
        bg-[#DEBA93]

`;

const SectionInfo = tw.p`
    text-base
    2xl:text-lg
    text-white
    text-center
    mt-8
    2xl:mt-2
    max-w-lg
    xl:max-w-3xl
    pl-4
    pr-4
    lg:pl-2
    lg:pr-2
`;

const StudioSectionWrapper = tw.div`
    w-[90%]
    h-full
    flex
    flex-col
    justify-center
    items-center
    mt-3
    md:mt-10
    max-w-sm
    md:max-w-7xl
`;

const Item = styled.div`
	${tw`
        flex
        flex-col
    `}
	img {
		${tw`
            max-w-full
            max-h-full
        `}
	}
`;

const StudioSection = () => {
	return (
		<StudioSectionContainer name="Studio">
			<Title>OUR STUDIO</Title>
			<SectionInfo>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, esse
				magnam modi, cum laboriosam sunt numquam error placeat harum at,
				doloremque suscipit deleniti quasi illo in tenetur? Quidem, totam
				molestiae.
			</SectionInfo>
			<StudioSectionWrapper className="wrap">
				<Carousel
					dynamicHeight={false}
					autoPlay
					showStatus={false}
					swipeable={true}
					showThumbs={false}
					transitionTime={1000}
					infiniteLoop={true}
				>
					{studioImages.map((image, index) => {
						return (
							<Item key={index}>
								<img src={image.image} alt={image.description} />
							</Item>
						);
					})}
				</Carousel>
			</StudioSectionWrapper>
		</StudioSectionContainer>
	);
};

export default StudioSection;
