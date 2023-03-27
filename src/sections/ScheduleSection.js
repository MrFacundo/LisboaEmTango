import { useTranslation } from "react-i18next";
import React from "react";
import tw from "twin.macro";
import { motion } from "framer-motion";
import { Element } from "react-scroll";
import { Title } from "../globalStyles";
import { Link } from "react-scroll";

const ScheduleSectionContainer = tw(Element)`
        w-full
        flex
        flex-col
        relative
        pt-1
        pb-1
        xl:pt-2
        xl:pb-2
        items-center
        bg-[#D4A573]

`;

const GridContainer = tw.div`
	text-white
    w-[80%]
	flex-col
	font-text
`;

const Day = tw.h2`
	text-3xl
	md:text-5xl
	pt-6
	pb-4
	font-thin
	uppercase`;

const Class = tw.div`
	text-lg
	px-5
	py-2
	md:py-4
	md:text-2xl
`;

const Hour = tw.span`
	font-bold
`;

const Separator = tw.div`
	h-5
	border-b-[1px]
	border-white
	my-4
`;

const CTA = tw(motion.button)`
	bg-secondary
	text-white
	items-center
	font-text
	rounded-full
	cursor-pointer
	flex
	flex-col
	text-center
	justify-center
	text-[1.6rem]
	md:text-[2rem]
	border-2
	border-primary
	mt-[2rem]
	mb-[4rem]
	h-[12rem]
	w-[12rem]
	md:h-[15rem]
	md:w-[15rem]
	lg:mt-[3rem]
	hover:text-primary
	hover:border-secondary
	duration-300
	uppercase
`;

const CTAContainer = tw.div`
	w-[60%]
	text-align[-webkit-center]
	flex
	flex-col
	// md:flex-row
	place-content-evenly
	mt-[5rem]
	xl:mt-[10rem]
	items-center
`;

const CTALink = tw(Link)`
	text-center
	text-align[-webkit-center]
	justify-center
	
`;

const SectionInfo = tw.p`
	text-white
    text-xl
	font-text
	md:text-2xl
	lg:text-4xl
    text-center
	xl:max-w-[40%]
    2xl:mt-2
`;

const ScheduleSection = () => {
	const { t } = useTranslation();

	return (
		<ScheduleSectionContainer name="Schedule">
			<Title>{t("schedule_section.title")}</Title>
			<GridContainer>
				<Day>{t("schedule_section.day1.name")}</Day>
				<Class>
					<Hour>19:00</Hour> - {t("schedule_section.day1.class1")}
				</Class>
				<Class>
					<Hour>20:00</Hour> - {t("schedule_section.day1.class2")}
				</Class>
				<Class>
					<Hour>21:00</Hour> - {t("schedule_section.day1.class3")}
				</Class>
				<Separator />
				<Day>{t("schedule_section.day2.name")}</Day>
				<Class>
					<Hour>20:00</Hour> - {t("schedule_section.day2.class1")}
				</Class>
				<Class>
					<Hour>21:00</Hour> - {t("schedule_section.day2.class2")}
				</Class>
			</GridContainer>
			<CTAContainer>
				<SectionInfo>{t("schedule_section.CTA_description")}</SectionInfo>
				<CTA
					initial={{ scale: 0 }}
					whileInView={{ scale: 1 }}
					transition={{
						ease: "easeInOut",
						duration: 0.3,
					}}
				>
					<CTALink to="Newsletter" smooth={"easeInOutQuad"} duration={1500}>
						<motion.span
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{
								ease: "easeInOut",
								delay: 0.5,
								duration: 0.3,
							}}
						>
							{t("schedule_section.CTA_button")}
						</motion.span>
						<motion.span
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{
								ease: "easeInOut",
								delay: 0.5,
								duration: 0.3,
							}}
						>
						</motion.span>
					</CTALink>
				</CTA>
			</CTAContainer>
		</ScheduleSectionContainer>
	);
};

export default ScheduleSection;
