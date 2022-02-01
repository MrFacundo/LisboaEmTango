import styled from "styled-components";
import tw from "twin.macro";
import { Element } from "react-scroll";
import teamData from "../data/teamData";

import { TeamMemberCard } from "../components/TeamMemberCard";

const TeamSectionContainer = styled(Element)`
	${tw`
        w-full
        min-h-screen
        flex
        flex-col
        pt-1
        pb-1
        xl:pt-2
        xl:pb-2
		content-center
    `};
	background: rgba(107, 185, 10, 0.3);
`;

const Title = tw.h1`
	py-9
    text-3xl
    xl:text-3xl
    2xl:text-5xl
    2xl:mt-6
    2xl:mb-6
    text-white
    font-bold
    text-center
`;

const TeamSection = () => {
	return (
		<TeamSectionContainer name="Team">
			<Title>Our Team</Title>
			{teamData &&
				teamData.map((member, index) => {
					return <TeamMemberCard key={index} member={member} />;
				})}
		</TeamSectionContainer>
	);
};

export default TeamSection;
