import tw from "twin.macro";
import { Title } from "../styles";
import { Element } from "react-scroll";
import ScheduleGrid from "../components/ScheduleGrid";
import Levels from "../components/Levels";
import Image from "../components/images/79.jpg";

const ScheduleSectionContainer = tw(Element)`
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

const ScheduleTitle = tw(Title)`
        text-[#051622]
        py-4
`;

const ScheduleSection = () => {
	return (
		<ScheduleSectionContainer>
			<ScheduleTitle>CLASSES AND WORKSHOPS</ScheduleTitle>
			<Levels />
			<img src={Image} alt="" />
			<ScheduleTitle>Schedule</ScheduleTitle>
			<ScheduleGrid />
		</ScheduleSectionContainer>
	);
};

export default ScheduleSection;
