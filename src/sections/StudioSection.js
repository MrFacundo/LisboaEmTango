import { useTranslation } from "react-i18next";
import tw from "twin.macro";
import { Title } from "../globalStyles";
import { Element } from "react-scroll";
import Carousel from "react-responsive-carousel/lib/js/components/Carousel/index";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import studio1 from "../assets/images/studio1.jpg";
import studio2 from "../assets/images/studio2.jpg";
import studio3 from "../assets/images/studio3.jpg";
import studio4 from "../assets/images/studio4.jpg";
import studio5 from "../assets/images/studio5.jpg";
import studio6 from "../assets/images/studio6.jpg";

const studioImages = [
	{ image: studio1 },
	{ image: studio2 },
	{ image: studio3 },
	{ image: studio4 },
	{ image: studio5 },
	{ image: studio6 },
];

const StudioSectionContainer = tw(Element)`
        w-full
        flex
        flex-col
        relative
        pt-1
        pb-1
        xl:pt-2
        xl:pb-2
        items-center
        bg-primary
`;

const SectionInfo = tw.p`
    text-base
    font-text
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
    md:w-[80%]
    h-full
    flex
    flex-col
    justify-center
    items-center
    mt-3
    md:mt-10
    max-w-sm
    md:max-w-7xl
    pb-[3rem]
`;

const StudioSection = () => {
	const { t } = useTranslation();

	return (
		<StudioSectionContainer name="Studio">
			<Title>{t("studio_section.title")}</Title>
			<SectionInfo>{t("studio_section.description")}</SectionInfo>
			<StudioSectionWrapper>
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
							<div key={index}>
								<img src={image.image} alt="" />
							</div>
						);
					})}
				</Carousel>
			</StudioSectionWrapper>
		</StudioSectionContainer>
	);
};

export default StudioSection;
