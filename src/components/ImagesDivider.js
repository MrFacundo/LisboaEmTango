import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { deviceSize } from "../components/responsive";
import { motion } from "framer-motion";
import tw, { styled } from "twin.macro";

import social1 from "../assets/images/social5.jpg";
import social2 from "../assets/images/social2.jpg";
import social3 from "../assets/images/social3.jpg";
import social4 from "../assets/images/social4.jpg";

// styles

const DividerContainer = styled(motion.div)`
	${tw`
	w-full
	min-h-full
    md:min-h-[110rem]
    relative
	flex
	flex-col
	overflow-hidden
    `};
	background: linear-gradient(
		180deg,
		rgba(0, 0, 0, 1) 10%,
		rgba(0, 31, 51, 1) 89%,
		rgba(0, 0, 0, 1) 100%
	);
`;

const Image1 = tw(motion.img)`
	w-full
    object-contain
`;

const Image2 = tw.img`
    absolute
    left-[10rem]
    top-[90rem]
    w-[35rem]
	border
	border-primary
	p-3

`;

const Image3 = tw.img`
	border
	border-primary
	p-5
    absolute
    right-[10rem]
    top-[190rem]
    w-[55rem]
`;

const Image4 = tw.img`
    absolute
    left-[10rem]
    top-[280rem]
    w-[30rem]
	border
	border-primary
	p-3
`;

const Text = tw.p`
	font-text
	text-[3rem]
	text-white
    absolute
    right-[10rem]
    top-[5rem]
    w-[35rem]
	// border
	// border-primary
	p-3
`;

const ImagesDivider = () => {
	const [offsetY, setOffsetY] = useState(0);
	const handleScroll = () => setOffsetY(window.pageYOffset);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

	return (
		<DividerContainer>
			<Image1
				src={isMobile ? social1 : social2}
				alt=""
				initial={{
					opacity: 0,
				}}
				whileInView={{
					opacity: 1,
				}}
				viewport={{ once: false, margin: "0px 0px -100px 0px" }}
				transition={{
					ease: "easeOut",
					duration: 1.5,
				}}
			/>
			{!isMobile && (
				<>
					<Image2
						style={{ transform: `translateY(-${offsetY * 0.3}px)` }}
						src={social3}
						alt=""
					/>
					<Image3
						style={{ transform: `translateY(-${offsetY * 0.6}px)` }}
						src={social1}
						alt=""
					/>
					<Image4
						style={{ transform: `translateY(-${offsetY * 0.8}px)` }}
						src={social4}
						alt=""
					/>
					<Text style={{ transform: `translateY(${offsetY * 0.15}px)` }}>
						Maecenas vulputate dictum tellus, at congue nibh euismod ut. Sed a
						est justo. Sed at posuere massa. Fusce pellentesque consectetur
						lectus ut gravida.
					</Text>
				</>
			)}
		</DividerContainer>
	);
};

export default ImagesDivider;
