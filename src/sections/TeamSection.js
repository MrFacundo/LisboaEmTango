import { useTranslation } from "react-i18next";
import styled from "styled-components";
import tw from "twin.macro";
import { motion } from "framer-motion";
import teamData from "../data/teamData";

import { Title } from "../globalStyles";

import { MemberBio } from "../components/Memberbio";
import { MemberImage } from "../components/MemberImage";

import BackgroundImage from "../assets/images/couple2.jpg";

const TeamSectionContainer = styled(motion.div)`
	${tw`
        bg-no-repeat
		w-full
		min-h-[300vh]
        flex
        flex-col
        pt-1
        pb-1
        xl:pt-2
        xl:pb-2
		justify-end
		bg-fixed
		z-10
		items-center
    `};
	background-image: url(${BackgroundImage});
	background-size: 70%;
	background-position: bottom 50% left 50%;

	@media only screen and (max-width: 1024px) {
		background-position: bottom 20% left 40%;
		background-size: 170%;
	}
`;

const Background = styled.div`
	${tw`
	relative
    `};
	background: linear-gradient(
		90deg,
		rgba(0, 31, 51, 1) 0%,
		rgba(0, 0, 0, 1) 30%,
		rgba(0, 0, 0, 1) 70%,
		rgba(0, 31, 51, 1) 100%
	);
`;

const BackgroundShadow = styled(motion.div)`
	${tw`
	absolute
	bottom-0
	h-[55%]
	md:h-[50%]
	w-full
	z-0
	
	
	`}
	background: linear-gradient(
		180deg,
		rgba(0, 0, 0, 0) 0%,
		rgba(0, 0, 0, 0.3) 10%
	);
`;

const Team = tw(motion.div)`
	py-[5rem]
	w-[80%]
	md:w-[70%]
	flex
	flex-col
`;

const TeamMemberCardContainer = tw.div`
	lg:first:flex-row-reverse
	lg:last:flex-row
	flex
	flex-col
	justify-center
	items-center
	md:items-start
	z-20
`;

const TeamSection = () => {
	const { t } = useTranslation();
	return (
		<Background>
			<TeamSectionContainer
				initial={{
					opacity: 0,
				}}
				whileInView={{
					opacity: 1,
				}}
				viewport={{ once: true, margin: "0px 0px -500px 0px" }}
				transition={{
					ease: "easeOut",
					duration: 1,
				}}
			>
				<Title name="Team">{t("team_section.title")}</Title>
				<Team
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true, margin: "0px 0px -300px 0px" }}
					transition={{
						ease: "easeInOut",
						duration: 0.5,
					}}
				>
					<TeamMemberCardContainer>
						<MemberImage
							src={teamData[0].image}
							fallback={teamData[0].image.imageFallback}
							alt={teamData[0].name}
						/>
						<MemberBio member={teamData[0]} />
					</TeamMemberCardContainer>
					<TeamMemberCardContainer>
						<MemberImage
							src={teamData[1].image}
							fallback={teamData[1].image.imageFallback}
							alt={teamData[1].name}
						/>
						<MemberBio member={teamData[1]} />
					</TeamMemberCardContainer>
				</Team>
			</TeamSectionContainer>
			<BackgroundShadow
				initial={{
					opacity: 0,
				}}
				whileInView={{
					opacity: 1,
				}}
				viewport={{ margin: "0px 0px -500px 0px" }}
				transition={{
					ease: "easeOut",
					delay: 0.5,
					duration: 1,
				}}
			/>
		</Background>
	);
};

export default TeamSection;
