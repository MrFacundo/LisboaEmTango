import { useMediaQuery } from "react-responsive";
import { deviceSize } from "../components/responsive";
import { motion } from "framer-motion";
import tw from "twin.macro";

// images

import social1 from "../assets/images/social5.webp";
import social2 from "../assets/images/social3.webp";

// images fallback

import social1Fallback from "../assets/images/social5.jpg";
import social2Fallback from "../assets/images/social3.jpg";

// styles

const DividerContainer = tw(motion.div)`
	w-full
    relative
	flex
	flex-col
	overflow-hidden
	bg-secondary
`;

const ImageContainer = tw(motion.div)`
	w-full
`;

const ImagesDivider = () => {
	const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

	return (
		<DividerContainer>
			<ImageContainer
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
			>
				<picture>
					<source srcSet={isMobile ? social1 : social2} type={"image/webp"} />
					<img
						className="w-full"
						src={isMobile ? social1Fallback : social2Fallback}
						alt="casal de bailarinos de tango"
					/>
				</picture>
			</ImageContainer>
		</DividerContainer>
	);
};

export default ImagesDivider;
