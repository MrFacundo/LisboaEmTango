import { useTranslation } from "react-i18next";
import { Title } from "../globalStyles";
import tw, { styled } from "twin.macro";
import { useMediaQuery } from "react-responsive";
import { deviceSize } from "../components/responsive";
import { motion } from "framer-motion";

import show1 from "../assets/images/show15.jpg";
import show1Mobile from "../assets/images/show13.jpg";
import show2 from "../assets/images/show8.jpg";
import show2Mobile from "../assets/images/show16.jpg";
import show3 from "../assets/images/show2.jpg";
import show3Mobile from "../assets/images/show3.jpg";

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
	lg:absolute
	left-0
	right-0
	py-0
	md:py-0
	md:top-[3rem]
`;

const ShowContainer = tw(motion.div)`
	min-h-[27rem]
	md:min-h-[50rem]
	lg:min-h-[50rem]
	lg:max-h-[60rem]
	w-full
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

const ShowBackground = tw.img`
	overflow-hidden
	absolute
	min-w-[100%]
	top-0
	bottom-0
	m-auto
`;

const ShowImageMobile = tw.img`
		max-w-[80%]
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

const ShowSection = () => {
	const { t } = useTranslation();

	const isMobile = useMediaQuery({ maxWidth: deviceSize.laptop });
	const isDesktop = useMediaQuery({ minWidth: deviceSize.desktop });

	return (
		<ShowSectionContainer name="Shows">
			<SectionTitle>{t("shows_section.title")}</SectionTitle>
			{isMobile && (
				<>
					<ShowDescription
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{
							ease: "easeInOut",
							delay: 0.5,
							duration: 1,
						}}
						viewport={{ once: true }}
					>
						<ShowTitle>{t("shows_section.show_title_1")}</ShowTitle>
						<ShowImageMobile
							src={show1Mobile}
							alt={t("shows_section.show_title_1")}
						/>
						<Divider />
						<ShowTitle>{t("shows_section.show_title_2")}</ShowTitle>
						<ShowImageMobile
							src={show2Mobile}
							alt={t("shows_section.show_title_2")}
						/>
						<p className="pt-4">{t("shows_section.show_description_2")}</p>
						<Divider style={{ marginTop: "2rem" }} />

						<ShowTitle>
							<i>{t("shows_section.show_title_3")}</i>
						</ShowTitle>
						<ShowImageMobile
							src={show3Mobile}
							alt={t("shows_section.show_title_3")}
						/>

						<p className="pt-4">{t("shows_section.show_description_3")}</p>
					</ShowDescription>
				</>
			)}
			{!isMobile && (
				<>
					<ShowContainer name="ShowContainer">
						<ShowDescription
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{
								ease: "easeInOut",
								delay: 0.5,
								duration: 1,
							}}
							viewport={{ once: true }}
							style={{ marginRight: "10rem" }}
						>
							<ShowTitle>{t("shows_section.show_title_1")}</ShowTitle>
						</ShowDescription>
						<DescriptionBg
							initial={{ opacity: 0.5 }}
							whileInView={{ opacity: 1 }}
							transition={{
								ease: "easeInOut",
								delay: 1,
								duration: 1,
							}}
						/>
						<ShowBackground
							name="SectionBackground"
							src={show1}
							alt="Shows de Tango em Lisboa"
						/>
					</ShowContainer>
					<ShowContainer
						name="ShowContainer"
						style={{ justifyContent: "flex-end" }}
					>
						<ShowDescription
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{
								ease: "easeInOut",
								delay: 0.5,
								duration: 1,
							}}
							viewport={{ once: true }}
						>
							<ShowTitle>{t("shows_section.show_title_2")}</ShowTitle>
							<p className="z-10">{t("shows_section.show_description_2")}</p>
						</ShowDescription>
						<DescriptionBg2
							initial={{ opacity: 0.5 }}
							whileInView={{ opacity: 1 }}
							transition={{
								ease: "easeInOut",
								delay: 1,
								duration: 1,
							}}
						/>
						<ShowBackground
							name="SectionBackground"
							src={show2}
							alt="Orquesta de Tango Tangomanso"
						/>
					</ShowContainer>
					<ShowContainer style={{ justifyContent: "space-between" }}>
						<ShowDescription
							style={{ margin: "0rem 3rem" }}
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{
								ease: "easeInOut",
								delay: 0.5,
								duration: 1,
							}}
							viewport={{ once: true }}
						>
							<DescriptionBg3
								initial={{ opacity: 0.5 }}
								whileInView={{ opacity: 1 }}
								transition={{
									ease: "easeInOut",
									delay: 1,
									duration: 1,
								}}
							/>
							<ShowTitle>
								<i>{t("shows_section.show_title_3")}</i>
							</ShowTitle>
							<p className="z-10">{t("shows_section.show_description_3")} </p>
						</ShowDescription>
						<YoutubeIframe
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{
								ease: "easeInOut",
								delay: 0.5,
								duration: 1,
							}}
							viewport={{ once: true }}
						>
							<iframe
								src="https://www.youtube-nocookie.com/embed/FOwKY2sQZmg?playlist=FOwKY2sQZmg&listType=playlist&autoplay=1&controls=1&loop=1&mute=1&cc_load_policy=0&iv_load_policy=3&disablekb=1&fs=0&modestbranding=1&playsinline=1&rel=0"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								width={isDesktop ? "960" : "500"}
								height={isDesktop ? "480" : "272"}
								loading="lazy"
								title="Tangomanso"
							></iframe>
						</YoutubeIframe>
						<ShowBackground src={show3} alt="Show Volver" />
					</ShowContainer>
				</>
			)}
		</ShowSectionContainer>
	);
};

export default ShowSection;
