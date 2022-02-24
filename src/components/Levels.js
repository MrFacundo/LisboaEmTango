import { useState, useEffect } from "react";

import tw from "twin.macro";
import styled from "styled-components";
import { motion } from "framer-motion";
import { BsChevronRight, BsArrowRightCircle } from "react-icons/bs";

import { useMediaQuery } from "react-responsive";
import { deviceSize } from "../components/responsive";

import ws1 from "../assets/images/ws5.jpg";
import ws2 from "../assets/images/ws7.jpg";
import social1 from "../assets/images/social1.jpg";
import social2 from "../assets/images/social5.jpg";
import couple1 from "../assets/images/couple3.jpg";

const levels = [
	{
		title: "GROUP LESSONS",
		description:
			"En las clases regulares se enseña tango social, la danza que se baila en las milongas. Están dividas en grupos de diferentes niveles con un programa progresivo y temático que ajuda a los alumnos a progresar a un ritmo homogéneo.",
		photo: ws1,
	},
	{
		title: "WORKSHOPS",
		description:
			"Son especialmente diseñados para desarrollar temáticas especificas. Generalmente con grupos más reduzidos y con una carga de trabajo mas intensa.",
		photo: ws2,
	},
	{
		title: "PRIVATE LESSONS",
		description:
			"Un encuentro intimo entre el alumno o pareja de baile y el profesor, donde los temas, contenidos y tiempos de aprendizaje son adecuados a las necesidades del alumno.",
		photo: social2,
	},
	{
		title: "La PráKtica",
		description:
			"Un espacio de practica libre, fundamental para el proceso de aprendizaje del tango social. Momento relajado y casual donde el error y la repetición forman parte del proceso.",
		photo: social1,
	},
	{
		title: "RAVE TANGUERA",
		description:
			"“La Rave Tanguera” es una Fiesta del Tango. Todos los primeros sábados de cada mes nuestro spacio queda decorado y transformado para recrear el ambiente nocturno e bohemio de la noche porteña. Una verdadera Experiencia Tanguera.",
		photo: social2,
	},
];

// styles

const LevelsContainer = tw.div`
    flex
    flex-col
    w-[90%]
	lg:w-[70%]
    font-text
    pb-4
`;

const LevelsWrapper = styled(motion.div)`
	${tw`
		flex
		md:pb-5
		md:h-[26rem]
    `};
	align-self: ${(props) => (props.left ? "start" : "self-end")};
	flex-direction: ${(props) => (props.left ? "row" : "row-reverse")}; ;
`;

const Level = tw(motion.div)`
	relative
	flex
    flex-col
    h-[12rem]
    w-[18rem]
    border-[1px]
	md:min-w-[30rem]
	md:h-[25rem]
	select-none
	justify-center
	md:justify-between
	overflow-hidden
`;

const Title = styled.div`
	${tw`
	flex
		text-4xl
		p-3
		pt-5
		md:text-7xl
		md:p-8
		uppercase
		items-center
    `};
	text-align: ${(props) => (props.left ? "start" : "end")};
`;

const TitleButton = tw(Title)`
	text-center
	p-0
	text-5xl
	md:text-[4rem]
`;

const Description = styled.div`
	${tw`
		text-base
		px-4
		pb-5
		md:px-8
		md:text-lg
    `};
	text-align: ${(props) => (props.left ? "start" : "end")};
`;

const DescriptionSm = tw(motion.div)`
		p-3
		absolute
		h-[12rem]
		w-[18rem]
		border-[1px]
		justify-center
		bg-primary
		align-middle
`;

const Image = tw(motion.img)`
	hidden
	lg:flex
	w-[40rem]
	px-16
	object-cover
	object-top
`;

const Button = tw(motion.div)`
	flex
    flex-col
    min-h-[14rem]
    w-[18rem]
    border
	md:min-h-[20rem]
	md:min-w-[30rem]
	justify-center
	hover:text-[#001F33]
	hover:border-[#001F33]
	duration-300
	cursor-pointer
	items-center
`;

// animations

const levelVariant = {
	hidden: { opacity: 0, y: 200 },
	show: {
		opacity: 1,
		y: 0,
		transition: {
			ease: "easeInOut",
			duration: 0.7,
		},
	},
};

const imageVariant = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			delay: 1,
			ease: "easeInOut",
			duration: 1,
		},
	},
};

const descriptionVariants = {
	open: {
		transform: "translateX(0%)",
		opacity: 1,
	},
	closed: {
		transform: "translateX(100%)",
		opacity: 0,
	},
};

const descriptionTransition = {
	duration: 0.8,
};

const Levels = () => {
	const cardsInitialState = Array(5).fill(false);

	const [isOpen, setOpen] = useState(cardsInitialState);

	const toggleDescription = (index) => {
		let newState = [...isOpen];
		newState[index] = !newState[index];
		newState.forEach((val, i) => {
			if (i !== index) newState[i] = false;
		});

		setOpen(newState);
	};

	const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

	return (
		<LevelsContainer>
			{levels.map((level, index) => {
				return (
					<LevelsWrapper
						key={index}
						left={+(index % 2 === 0)}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true, amount: 0.8, margin: "100px" }}
					>
						<Level
							onClick={() => toggleDescription(index)}
							variants={levelVariant}
						>
							{isMobile && (
								<DescriptionSm
									animate={isOpen[index] ? "open" : "closed"}
									variants={descriptionVariants}
									transition={descriptionTransition}
								>
									{level.description}
								</DescriptionSm>
							)}
							<Title left={+(index % 2 === 0)}>
								{level.title}
								{isMobile && <BsChevronRight className="text-[3rem]" />}
							</Title>
							{!isMobile && (
								<Description left={+(index % 2 === 0)}>
									{level.description}
								</Description>
							)}
						</Level>
						<Image variants={imageVariant} src={level.photo} alt="" />
					</LevelsWrapper>
				);
			})}
			<LevelsWrapper
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, amount: 0.8, margin: "100px" }}
			>
				<Button variants={levelVariant}>
					<a
						className="flex flex-col items-center"
						target={"_blank"}
						rel="noopener noreferrer"
						href="https://forms.gle/CA64NQdcKqfajRfn8"
					>
						<TitleButton>BOOK A CLASS</TitleButton>
						<BsArrowRightCircle className="mt-[1rem] text-[3rem] md:text-[5rem] text-center" />
					</a>
				</Button>
				<Image variants={imageVariant} src={couple1} alt="" />
			</LevelsWrapper>
		</LevelsContainer>
	);
};

export default Levels;
