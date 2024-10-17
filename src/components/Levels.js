import { useTranslation } from "react-i18next";
import { useState } from "react";
import tw from "twin.macro";
import { motion } from "framer-motion";
import { BsChevronRight, BsArrowRightCircle } from "react-icons/bs";

import { useMediaQuery } from "react-responsive";
import { deviceSize } from "../components/responsive";

// images

import ws1 from "../assets/images/ws10.webp";
import ws2 from "../assets/images/ws8.webp";
import social5 from "../assets/images/ws9.webp";
import social3 from "../assets/images/social1.webp";
import social6 from "../assets/images/social7.webp";
import ws4 from "../assets/images/ws11.webp";

// images fallback

import ws1Fallback from "../assets/images/ws10.jpg";
import ws2Fallback from "../assets/images/ws8.jpg";
import social5Fallback from "../assets/images/ws9.jpg";
import social3Fallback from "../assets/images/social1.jpg";
import social6Fallback from "../assets/images/social7.jpg";
import ws4Fallback from "../assets/images/ws11.jpg";

const levels = [
	{
		title: "levels.group.title",
		description: "levels.group.description",
		photo: ws1,
		photoFallback: ws1Fallback,
	},
	{
		title: "levels.workshop.title",
		description: "levels.workshop.description",
		photo: ws2,
		photoFallback: ws2Fallback,
	},
	{
		title: "levels.private.title",
		description: "levels.private.description",
		photo: social5,
		photoFallback: social5Fallback,
	},
	{
		title: "levels.praktica.title",
		description: "levels.praktica.description",
		photo: social3,
		photoFallback: social3Fallback,
	},
	{
		title: "levels.rave.title",
		description: "levels.rave.description",
		photo: social6,
		photoFallback: social6Fallback,
	},
];

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
	sm:w-[80%]
    border-[1px]
	lg:w-[30rem]
	sm:h-[25rem]
	select-none
	justify-center
	md:justify-between
	overflow-hidden
`;

const LevelTitle = tw.h2`
	justify-between
	flex
	text-4xl
	p-3
	sm:text-7xl
	sm:p-8
	uppercase
	items-center
`;

const TitleButton = tw(LevelTitle)`
	text-center
	p-0
	text-5xl
	md:text-[4rem]
`;

const Description = tw.div`
		text-base
		px-4
		pb-5
		sm:px-8
		sm:text-xl

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

const ImageContainer = tw(motion.div)`
	h-[25rem]
	md:w-[30%]
	lg:w-[30rem]
	xl:mx-16
`;

const Button = tw(motion.div)`
	flex
    flex-col
    min-h-[14rem]
    w-[18rem]
    border
	sm:min-h-[20rem]
	sm:w-[80%]
	lg:w-[30rem]
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
			delay: 0.5,
			ease: "easeInOut",
			duration: 1,
		},
	},
};

const descriptionVariants = {
	open: {
		transform: "translateX(0%)",
		opacity: 1,
		transition: {
			duration: 0.8,
		},
	},
	closed: {
		transform: "translateX(100%)",
		opacity: 0,
		transition: {
			duration: 0.8,
		},
	},
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
	const isLaptop = useMediaQuery({ minWidth: deviceSize.tablet });

	return (
		<LevelsContainer>
			{isMobile &&
				levels.map((level, index) => {
					return (
						<LevelsWrapper
							key={index}
							initial="hidden"
							whileInView="show"
							viewport={{ once: true, amount: 0.8, margin: "100px" }}
						>
							<Level
								onClick={() => toggleDescription(index)}
								variants={levelVariant}
							>
								<DescriptionSm
									animate={isOpen[index] ? "open" : "closed"}
									variants={descriptionVariants}
								>
									{t(level.description)}
								</DescriptionSm>
								<LevelTitle>
									{t(level.title)}
									<BsChevronRight className="" />
								</LevelTitle>
							</Level>
						</LevelsWrapper>
					);
				})}
			{!isMobile &&
				levels.map((level, index) => {
					return (
						<LevelsWrapper
							key={index}
							initial="hidden"
							whileInView="show"
							viewport={{ once: true, margin: "100px" }}
						>
							<Level variants={levelVariant}>
								<LevelTitle>{t(level.title)}</LevelTitle>
								<Description>{t(level.description)}</Description>
							</Level>
							{isLaptop && (
								<ImageContainer variants={imageVariant}>
									<picture>
										<source srcSet={level.photo} type={"image/webp"} />
										<img
											className="w-full h-full object-cover"
											src={level.photoFallback}
											alt="aulas e prácticas de tango"
										/>
									</picture>
								</ImageContainer>
							)}
						</LevelsWrapper>
					);
				})}
			<LevelsWrapper
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, margin: "100px" }}
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
				{isLaptop && (
					<ImageContainer variants={imageVariant}>
						<picture>
							<source srcSet={ws4} type={"image/webp"} />
							<img
								className="w-full h-full object-cover"
								src={ws4Fallback}
								alt="aulas e prácticas de tango"
							/>
						</picture>
					</ImageContainer>
				)}
			</LevelsWrapper>
		</LevelsContainer>
	);
};

export default Levels;
