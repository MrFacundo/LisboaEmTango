import { useTranslation } from "react-i18next";
import React from "react";
import tw from "twin.macro";
import { motion } from "framer-motion";
import { Element } from "react-scroll";
import { Title } from "../globalStyles";
import { BsArrowDown } from "react-icons/bs";
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
        // bg-primary
		// bg-[#001829]
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
	p-3
	pt-6
	font-thin
	uppercase`;

const Class = tw.div`
	text-base
	md:text-lg
	px-4
	pb-1
`;

const Separator = tw.div`
	h-5
	border-b-[1px]
	border-white
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
	pt-4
	mt-[2rem]
	mb-[4rem]
	md:pt-[3rem]
	h-[13rem]
	w-[13rem]
	md:h-[15rem]
	md:w-[15rem]
	hover:text-primary
	hover:border-secondary
	duration-300
`;

const CTAContainer = tw.div`
	w-[60%]
	text-align[-webkit-center]
	flex
	flex-col
	md:flex-row
	place-content-evenly
	mt-[5rem]
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
    text-center
	md:max-w-[40%]
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
					<strong>20:00</strong> - {t("schedule_section.day1.class1")}
				</Class>
				<Class>
					<strong>21:00</strong> - {t("schedule_section.day1.class2")}
				</Class>
				<Separator />
				<Day>{t("schedule_section.day2.name")}</Day>
				<Class>
					<strong>20:00</strong> - {t("schedule_section.day2.class1")}
				</Class>
				<Class>
					<strong>21:00</strong> - {t("schedule_section.day2.class2")}
				</Class>
				<Separator />
				<Day>{t("schedule_section.day3.name")}</Day>
				<Class>
					<strong>18:00</strong> - {t("schedule_section.day3.class1")}
				</Class>
				<Class>
					<strong>19:00</strong> - {t("schedule_section.day3.class2")}
				</Class>
				<Separator />
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
							<BsArrowDown className="text-[2rem] mt-4" />
						</motion.span>
					</CTALink>
				</CTA>
			</CTAContainer>
		</ScheduleSectionContainer>
	);
};

export default ScheduleSection;
