import { motion } from "framer-motion";
import tw from "twin.macro";

import { useMediaQuery } from "react-responsive";
import { deviceSize } from "../components/responsive";

// animations

const banner = {
	animate: {
		transition: {
			delayChildren: 0.2,
			staggerChildren: 0.1,
		},
	},
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
    font-family["Archivo Narrow"]
    text-white
    md:font-black
    text-[1.5rem]
    md:text-[5rem]
    overflow-hidden
    tracking-wide
    whitespace-pre-wrap
`;

const LetterContainer = tw(motion.span)`
    relative
    inline-block    
`;
const Banner = () => {
	const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

	return (
		<motion.div variants={banner}>
			{!isMobile && (
				<>
					<BannerRow title={"Website"} />
					<BannerRow title={"in"} />
					<BannerRow title={"progress 👨‍🔧️"} />
				</>
			)}
			{isMobile && (
				<>
					<BannerRow title={"Texto sobre la escuela"} />
				</>
			)}
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

const BannerRow = ({ title }) => {
	return (
		<BannerRowContainer>
			<AnimatedLetters title={title} />
		</BannerRowContainer>
	);
};

export default Banner;
