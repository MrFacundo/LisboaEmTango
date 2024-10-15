import { useTranslation } from "react-i18next";
import tw from "twin.macro";
import { Title } from "../globalStyles";
import { Element } from "react-scroll";
import Carousel from "react-responsive-carousel/lib/js/components/Carousel/index";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useMediaQuery } from "react-responsive";
import { deviceSize } from "../components/responsive";

import img from "../images";
import { createImage } from "../utils";

const studioImages = [
	createImage("studio1", "studio1", img.studio1, img.studio1fb),
	createImage("studio2", "studio2", img.studio2, img.studio2fb),
	createImage("studio3", "studio3", img.studio3, img.studio3fb),
];

const StudioContainer = tw(Element)`
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

const Info = tw.p`
    text-base
    font-text
	md:text-2xl
    text-white
    text-center
    md:mt-8
    2xl:mt-2
	max-w-[80%]
    xl:max-w-3xl
    pl-4
    pr-4
    lg:pt-[10rem]
    lg:pb-[2rem]
    lg:pl-2
    lg:pr-2
`;

const StudioWrapper = tw.div`
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

const StyledCarousel = tw(Carousel)`
	border
`


const Studio = () => {
	const { t } = useTranslation();
	const isMobile = useMediaQuery({ maxWidth: deviceSize.laptop });

	return (
		<StudioContainer name="Studio">
			<Title style={{ paddingTop: "0rem" }}>{t("studio.title")}</Title>
			{!isMobile && (
				<iframe
					src="https://www.youtube-nocookie.com/embed/FOwKY2sQZmg?playlist=goFHwoODao8&listType=playlist&autoplay=1&controls=0&loop=1&mute=1&cc_load_policy=0&iv_load_policy=3&disablekb=1&fs=0&modestbranding=1&playsinline=1&rel=0&hd=1"
					width={"1920"}
					height={"1080"}
					loading="lazy"
					title="Tangomanso"
				></iframe>
			)}

			<Info>{t("studio.description")}</Info>
			<StudioWrapper>
				<StyledCarousel
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
								<picture>
									<source srcSet={image.src} type={"image/webp"} />
									<img
										src={image.srcFallback}
										alt={image.description}
									/>
								</picture>
							</div>
						);
					})}
				</StyledCarousel>
			</StudioWrapper>
		</StudioContainer>
	);
};

export default Studio;
