import { useState, useEffect } from "react";
import { Title } from "../styles";
import tw from "twin.macro";
import { useMediaQuery } from "react-responsive";
import { deviceSize } from "../components/responsive";
import { motion } from "framer-motion";
import styled from "styled-components";

import show1 from "../assets/images/show5.jpg";
import show2 from "../assets/images/show12.jpg";

const ShowSectionContainer = styled(motion.div)`
	${tw`
	w-full
	min-h-[100vh]
    md:min-h-[150vh]
    relative
	flex
	flex-col
    items-center
    `};
	background: linear-gradient(
		180deg,
		rgba(0, 31, 51, 1) 0%,
		rgba(0, 0, 0, 1) 30%,
		rgba(0, 0, 0, 1) 95%,
		rgba(0, 31, 51, 1) 100%
	);
`;

const SectionTitle = tw(Title)`
	mt-[3rem]
`;

const BackgroundImage = tw.img`
	bottom-[5rem]
	w-full
    absolute
    object-contain
	object-bottom
`;

const Button = tw.div`
	p-10
    absolute
    right-[15rem]
    top-[290rem]
    w-[35rem]
    h-[35rem]
	text-white
	text-3xl
	text-center
	leading-10
	z-10

`;

const YoutubeIframe = tw.div`
		self-start
		p-3
		mt-[3rem]
		md:ml-[8rem]
		border
		border-[#DEBA93]
		z-10	
`;

const ShowSection = () => {
	const [offsetY, setOffsetY] = useState(0);
	const handleScroll = () => setOffsetY(window.pageYOffset);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

	return (
		<ShowSectionContainer name="Shows">
			<SectionTitle>SHOWS</SectionTitle>
			{!isMobile && (
				<Button style={{ transform: `translateY(-${offsetY * 0.4}px)` }}>
					Integer maximus nulla nulla, ac efficitur nunc luctus at. Donec rutrum
					velit sed dui semper aliquam. Pellentesque venenatis mauris at nulla
					ullamcorper, nec faucibus arcu faucibus. In id ante volutpat nibh
					dignissim ornare eu vel lectus. Nulla imperdiet purus id molestie
					porttitor. Fusce in felis nunc. Fusce et tristique tortor.
				</Button>
			)}
			<YoutubeIframe>
				<iframe
					src="https://www.youtube-nocookie.com/embed/FOwKY2sQZmg?playlist=FOwKY2sQZmg&listType=playlist&autoplay=0&controls=1&loop=1&cc_load_policy=0&iv_load_policy=3&disablekb=1&fs=0&modestbranding=1&playsinline=1&rel=0"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					width="640"
					height="360"
					loading="lazy"
					title="Tangomanso"
				></iframe>
			</YoutubeIframe>
			<BackgroundImage src={isMobile ? show2 : show1} alt="" />
		</ShowSectionContainer>
	);
};

export default ShowSection;
