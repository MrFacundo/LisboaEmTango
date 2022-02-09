import tw from "twin.macro";

const LevelsContainer = tw.div`
    flex
    flex-col
    w-[90%]
    font-text
    pb-4
`;
const LevelOne = tw.div`
    flex-col
    min-h-[10rem]
    w-[18rem]
    border-[1px]
    border-color[#001F33]
    // bg-[#DEBA93]

`;
const LevelTwo = tw(LevelOne)`
    mt-[-0.5rem]
    self-end
    border-color[#63C5ED]
`;

const LevelThree = tw(LevelOne)`
    mt-[-0.5rem]
`;

const LevelFour = tw(LevelOne)`
    mt-[-0.5rem]
    self-end
    border-color[#63C5ED]
`;

const LevelFive = tw(LevelOne)`
    mt-[-0.5rem]
    border-color[#001F33]
`;

const TitleLeft = tw.div`
    text-lg
    p-3
    pt-8
    font-semibold
`;

const DescriptionRight = tw.div`
    text-base
    px-4
    text-right
    pb-5
`;

const TitleRight = tw(TitleLeft)`
    text-right
`;

const DescriptionLeft = tw(DescriptionRight)`
    text-left
`;

const Levels = () => {
	return (
		<LevelsContainer>
			<LevelOne>
				<TitleLeft>INICIADOS</TitleLeft>
				<DescriptionRight>
					Curso anual de conhecimento, estudo e aperfeiçoamento do Tango
					Argentino como Dança Social
				</DescriptionRight>
			</LevelOne>
			<LevelTwo>
				<TitleRight>INTERMÉDIOS</TitleRight>
				<DescriptionLeft>
					Curso anual para alunos que já têm algum conhecimento de Tango
					Argentino. Estudo da linguagem tangueira e das suas possibilidades na
					pista de dança.
				</DescriptionLeft>
			</LevelTwo>
			<LevelThree>
				<TitleLeft>AVANÇADOS</TitleLeft>
				<DescriptionRight>
					Curso anual onde abordam-se as necessidades do bailarino de Tango na
					pista de dança, sequências, musicalidade, condução e utilização do
					espaço.
				</DescriptionRight>
			</LevelThree>
			<LevelFour>
				<TitleRight>WORKSHOPS</TitleRight>
				<DescriptionLeft>
					abordam-se as necessidades do bailarino de Tango na pista de dança,
					sequências, musicalidade, condução e utilização do espaço.
				</DescriptionLeft>
			</LevelFour>
			<LevelFive>
				<TitleLeft>AULAS PRIVADAS</TitleLeft>
				<DescriptionRight>
					abordam-se as necessidades do bailarino de Tango na pista de dança,
					sequências, musicalidade, condução e utilização do espaço.
				</DescriptionRight>
			</LevelFive>
		</LevelsContainer>
	);
};

export default Levels;
