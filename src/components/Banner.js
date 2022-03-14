import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import tw from "twin.macro";

// animations

const banner = {
	animate: {
		transition: {
			delayChildren: 1,
			staggerChildren: 0.1,
		},
	},
};

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			delayChildren: 0.5,
			staggerChildren: 0.5,
		},
	},
};

const row = {
	hidden: { opacity: 0 },
	show: { opacity: 1 },
};

const letterAni = {
	initial: { y: 100 },
	animate: {
		y: 0,
		transition: {
			ease: [0.6, 0.01, -0.05, 0.95],
			duration: 0.5,
		},
	},
};

// styles

const BannerRowContainer = tw(motion.div)`
    items-center
	content-center
	font-title
	uppercase
    text-white
    text-[1.3rem]
	md:text-[2.5rem]
    lg:text-[3.5rem]
    overflow-hidden
    whitespace-pre-wrap
	lg:line-height[5rem]
`;

const LetterContainer = tw(motion.span)`
    relative
    inline-block    
`;

const Banner = () => {
	const { t } = useTranslation();

	return (
		<motion.div variants={container} initial="hidden" animate="show">
			<BannerRowContainer variants={row}>
				<AnimatedLetters title={t("hero_section.banner_row_1")} />
			</BannerRowContainer>
			<BannerRowContainer variants={row}>
				<AnimatedLetters title={t("hero_section.banner_row_2")} />
			</BannerRowContainer>
			<BannerRowContainer variants={row}>
				<AnimatedLetters title={t("hero_section.banner_row_3")} />
			</BannerRowContainer>
		</motion.div>
	);
};

const AnimatedLetters = ({ title }) => (
	<motion.span variants={banner} initial="initial" animate="animate">
		{[...title].map((letter, index) => (
			<LetterContainer key={index} variants={letterAni}>
				{letter}
			</LetterContainer>
		))}
	</motion.span>
);

export default Banner;
