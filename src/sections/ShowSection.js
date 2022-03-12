import { useTranslation } from "react-i18next";
import { Title } from "../globalStyles";
import tw, { styled } from "twin.macro";
import { useMediaQuery } from "react-responsive";
import { deviceSize } from "../components/responsive";
import { motion } from "framer-motion";
import { BsChevronDoubleDown } from "react-icons/bs";
import { Link } from "react-scroll";

import show1 from "../assets/images/show8.jpg";
import show2 from "../assets/images/show13.jpg";

// styles

const ShowSectionContainer = styled(motion.div)`
	${tw`
	w-full
	h-[68rem]
	md:h-[110rem]
	lg:h-[100rem]
	flex
	flex-col
    items-center
	justify-between
	relative
    `};
	background: linear-gradient(
		180deg,
		rgba(0, 0, 0, 1) 50%,
		rgba(0, 31, 51, 1) 100%
	);
`;

const SectionTitle = tw(Title)`
	mt-[3rem]
`;

const BackgroundImage = tw.img`
	overflow-hidden
	absolute
	md:w-full
    lg:object-contain
	lg:object-bottom
`;

const ShowContainer = tw(motion.div)`
	flex
	flex-col
	md:flex-row
	md:justify-center
	z-20
	lg:w-[90%]
	lg:justify-between
	lg:mb-20
`;

const ShowTitle = tw.div`
	text-[2rem]
	md:text-[5rem]
	pb-[2rem]
	md:pb-[4rem]
	font-title
`;

const Description = tw(motion.div)`
	px-8
	lg:p-10
	text-base
	md:text-2xl
	items-center
	font-text
	text-white
	text-center
	flex
	flex-col
	md:w-[35rem]
	duration-300
	lg:absolute
	bottom-[0rem]
	right-[14rem]
	`;

const DescriptionBg = styled(motion.div)`
	${tw`
	absolute
	right-0
	w-full
	lg:w-[100%]
	h-full
	`}
	background: linear-gradient(
		90deg,
		rgba(255, 255, 255, 0.1) 0%,
		rgba(0, 0, 0, 0.7) 30%,
		rgba(0, 0, 0, 1) 100%
	);
`;

const YoutubeIframe = tw.div`
	self-start
	lg:self-end
	`;

const CTAButton = tw(motion.div)`
        cursor-pointer
        flex
        flex-col
        text-center
        justify-center
        place-items-center
        h-[8rem]
        w-[8rem]
        md:h-[12rem]
        md:w-[12rem]
		uppercase
		mt-10
		lg:mt-20
`;

const ShowSection = () => {
	const { t } = useTranslation();

	const isMobile = useMediaQuery({ maxWidth: deviceSize.laptop });

	return (
		<ShowSectionContainer name="Shows">
			<SectionTitle>{t("shows_section.title")}</SectionTitle>
			<ShowContainer
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{
					ease: "easeInOut",
					delay: 0.5,
					duration: 1,
				}}
				viewport={{ once: true }}
			>
				{!isMobile && (
					<YoutubeIframe>
						<iframe
							src="https://www.youtube-nocookie.com/embed/FOwKY2sQZmg?playlist=FOwKY2sQZmg&listType=playlist&autoplay=1&controls=1&loop=1&mute=1&cc_load_policy=0&iv_load_policy=3&disablekb=1&fs=0&modestbranding=1&playsinline=1&rel=0"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							width={!isMobile ? "960" : "640"}
							height={!isMobile ? "540" : "360"}
							loading="lazy"
							title="Tangomanso"
						></iframe>
					</YoutubeIframe>
				)}

				<Description>
					<ShowTitle>VOLVER</ShowTitle>
					<p>{t("shows_section.description")} </p>
					<Link to="Contact" smooth={"easeInOutQuad"} duration={1000}>
						<CTAButton
							initial={{ scale: 0 }}
							animate={{ scale: 1 }}
							transition={{
								ease: [0.6, 0.01, -0.05, 0.95],
								duration: 0.6,
								delay: 2,
							}}
						>
							<motion.span>{t("shows_section.CTA")}</motion.span>
							<motion.span>
								<BsChevronDoubleDown className="text-[2rem] md:text-[2rem] md:mt-[0.5rem]" />
							</motion.span>
						</CTAButton>
					</Link>
				</Description>
			</ShowContainer>
			<BackgroundImage src={isMobile ? show2 : show1} alt="" />
			{!isMobile && (
				<DescriptionBg
					initial={{ opacity: 0.5 }}
					whileInView={{ opacity: 1 }}
					transition={{
						ease: "easeInOut",
						delay: 1,
						duration: 1,
					}}
				/>
			)}
		</ShowSectionContainer>
	);
};

export default ShowSection;
