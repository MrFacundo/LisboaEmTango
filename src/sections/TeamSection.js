import styled from "styled-components";
import tw from "twin.macro";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
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

const TeamMemberCardContainer = styled(motion.div)`
	@media (min-width: 768px) {
		flex-direction: ${(props) => (props.first ? "row-reverse" : "row")};
	}
	${tw`
	w-[80%]
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
			<Title>INSTRUCTORS</Title>
			<TeamMemberCardContainer
				first
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{
					ease: "easeInOut",
					duration: 0.8,
				}}
			>
				<MemberImage
					src={teamData[0].image}
					fallback={teamData[0].image.imageFallback}
					alt={teamData[0].name}
				/>
				<MemberBio member={teamData[0]} />
			</TeamMemberCardContainer>
			<TeamMemberCardContainer
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{
					ease: "easeInOut",
					duration: 0.8,
				}}
			>
				<MemberImage
					src={teamData[1].image}
					fallback={teamData[1].image.imageFallback}
					alt={teamData[1].name}
				/>
				<MemberBio member={teamData[1]} />
			</TeamMemberCardContainer>
		</TeamSectionContainer>
	);
};

export default TeamSection;
