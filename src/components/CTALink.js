import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { BsChevronDoubleDown } from "react-icons/bs";
import tw from "twin.macro";
import styled from "styled-components";


const StyledLink = styled(Link)(({ selfEnd, pointer }) => [
	tw`self-center`,
	selfEnd && tw`md:self-end pb-[4rem] xl:mt-[-4rem]`,
	pointer && tw`cursor-pointer`,
]);

const CTAButton = tw(motion.div)`
	rounded-full
	flex
	flex-col
	text-center
	justify-center
	place-items-center
	font-text
	font-semibold

	text-white	
	hover:bg-primary
	hover:text-white
	hover:border-white

	text-[1rem]
	md:text-[1.5rem]
	uppercase

	border-2
	md:border-4

	h-[8rem]
	w-[8rem]
	md:h-[11rem]
	md:w-[11rem]
	xl:h-[12rem]
	xl:w-[12rem]
	2xl:h-[13rem]
	2xl:w-[13rem]

	pt-[1rem]

	duration-300
`;

const CTALink = ({ to, text, icon, selfEnd, pointer }) => {
	return (
		<StyledLink
			to={to}
			smooth={"easeInOutQuad"}
			duration={1000}
			selfEnd={selfEnd}
			pointer={pointer}
		>
			<CTAButton
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{
					ease: "easeInOut",
					duration: 0.6,
					delay: 3,
				}}
			>
				<motion.span
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: "easeInOut",
						duration: 0.6,
						delay: 3,
					}}
					className="px-2"
				>
					{text}

				</motion.span>
				<motion.span
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: "easeInOut",
						duration: 0.6,
						delay: 2.2,
					}}
				>
					{icon === "chevron_double_down" && <BsChevronDoubleDown className="text-[2rem] md:text-[2.5rem] md:mt-[0.3rem]" />}
				</motion.span>
			</CTAButton>
		</StyledLink>
	);
};

export default CTALink;