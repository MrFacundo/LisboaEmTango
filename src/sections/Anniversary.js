import { useTranslation } from "react-i18next";
import tw from "twin.macro";
import styled from "styled-components";

import { Element } from "react-scroll";
import { motion } from "framer-motion";

import { useMediaQuery } from "react-responsive";
import { deviceSize } from "../components/responsive";

import anniversary1 from "../assets/images/anniversary1.jpg";
import anniversary2 from "../assets/images/anniversary2.jpg";
import anniversary3 from "../assets/images/anniversary3.jpg";
import pennant from "../assets/images/pennant.png";
const images = [
	{
		title: "levels.group.title",
		description: "levels.group.description",
		photo: anniversary1,
		photoFallback: anniversary1,
		transformAngle: 5,
	},
	{
		title: "levels.workshop.title",
		description: "levels.workshop.description",
		photo: anniversary2,
		photoFallback: anniversary2,
		transformAngle: -3,
	},
	{
		title: "levels.private.title",
		description: "levels.private.description",
		photo: anniversary3,
		photoFallback: anniversary3,
		transformAngle: 5,
	},
];

const Container = tw(Element)`
    text-white
    w-full
    h-[71rem]
    md:h-[80rem]
    min-h-screen
    flex
    items-center
    justify-center
    bg-primary
    relative
`;

const Section = tw.div`
    w-[90%]
    h-[95%]
    md:w-4/5
    md:h-5/6
	border-amber-300
    border-4
    border-solid
    rounded-2xl
`;

const SectionTitle = tw.h1`
    font-title
    px-3
    pt-12
    md:py-9
    lg:py-12
    text-3xl
    text-center
    md:text-6xl
    lg:text-7xl
	xl:text-5xl
	2xl:text-6xl
`;

const Wrapper = tw.div`
    flex
    flex-col-reverse
    md:flex-row
`;

const LeftSection = tw(motion.div)`
    md:w-1/2
    flex
    flex-col
    justify-center
    items-center
`;

const RightSection = tw.div`
    md:w-1/2
    flex
    flex-col
    items-center
    pt-10
`;

const PennantLeft = tw.div`
    absolute
    w-[38%]
    md:w-[26%]
    top-[10px]
    md:top-[82px]
    left-0
    rotate-[347deg]
    md:rotate-[323deg]
`;

const PennantRight = tw.div`
    absolute
    w-[38%]
    md:w-[26%]
    top-[10px]
    md:top-[82px]
    right-0
    rotate-[10deg]
    md:rotate-[43deg]`;

const ImageContainer = styled(motion.div)`
	${tw`
        h-[20rem]
        w-[20rem]
        md:w-[30rem]
        border
    `}
	margin-left: ${(props) => (props.index % 2 === 0 ? "0" : "5rem")};
	transform: rotate(${(props) => props.angle}deg);
`;

const Info = tw.p`
	font-text
    text-xl
    text-justify
	md:text-3xl
    mr-[5%]
	mt-2
	mb-[2rem]
	md:mt-[2rem]
    md:mb-[4rem]
    2xl:mt-2
    xl:max-w-3xl
    pl-4
    pr-4
    lg:pl-2
    lg:pr-2
`;

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

const Anniversary = () => {
	const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

	return (
		<Container name="Anniversary">
			<PennantLeft
			>
				<picture>
					<source srcSet={pennant} type={"image/webp"} />
					<img
						className="w-full h-full object-cover"
						src={pennant.photoFallback}
						alt="aulas e prácticas de tango"
					/>
				</picture>
			</PennantLeft>
            <PennantRight
			>
				<picture>
					<source srcSet={pennant} type={"image/webp"} />
					<img
						className="w-full h-full object-cover"
						src={pennant.photoFallback}
						alt="aulas e prácticas de tango"
					/>
				</picture>
			</PennantRight>
			<Section>
				<SectionTitle>20 anos de Tango em Lisboa!</SectionTitle>
				<Wrapper>
					<LeftSection
						initial="hidden"
						whileInView="show"
						viewport={{ once: true, margin: "100px" }}
					>
						{isMobile && (
							<ImageContainer
								variants={imageVariant}
								angle={images[1].transformAngle}
								index={0}
							>
								<picture>
									<source
										srcSet={images[1].photo}
										type={"image/webp"}
									/>
									<img
										className="w-full h-full object-cover"
										src={images[1].photoFallback}
										alt="aulas e prácticas de tango"
									/>
								</picture>
							</ImageContainer>
						)}
						{!isMobile &&
							images.map((image, index) => (
								<ImageContainer
									key={index}
									variants={imageVariant}
									angle={image.transformAngle}
									index={index}
								>
									<picture>
										<source
											srcSet={image.photo}
											type={"image/webp"}
										/>
										<img
											className="w-full h-full object-cover"
											src={image.photoFallback}
											alt="aulas e prácticas de tango"
										/>
									</picture>
								</ImageContainer>
							))}
					</LeftSection>
					<RightSection>
						<Info>
							Durante o 2024 cumprimos 20 años de intenso trabalho
							em Lisboa, com a música e a dança que tanto amamos…
							“EL TANGO”… e queremos festejar com vocês!
						</Info>
						<Info>
							Estamos a preparar um programa especial para
							celebrar estes 20 anos de Tango em Lisboa, com
							atividades para todos os níveis, desde
							aulas, workshops, prácticas, festas e eventos
							especiais.
						</Info>
						<Info>
							Vamos festejar com vocês estes 20 anos abraçando e
							partilhando o Tango.
						</Info>
					</RightSection>
				</Wrapper>
			</Section>
		</Container>
	);
};

export default Anniversary;
