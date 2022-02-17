import tw from "twin.macro";

import social1 from "../assets/images/social5.jpg";
import social2 from "../assets/images/social2.jpg";
import social3 from "../assets/images/social3.jpg";

import { useMediaQuery } from "react-responsive";
import { deviceSize } from "../components/responsive";
import { motion } from "framer-motion";
import styled from "styled-components";

const DividerContainer = styled(motion.div)`
	${tw`
	w-full
    min-h-[250vh]
    relative
    `};
	background: linear-gradient(
		180deg,
		rgba(0, 0, 0, 1) 0%,
		rgba(0, 31, 51, 1) 39%
	);
`;

const Image = tw.img`
    // h-[40rem]	
    // md:h-[50rem]
	w-full
    object-contain
	// md:object-cover
`;

const Image2 = tw.img`
    absolute
    left-[7rem]
    top-[39rem]
    w-[40rem]
`;

const Image3 = tw.img`
    absolute
    right-[7rem]
    top-[50rem]
    w-[40rem]
`;

const ImagesDivider = () => {
	const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

	return (
		<DividerContainer>
			<Image src={isMobile ? social1 : social2} alt="" />
			<Image2 src={social3} alt="" />
			<Image3 src={social1} alt="" />
		</DividerContainer>
	);
};

export default ImagesDivider;
