import { useTranslation } from "react-i18next";
import tw from "twin.macro";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Gallery from "../components/Gallery";

import anniversary1 from "../assets/images/anniversary1.webp";
import anniversary1fb from "../assets/images/anniversary1.jpg";
import anniversary2 from "../assets/images/anniversary2.webp";
import anniversary2fb from "../assets/images/anniversary2.jpg";
import anniversary3 from "../assets/images/anniversary3.webp";
import anniversary3fb from "../assets/images/anniversary3.jpg";
import pennantL from "../assets/images/pennantL.png";
import pennantR from "../assets/images/pennantR.png";

const images = [
	{
		title: "levels.group.title",
		description: "levels.group.description",
		src: anniversary1,
		srcFallback: anniversary1fb,
	},
	{
		title: "levels.workshop.title",
		description: "levels.workshop.description",
		src: anniversary2,
		srcFallback: anniversary2fb,
	},
	{
		title: "levels.private.title",
		description: "levels.private.description",
		src: anniversary3,
		srcFallback: anniversary3fb,
	},
];

const Container = tw(Element)`
    text-white
    w-full
    h-[65rem]
    md:h-[60rem]
    min-h-screen
    flex
    items-center
    justify-center
    bg-primary
    relative
`;

const Section = tw.div`
    w-[90%]
    h-[95%]
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

const Pennant = tw.div`
    absolute
    w-[25%]
    top-0
	max-w-[250px]
`;

const Info = tw.p`
	font-text
    text-xl
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

const Anniversary = () => {
	const { t } = useTranslation();

	return (
		<Container name="Anniversary">
			<Pennant style={{ left: 0 }}>
				<picture>
					<source srcSet={pennantL} type={"image/webp"} />
					<img
						className="w-full h-full object-cover"
						src={pennantL}
						alt="aulas e prácticas de tango"
					/>
				</picture>
			</Pennant>
			<Pennant style={{ right: 0 }}>
				<picture>
					<source srcSet={pennantR} type={"image/webp"} />
					<img
						className="w-full h-full object-cover"
						src={pennantR}
						alt="aulas e prácticas de tango"
					/>
				</picture>
			</Pennant>
			<Section>
				<SectionTitle> {t("anniversary.title")}</SectionTitle>
				<Wrapper>
					<LeftSection
						initial="hidden"
						whileInView="show"
						viewport={{ once: true, margin: "100px" }}
					>
						<Gallery images={images} />
					</LeftSection>
					<RightSection >
						<Info>{t("anniversary.p1")}</Info>
						<Info>{t("anniversary.p2")}</Info>
						<Info>{t("anniversary.p3")}</Info>
						<Info className="self-end">{t("anniversary.p4")}</Info>
					</RightSection>
				</Wrapper>
			</Section>
		</Container>
	);
};

export default Anniversary;
