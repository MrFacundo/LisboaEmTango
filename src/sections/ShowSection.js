import { useTranslation } from "react-i18next";
import { Title } from "../globalStyles";
import tw, { styled } from "twin.macro";
import { useMediaQuery } from "react-responsive";
import { deviceSize } from "../components/responsive";
import { motion } from "framer-motion";

// images

import show1 from "../assets/images/show1.webp";
import show1Mobile from "../assets/images/show1Mobile.webp";
import show2 from "../assets/images/show2.webp";
import show2Mobile from "../assets/images/show2Mobile.webp";
import show3 from "../assets/images/show3.webp";
import show3Mobile from "../assets/images/show3Mobile.webp";

// fallback images

import show1Fallback from "../assets/images/show1.jpg";
import show1MobileFallback from "../assets/images/show1Mobile.jpg";
import show2Fallback from "../assets/images/show2.jpg";
import show2MobileFallback from "../assets/images/show2Mobile.jpg";
import show3Fallback from "../assets/images/show3.jpg";
import show3MobileFallback from "../assets/images/show3Mobile.jpg";

// styles

const ShowSectionContainer = styled(motion.div)`
	${tw`
	w-full
	flex
	flex-col
	relative
    `};
	background: linear-gradient(
		180deg,
		rgba(0, 0, 0, 1) 50%,
		rgba(0, 31, 51, 1) 100%
	);
`;

const SectionTitle = tw(Title)`
	mb-5
	xl:absolute
	left-0
	right-0
	py-0
	md:py-0
	md:top-[3rem]
`;

const ShowContainer = tw(motion.div)`
	w-full
	lg:h-[35rem]
	xl:h-[40rem]
	2xl:h-[50rem]
	flex
	flex-row
	relative
	overflow-hidden
	items-start
	md:items-center
`;

const Divider = tw.div`
	w-[80%]
	h-[2rem]
	border-t-2 
`;

const ShowImageWrapper = tw.div`
	overflow-hidden
	absolute
	min-w-[100%]
	top-0
	bottom-0
	m-auto
`;

const ShowImageMobileWrapper = tw.div`
	w-[80%]
`;

const ShowDescription = tw(motion.div)`
	pb-10
	w-[90%]
	text-base
	md:text-2xl
	items-center
	font-text
	text-white
	text-center
	flex
	flex-col
	md:w-[80%]
	lg:w-[35rem]
	justify-center
	lg:mx-[14rem]
	z-20
	self-center
	`;

const ShowTitle = tw.h2`
	text-[1.3rem]
	md:text-[3rem]
	md:pb-[4rem]
	font-title
	z-10
	line-height[normal]
	uppercase
`;

const DescriptionBg = styled(motion.div)`
	${tw`
	absolute
	right-0
	top-0
	w-full
	h-full
	z-10
	`}
	background: linear-gradient(
		90deg,
		rgba(0, 0, 0, 0.7) 0%,
		rgba(0, 0, 0, 0) 100%
	);
`;

const DescriptionBg2 = styled(DescriptionBg)`
	background: linear-gradient(
		90deg,
		rgba(255, 255, 255, 0.1) 0%,
		rgba(0, 0, 0, 0.5) 70%,
		rgba(0, 0, 0, 1) 100%
	);
`;
const DescriptionBg3 = styled(DescriptionBg)`
	background: rgba(0, 0, 0, 0.6);
`;

const YoutubeIframe = tw(motion.div)`
		z-20
		mr-[3rem]
	`;

// animations

const descriptionVariants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			ease: "easeInOut",
			delay: 0.5,
			duration: 1,
		},
		viewport: { once: true },
	},
};

const gradientVariants = {
	hidden: { opacity: 0.5 },
	show: {
		opacity: 1,
		transition: {
			ease: "easeInOut",
			delay: 1,
			duration: 1,
		},
	},
};

const ShowSection = () => {
	const { t } = useTranslation();

	const isMobile = useMediaQuery({ maxWidth: deviceSize.laptop });
	const isWidescreen = useMediaQuery({ minWidth: deviceSize.widescreen });

	return (
		<ShowSectionContainer name="Shows">
			<SectionTitle>{t("shows_section.title")}</SectionTitle>
			{isMobile && (
				<>
					<ShowDescription
						variants={descriptionVariants}
						initial="hidden"
						whileInView="show"
					>
						<ShowTitle>{t("shows_section.show_title_1")}</ShowTitle>
						<ShowImageMobileWrapper>
							<ShowImage
								image={show1Mobile}
								imageFallback={show1MobileFallback}
								alt={t("shows_section.show_title_1")}
							/>
						</ShowImageMobileWrapper>
						<Divider />
						<ShowTitle>{t("shows_section.show_title_2")}</ShowTitle>
						<ShowImageMobileWrapper>
							<ShowImage
								image={show2Mobile}
								imageFallback={show2MobileFallback}
								alt={t("shows_section.show_title_2")}
							/>
						</ShowImageMobileWrapper>
						<p className="pt-4">{t("shows_section.show_description_2")}</p>
						<Divider style={{ marginTop: "2rem" }} />

						<ShowTitle>
							<i>{t("shows_section.show_title_3")}</i>
						</ShowTitle>
						<ShowImageMobileWrapper>
							<ShowImage
								image={show3Mobile}
								imageFallback={show3MobileFallback}
								alt={t("shows_section.show_title_3")}
							/>
						</ShowImageMobileWrapper>

						<p className="pt-4">{t("shows_section.show_description_3")}</p>
					</ShowDescription>
				</>
			)}
			{!isMobile && (
				<>
					<ShowContainer name="ShowContainer">
						<ShowDescription
							variants={descriptionVariants}
							initial="hidden"
							whileInView="show"
							style={{ marginRight: "10rem" }}
						>
							<ShowTitle>{t("shows_section.show_title_1")}</ShowTitle>
						</ShowDescription>
						<DescriptionBg
							variants={gradientVariants}
							initial="hidden"
							whileInView="show"
						/>
						<ShowImageWrapper>
							<ShowImage
								image={show1}
								imageFallback={show1Fallback}
								alt={t("shows_section.show_title_1")}
							/>
						</ShowImageWrapper>
					</ShowContainer>
					<ShowContainer
						name="ShowContainer"
						style={{
							alignSelf: "start",
							justifyContent: "flex-end",
						}}
					>
						<ShowDescription
							style={{
								alignSelf: "start",
								paddingTop: "4rem",
							}}
							variants={descriptionVariants}
							initial="hidden"
							whileInView="show"
						>
							<ShowTitle>{t("shows_section.show_title_2")}</ShowTitle>
							<p className="z-10">{t("shows_section.show_description_2")}</p>
						</ShowDescription>
						<DescriptionBg2
							variants={gradientVariants}
							initial="hidden"
							whileInView="show"
						/>
						<ShowImageWrapper>
							<ShowImage
								image={show2}
								imageFallback={show2Fallback}
								alt={t("shows_section.show_title_2")}
							/>
						</ShowImageWrapper>
					</ShowContainer>
					<ShowContainer style={{ justifyContent: "space-between" }}>
						<ShowDescription
							style={{ margin: "0rem 3rem" }}
							variants={descriptionVariants}
							initial="hidden"
							whileInView="show"
						>
							<DescriptionBg3
								variants={gradientVariants}
								initial="hidden"
								whileInView="show"
							/>
							<ShowTitle>
								<i>{t("shows_section.show_title_3")}</i>
							</ShowTitle>
							<p className="z-10">{t("shows_section.show_description_3")} </p>
						</ShowDescription>
						<YoutubeIframe
							variants={descriptionVariants}
							initial="hidden"
							whileInView="show"
						>
							<iframe
								src="https://www.youtube-nocookie.com/embed/FOwKY2sQZmg?playlist=FOwKY2sQZmg&listType=playlist&autoplay=1&controls=1&loop=1&mute=1&cc_load_policy=0&iv_load_policy=3&disablekb=1&fs=0&modestbranding=1&playsinline=1&rel=0"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								width={isWidescreen ? "960" : "500"}
								height={isWidescreen ? "480" : "272"}
								loading="lazy"
								title="Tangomanso"
							></iframe>
						</YoutubeIframe>
						<ShowImageWrapper>
							<ShowImage
								image={show3}
								imageFallback={show3Fallback}
								alt={t("shows_section.show_title_3")}
							/>
						</ShowImageWrapper>
					</ShowContainer>
				</>
			)}
		</ShowSectionContainer>
	);
};

const ShowImage = ({ image, imageFallback, alt }) => {
	return (
		<div>
			<picture>
				<source srcSet={image} type={"image/webp"} />
				<img className="w-full h-auto" src={imageFallback} alt={alt} />
			</picture>
		</div>
	);
};

export default ShowSection;
