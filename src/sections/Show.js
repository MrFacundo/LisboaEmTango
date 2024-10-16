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

const Container = styled(motion.div)`
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

const YoutubeContainer = tw(motion.div)`
		z-20
		lg:mr-[3rem]
	`;

const descriptionVariants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			ease: "easeInOut",
			delay: 0.2,
			duration: 0.8,
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

const Show = () => {
	const { t } = useTranslation();

	const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });
	const isLaptop = useMediaQuery({ maxWidth: deviceSize.laptop });
	const isWidescreen = useMediaQuery({ minWidth: deviceSize.widescreen });

	const videoResolution = { width: 0, height: 0 };

	if (isMobile) {
		videoResolution.width = 320;
		videoResolution.height = 160;
	} else if (!isMobile && !isWidescreen) {
		videoResolution.width = 500;
		videoResolution.height = 272;
	} else {
		videoResolution.width = 960;
		videoResolution.height = 480;
	}

	return (
		<Container name="Shows">
			<SectionTitle>{t("shows.title")}</SectionTitle>
			{isLaptop && (
				<>
					<ShowDescription
						variants={descriptionVariants}
						initial="hidden"
						whileInView="show"
					>
						<ShowTitle>{t("shows.show_title_1")}</ShowTitle>
						<ShowImageMobileWrapper>
							<ShowImage
								image={show1Mobile}
								imageFallback={show1MobileFallback}
								alt={t("shows.show_title_1")}
							/>
						</ShowImageMobileWrapper>
						<p className="py-10">{t("shows.show_description_1")}</p>
						<Divider />
						<ShowTitle>{t("shows.show_title_2")}</ShowTitle>
						<ShowImageMobileWrapper>
							<ShowImage
								image={show2Mobile}
								imageFallback={show2MobileFallback}
								alt={t("shows.show_title_2")}
							/>
						</ShowImageMobileWrapper>
						<p className="pt-4">{t("shows.show_description_2")}</p>
						<Divider style={{ marginTop: "2rem" }} />
						<ShowTitle>
							<i>{t("shows.show_title_3")}</i>
						</ShowTitle>
						<ShowImageMobileWrapper>
							<ShowImage
								image={show3Mobile}
								imageFallback={show3MobileFallback}
								alt={t("shows.show_title_3")}
							/>
						</ShowImageMobileWrapper>

						<p className="pt-4 mb-10">
							{t("shows.show_description_3")}
						</p>
						<Video
							height={videoResolution.height}
							width={videoResolution.width}
						/>
					</ShowDescription>
				</>
			)}
			{!isLaptop && (
				<>
					<ShowContainer name="ShowContainer">
						<ShowDescription
							variants={descriptionVariants}
							initial="hidden"
							whileInView="show"
							style={{ marginRight: "10rem" }}
						>
							<ShowTitle>{t("shows.show_title_1")}</ShowTitle>
							<p className="z-10">{t("shows.show_description_1")}</p>
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
								alt={t("shows.show_title_1")}
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
							<ShowTitle>{t("shows.show_title_2")}</ShowTitle>
							<p className="z-10">{t("shows.show_description_2")}</p>
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
								alt={t("shows.show_title_2")}
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
								<i>{t("shows.show_title_3")}</i>
							</ShowTitle>
							<p className="z-10">{t("shows.show_description_3")} </p>
						</ShowDescription>
						<Video
							height={videoResolution.height}
							width={videoResolution.width}
						/>
						<ShowImageWrapper>
							<ShowImage
								image={show3}
								imageFallback={show3Fallback}
								alt={t("shows.show_title_3")}
							/>
						</ShowImageWrapper>
					</ShowContainer>
				</>
			)}
		</Container>
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

const Video = ({ height, width }) => {
	return (
		<YoutubeContainer
			variants={descriptionVariants}
			initial="hidden"
			whileInView="show"
		>
			<iframe
				src="https://www.youtube-nocookie.com/embed/FOwKY2sQZmg?playlist=FOwKY2sQZmg&listType=playlist&autoplay=1&controls=1&loop=1&mute=1&cc_load_policy=0&iv_load_policy=3&disablekb=1&fs=0&modestbranding=1&playsinline=1&rel=0"
				width={width}
				height={height}
				loading="lazy"
				title="Tangomanso"
			></iframe>
		</YoutubeContainer>
	);
};

export default Show;
