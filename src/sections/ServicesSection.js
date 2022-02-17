import tw from "twin.macro";
import { Title } from "../styles";
import { Element } from "react-scroll";
import Levels from "../components/Levels";
import ImagesDivider from "../components/ImagesDivider";
import social2 from "../assets/images/social2.jpg";
import social1 from "../assets/images/social5.jpg";

import { useMediaQuery } from "react-responsive";
import { deviceSize } from "../components/responsive";

const ServicesSectionContainer = tw(Element)`
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
        text-[#051622]
`;

const ServicesTitle = tw(Title)`
        text-[#051622]
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

const Image = tw.img`
    h-[40rem]	
    md:h-[50rem]
	w-full
    object-contain
	// md:object-cover
`;

const ServicesSection = () => {
	const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

	return (
		<ServicesSectionContainer name="Services">
			<ServicesTitle>Learn and practice</ServicesTitle>
			<SectionInfo>
				We offer a programme of learning for every level of experience aimed to
				inspire creativity, curiosity and experimentation through tango.{" "}
			</SectionInfo>
			<Levels />
			<ImagesDivider />
			{/* <Image src={isMobile ? social1 : social2} alt="" /> */}
		</ServicesSectionContainer>
	);
};

export default ServicesSection;
