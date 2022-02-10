import tw from "twin.macro";
import styled from "styled-components";
import milonga1 from "../components/images/milonga1.jpg";
import milonga2 from "../components/images/milonga2.jpg";
import milonga3 from "../components/images/milonga3.jpg";
import milonga4 from "../components/images/milonga4.jpg";
import milonga5 from "../components/images/milonga5.jpg";

const levels = [
	{
		title: "GROUP LESSONS",
		description:
			"Curso anual de conhecimento, estudo e aperfeiçoamento do Tango Argentino como Dança Social",
		photo: milonga1,
	},
	{
		title: "WORKSHOPS",
		description:
			"Curso anual para alunos que já têm algum conhecimento de Tango Argentino. Estudo da linguagem tangueira e das suas possibilidades napista de dança.",
		photo: milonga2,
	},
	{
		title: "PRÁCTICA",
		description:
			"Curso anual onde abordam-se as necessidades do bailarino de Tango napista de dança, sequências, musicalidade, condução e utilização do espaço",
		photo: milonga3,
	},
	{
		title: "PRIVATE LESSONS",
		description:
			"abordam-se as necessidades do bailarino de Tango na pista de dança, sequências, musicalidade, condução e utilização do espaço.",
		photo: milonga4,
	},
	{
		title: "AULAS PRIVADAS",
		description:
			"abordam-se as necessidades do bailarino de Tango na pista de dança,sequências, musicalidade, condução e utilização do espaço.",
		photo: milonga5,
	},
];

const LevelsContainer = tw.div`
    flex
    flex-col
    w-[90%]
	md:w-[80%]
    font-text
    pb-4
`;

const LevelsWrapper = styled.div`
	${tw`
		flex
		md:pb-5
    `};
	align-self: ${(props) => (props.left ? "start" : "self-end")};
	flex-direction: ${(props) => (props.left ? "row" : "row-reverse")}; ;
`;

const LevelOne = tw.div`
    flex-col
    min-h-[10rem]
    w-[18rem]
    border-[1px]
    border-color[#001F33]
	md:min-h-[20rem]
	md:min-w-[30rem]
    // bg-[#DEBA93]

`;
const Title = styled.div`
	${tw`
		text-2xl
		p-3
		pt-5
		md:text-4xl
		md:p-8
    `};
	text-align: ${(props) => (props.left ? "start" : "end")};
`;

const Description = styled.div`
	${tw`
		text-base
		px-4
		text-right
		pb-5
		md:px-8
		md:pt-6
		md:text-left
		md:text-lg
    `};
	text-align: ${(props) => (props.left ? "start" : "end")};
`;

const Image = tw.img`
	hidden
	md:flex
	max-h-[20rem]
	w-[40rem]
	px-16
	object-cover
`;

const Levels = () => {
	return (
		<LevelsContainer>
			<LevelsWrapper left>
				<LevelOne>
					<Title left>{levels[0].title}</Title>
					<Description>{levels[0].description}</Description>
				</LevelOne>
				<Image src={levels[0].photo} alt="" />
			</LevelsWrapper>
			<LevelsWrapper>
				<LevelOne>
					<Title>{levels[1].title}</Title>
					<Description left>{levels[1].description}</Description>
				</LevelOne>
				<Image src={levels[1].photo} alt="" />
			</LevelsWrapper>
			<LevelsWrapper left>
				<LevelOne>
					<Title left>{levels[2].title}</Title>
					<Description>{levels[2].description}</Description>
				</LevelOne>
				<Image src={levels[2].photo} alt="" />
			</LevelsWrapper>
			<LevelsWrapper>
				<LevelOne>
					<Title>{levels[3].title}</Title>
					<Description left>{levels[3].description}</Description>
				</LevelOne>
				<Image src={levels[3].photo} alt="" />
			</LevelsWrapper>
			<LevelsWrapper left>
				<LevelOne>
					<Title left>{levels[4].title}</Title>
					<Description>{levels[4].description}</Description>
				</LevelOne>
				<Image src={levels[4].photo} alt="" />
			</LevelsWrapper>
		</LevelsContainer>
	);
};

export default Levels;
