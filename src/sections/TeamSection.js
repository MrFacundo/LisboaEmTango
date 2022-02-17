import styled from "styled-components";
import tw from "twin.macro";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import teamData from "../data/teamData";

import { useMediaQuery } from "react-responsive";
import { deviceSize } from "../components/responsive";

import { Title } from "../styles";

import { MemberBio } from "../components/Memberbio";
import { MemberImage } from "../components/MemberImage";

import BackgroundImage from "../assets/images/couple2.jpg";

const TeamSectionContainer = styled(motion.div)`
	${tw`
        bg-no-repeat
		w-full
		min-h-[200vh]
		md:min-h-[300vh]
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
	background-size: 100%;
	background-position: bottom 60% left 40%;

	@media only screen and (max-width: 768px) {
		background-position: bottom 20% left 40%;
		background-size: 170%;
	}
`;

const Background = tw.div`
	relative
	bg-[#001F33]
`;

const BackgroundShadow = tw(motion.div)`
	absolute
	bottom-0
	h-[100%]
	w-full
	bg-[rgba(0, 0, 0, 0.5)]
	z-0
`;

const Team = tw.div`
	py-[5rem]
	w-[80%]
	flex
	flex-col
`;

const TeamMemberCardContainer = styled(motion.div)`
	@media (min-width: 768px) {
		flex-direction: ${(props) => (props.first ? "row-reverse" : "row")};
	}
	${tw`
	flex
	flex-col
	justify-center
	items-center
	md:items-start
	z-20

`};
`;

const TeamSection = () => {
	const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });
	const mobileParams = (isMobile) => {
		if (!isMobile) {
			return { margin: "0px 0px -1000px 0px" };
		} else {
			return { margin: "0px 0px -800px 0px" };
		}
	};

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
					duration: 2,
				}}
			>
				<Title name="Team">INSTRUCTORS</Title>
				<Team>
					<TeamMemberCardContainer
						first
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true, margin: "0px 0px -300px 0px" }}
						transition={{
							ease: "easeInOut",
							duration: 0.5,
							// delay: 1,
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
						viewport={{ once: true, margin: "0px 0px -300px 0px" }}
						transition={{
							ease: "easeInOut",
							duration: 0.5,
							// delay: 1,
						}}
					>
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
				viewport={mobileParams(isMobile)}
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
