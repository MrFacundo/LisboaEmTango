import { useTranslation } from "react-i18next";
import { useState } from "react";
import tw from "twin.macro";
import { motion } from "framer-motion";
import { BsChevronRight, BsArrowRightCircle } from "react-icons/bs";

import { useMediaQuery } from "react-responsive";
import { deviceSize } from "../components/responsive";

import ws1 from "../assets/images/ws10.jpg";
import ws2 from "../assets/images/ws8.jpg";
import ws4 from "../assets/images/ws11.jpg";
import social6 from "../assets/images/social7.jpg";
import social3 from "../assets/images/social1.jpg";
import social5 from "../assets/images/ws9.jpg";

const levels = [
	{
		title: "levels.group.title",
		description: "levels.group.description",
		photo: ws1,
	},
	{
		title: "levels.workshop.title",
		description: "levels.workshop.description",
		photo: ws2,
	},
	{
		title: "levels.private.title",
		description: "levels.private.description",
		photo: social5,
	},
	{
		title: "levels.praktica.title",
		description: "levels.praktica.description",
		photo: social3,
	},
	{
		title: "levels.rave.title",
		description: "levels.rave.description",
		photo: social6,
	},
];

// styles

const LevelsContainer = tw.div`
    flex
    flex-col
    w-[90%]
	lg:w-[80%]
    font-text
    pb-4
	items-center
`;

const LevelsWrapper = tw(motion.div)`
	flex
	md:pb-5
	md:h-[26rem]
`;

const Level = tw(motion.div)`
	relative
	flex
    flex-col
    h-[12rem]
    w-[18rem]
    border-[1px]
	md:min-w-[36rem]
	lg:min-w-[30rem]
	md:h-[25rem]
	select-none
	justify-center
	md:justify-between
	overflow-hidden
`;

const Title = tw.div`
	flex
	text-4xl
	p-3
	pt-5
	md:text-7xl
	md:p-8
	uppercase
	items-center
`;

const TitleButton = tw(Title)`
	text-center
	p-0
	text-5xl
	md:text-[4rem]
`;

const Description = tw.div`
		text-base
		px-4
		pb-5
		md:px-8
		md:text-xl

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
	md:min-w-[36rem]
	lg:min-w-[30rem]
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
	const { t } = useTranslation();

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
									{t(level.description)}
								</DescriptionSm>
							)}
							<Title left={+(index % 2 === 0)}>
								{t(level.title)}
								{isMobile && <BsChevronRight className="text-[3rem]" />}
							</Title>
							{!isMobile && (
								<Description left={+(index % 2 === 0)}>
									{t(level.description)}
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
						<TitleButton>{t("levels.button")}</TitleButton>
						<BsArrowRightCircle className="mt-[1rem] text-[3rem] md:text-[5rem] text-center" />
					</a>
				</Button>
				<Image variants={imageVariant} src={ws4} alt="" />
			</LevelsWrapper>
		</LevelsContainer>
	);
};

export default Levels;
