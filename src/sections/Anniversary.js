import { useTranslation } from "react-i18next";
import tw from "twin.macro";
import { Element } from "react-scroll";
import { motion } from "framer-motion";

import Carousel from "react-responsive-carousel/lib/js/components/Carousel/index";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Gallery from "../components/Gallery";
import CTALink from "../components/CTALink";
import Pennant from "../components/Pennant";

import img from "./images";

import { createImage } from "../utils";

const anImages = [
	createImage("anniversary.title", "anniversary.title", img.anniversary1, img.anniversary1fb),
	createImage("anniversary.title", "anniversary.title", img.anniversary2, img.anniversary2fb),
	createImage("anniversary.title", "anniversary.flyer1description", img.anniversary3, img.anniversary3fb),
];

const flImages = [
	createImage("Portugal Em Tango", "Portugal Em Tango", img.flyer1, img.flyer1fb),
];

const pennantImages = [
	createImage("anniversary.title", "anniversary.title", img.pennantL, img.pennantLfb),
	createImage("anniversary.title", "anniversary.title", img.pennantR, img.pennantRfb),
	createImage("anniversary.title", "anniversary.title", img.pennantLD, img.pennantLDfb),
	createImage("anniversary.title", "anniversary.title", img.pennantRD, img.pennantRDfb),
];

const Container = tw(Element)`
    text-white
    w-full
    flex
	flex-col
    items-center
    justify-center
    bg-primary
    relative
	py-10
`;

const Section = tw.div`
    w-[90%]
    h-[62rem]
    md:w-4/5
    md:h-5/6
	border-yellow-300
    border-4
    border-solid
    rounded-2xl
`;

const SectionTitle = tw.h1`
    font-title
    px-10
    pt-12
    md:py-9
    lg:py-12
    text-center
	text-3xl
    md:text-6xl
    xl:text-3xl
	2xl:text-6xl
`;

const Wrapper = tw.div`
    flex
    flex-col-reverse
    md:flex-row
	items-center
	
`;

const LeftSection = tw(motion.div)`
    w-11/12
    pt-10
	md:w-1/2
	md:mt-[-30rem]
	md:px-8
	`;

const RightSection = tw.div`
    md:w-1/2
    flex
    flex-col
    items-center
    pt-10
`;

const Info = tw.p`
	font-text
    text-lg
    text-justify
	md:text-xl
    mr-[5%]
	mt-2
	mb-[2rem]
	md:mt-[2rem]
    xl:mb-[4rem]
    2xl:mt-2
    xl:max-w-3xl
    pl-4
    pr-4
    lg:pl-2
    lg:pr-2
`;


const getConfigurableProps = () => ({
	showArrows: true,
	showStatus: false,
	showIndicators: true,
	infiniteLoop: true,
	showThumbs: false,
	useKeyboardArrows: true,
	autoPlay: false,
	stopOnHover: true,
	swipeable: true,
	dynamicHeight: true,
	emulateTouch: true,
	autoFocus: false,
	thumbWidth: 100,
	selectedItem: 0,
	interval: 2000,
	transitionTime: 1000,
	swipeScrollTolerance: 5
});

const StyledCarousel = tw(Carousel)`
	w-[60%]
	md:w-1/2
	py-7
	max-w-[500px]
	max-h-[850px]
`;

const Anniversary = () => {
	const { t } = useTranslation();

	return (
		<Container name="Anniversary">
			<Pennant style={{ left: 0, top: 0 }} image={pennantImages[0]} />
			<Pennant style={{ right: 0, top: 0 }} image={pennantImages[1]} />
			<Section>
				<SectionTitle> {t("anniversary.title")}</SectionTitle>
				<Wrapper>
					<LeftSection
						initial="hidden"
						whileInView="show"
						viewport={{ once: true, margin: "100px" }}
					>
						<Gallery images={anImages} />
					</LeftSection>
					<RightSection >
						<Info>{t("anniversary.p1")}</Info>
						<Info>{t("anniversary.p2")}</Info>
						<Info>{t("anniversary.p3")}</Info>
						<Info className="self-end">{t("anniversary.p4")}</Info>
					</RightSection>
				</Wrapper>
			</Section>
			<StyledCarousel {...getConfigurableProps()}>
				{flImages.map((image, index) => (
					<div key={index} className="flex">
						<img src={image.src} alt={image.title} />
					</div>
				))}
			</StyledCarousel>
			<CTALink
				text={t("anniversary.flyer")}
			/>
			<Pennant style={{ left: 0, bottom: 0 }} image={pennantImages[2]} />
			<Pennant style={{ right: 0, bottom: 0 }} image={pennantImages[3]} />
		</Container>
	);
};

export default Anniversary;
