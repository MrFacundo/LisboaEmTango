import { useTranslation } from "react-i18next";
import tw from "twin.macro";
import { Title } from "../globalStyles";
import { Element } from "react-scroll";
import Levels from "../components/Levels";
import ImagesDivider from "../components/ImagesDivider";

const LearnSectionContainer = tw(Element)`
    text-white
    w-full
    min-h-screen
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
	md:text-2xl
    text-center
	max-w-[80%]
	mt-2
	mb-[2rem]
	md:mt-[2rem]
    md:mb-[4rem]
    2xl:mt-2
    xl:max-w-3xl
    pl-4
    pr-4
    lg:pl-2
    lg:pr-2
`;

const LearnSection = () => {
	const { t } = useTranslation();

	return (
		<LearnSectionContainer name="Learn">
			<Title>{t("learn_section.title")}</Title>
			<SectionInfo>{t("learn_section.description")}</SectionInfo>
			<Levels />
			<ImagesDivider />
		</LearnSectionContainer>
	);
};

export default LearnSection;
