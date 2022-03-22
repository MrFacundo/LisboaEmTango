import { useTranslation } from "react-i18next";
import styled from "styled-components";
import tw from "twin.macro";
import { motion } from "framer-motion";
import teamData from "../data/teamData";

import { Title } from "../globalStyles";

import { MemberBio } from "../components/Memberbio";
import { MemberImage } from "../components/MemberImage";

import bg from "../assets/images/c1.jpg";
import bgMobile from "../assets/images/c1Mobile.jpg";

const TeamSectionContainer = tw(motion.div)`
		w-full
		min-h-[180vh]
		lg:min-h-[300vh]
        flex
        flex-col
        pt-1
        pb-1
        xl:pt-2
        xl:pb-2
		justify-end
		items-center
`;

const BackgroundGradient = styled.div`
	${tw`
	relative
	flex
	justify-center
	
	`};
	background: linear-gradient(
		90deg,
		rgba(0, 31, 51, 1) 0%,
		rgba(0, 0, 0, 1) 30%,
		rgba(0, 0, 0, 1) 70%,
		rgba(0, 31, 51, 1) 100%
	);
`;

const BackgroundImageDiv = styled(motion.div)`
	${tw`
	absolute
	bg-center
	bg-no-repeat
	h-[300vh]
    `};

	@media only screen and (max-width: 1024px) {
		background: url(${bgMobile}) top center no-repeat;
	}

	background: url(${bg});
	background-repeat: no-repeat;
	background-size: contain;
	width: 80%;
`;

const BackgroundShadow = styled(motion.div)`
	${tw`
	absolute
	bottom-0
	h-[80%]
	md:h-[80%]
	w-full
`}
	background: linear-gradient(
	180deg,
	rgba(0, 0, 0, 0) 0%,
	rgba(0, 0, 0, 0.7) 10%
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
	lg:items-start
	z-10
`;

const TeamSection = () => {
	const { t } = useTranslation();
	return (
		<BackgroundGradient>
			<BackgroundImageDiv
				initial={{
					opacity: 0,
				}}
				whileInView={{
					opacity: 1,
				}}
				viewport={{ once: false, margin: "0px 0px -500px 0px" }}
				transition={{
					ease: "easeOut",
					duration: 1,
				}}
			/>
			<TeamSectionContainer name="Team">
				<Title>{t("team_section.title")}</Title>
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
							fallback={teamData[0].imageFallback}
							alt={teamData[0].name}
						/>
						<MemberBio member={teamData[0]} />
					</TeamMemberCardContainer>
					<TeamMemberCardContainer>
						<MemberImage
							src={teamData[1].image}
							fallback={teamData[1].imageFallback}
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
		</BackgroundGradient>
	);
};

export default TeamSection;
