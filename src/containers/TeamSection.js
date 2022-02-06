import styled from "styled-components";
import tw from "twin.macro";
import { Element } from "react-scroll";
import teamData from "../data/teamData";

import { Title } from "../styles";

import { MemberBio } from "../components/Memberbio";
import { MemberImage } from "../components/MemberImage";

const TeamSectionContainer = tw(Element)`
        w-full
        min-h-screen
        flex
        flex-col
        pt-1
        pb-1
        xl:pt-2
        xl:pb-2
		items-center
        bg-[rgba(107, 40, 169, 0.3)]
`;

const TeamMemberCardContainer = styled.div`
	@media (min-width: 768px) {
		flex-direction: ${(props) => (props.first ? "row-reverse" : "row")};
	}
	${tw`
	w-[90%]
	flex
	flex-col
	justify-center
	items-center
	md:items-start
`};
`;

const TeamSection = () => {
	return (
		<TeamSectionContainer name="Team">
			<Title>Our Team</Title>
			<TeamMemberCardContainer first>
				<MemberImage member={teamData[0]} />
				<MemberBio member={teamData[0]} />
			</TeamMemberCardContainer>
			<TeamMemberCardContainer>
				<MemberImage member={teamData[1]} />
				<MemberBio member={teamData[1]} />
			</TeamMemberCardContainer>
		</TeamSectionContainer>
	);
};

export default TeamSection;
