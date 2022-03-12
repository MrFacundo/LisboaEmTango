import { useMediaQuery } from "react-responsive";
import { deviceSize } from "../components/responsive";
import { motion } from "framer-motion";
import tw, { styled } from "twin.macro";

import social1 from "../assets/images/social5.jpg";
import social2 from "../assets/images/social2.jpg";

// styles

const DividerContainer = styled(motion.div)`
	${tw`
	w-full
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

const ImagesDivider = () => {
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
		</DividerContainer>
	);
};

export default ImagesDivider;
