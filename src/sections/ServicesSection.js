import tw from "twin.macro";
import { Title } from "../styles";
import { Element } from "react-scroll";
import Levels from "../components/Levels";
import ImagesDivider from "../components/ImagesDivider";

const ServicesSectionContainer = tw(Element)`
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
    bg-[#DEBA93]
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

const ServicesSection = () => {
	return (
		<ServicesSectionContainer name="Services">
			<Title>LEARN AND PRACTICE</Title>
			<SectionInfo>
				L.E. Tango es un espacio para aprender herramientas, pasos y técnicas
				necesarias para poder disfrutar del tango como baile social,
				independientemente del nivel o de la experiencia de baile que tengas.
			</SectionInfo>
			<Levels />
			<ImagesDivider />
		</ServicesSectionContainer>
	);
};

export default ServicesSection;
