import React from "react";
import tw from "twin.macro";
import { motion } from "framer-motion";
import { Element } from "react-scroll";
import { Title } from "../styles";
import { BsArrowRightCircle } from "react-icons/bs";

const ScheduleSectionContainer = tw(Element)`
        w-full
        flex
        flex-col
        relative
        pt-1
        pb-1
        xl:pt-2
        xl:pb-2
        items-center
        bg-[#DEBA93]
        text-[#051622]
`;

const GridContainer = tw.div`
    w-[80%]
	flex-col
	font-text
`;

const Day = tw.div`

	text-3xl
	p-3
	pt-6
	font-thin`;

const Class = tw.div`
	text-base
	px-4
	pb-1
`;

const Separator = tw.div`
	h-5
	border-b-[1px]
	border-black
`;

const ScheduleTitle = tw(Title)`
        text-[#051622]
`;

const Button = tw(motion.button)`
	items-center
	font-title
	rounded-full
	bg-[#DEBA93]
	cursor-pointer
	text-white
	flex
	flex-col
	text-center
	justify-center
	place-items-center
	self-center
	text-[1.6rem]
	md:text-[2rem]
	border-2
	pt-4
	my-[4rem]
	md:pt-[3rem]
	h-[13rem]
	w-[13rem]
	md:h-[15rem]
	md:w-[15rem]
	hover:text-[#001F33]
	hover:border-[#001F33]
	duration-300
`;

const ScheduleSection = () => {
	return (
		<ScheduleSectionContainer name="Schedule">
			<ScheduleTitle>SCHEDULE</ScheduleTitle>
			<GridContainer>
				<Day>SEGUNDA</Day>
				<Class>
					<strong>20:00</strong> - Aula de técnica de tango (todos os níveis)
				</Class>
				<Class>
					<strong>21:00</strong> - Aula de iniciação
				</Class>
				<Separator />
				<Day>QUARTA</Day>
				<Class>
					<strong>20:00</strong> - Aula de nivel avanzado
				</Class>
				<Class>
					<strong>21:00</strong> - Aula de nivel intermedio
				</Class>
				<Separator />
				<Day>DOMINGO</Day>
				<Class>
					<strong>17:00</strong> - Workshop temático
				</Class>
				<Class>
					<strong>18:30</strong> - Práctica
				</Class>
				<Separator />
			</GridContainer>
			<Button
				initial={{ scale: 0 }}
				whileInView={{ scale: 1 }}
				// viewport={{ margin: "-200px" }}
				transition={{
					ease: "easeInOut",
					duration: 0.3,
				}}
			>
				<motion.span
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{
						ease: "easeInOut",
						delay: 0.5,
						duration: 0.3,
					}}
				>
					BOOK A CLASS
				</motion.span>
				<motion.span
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{
						ease: "easeInOut",
						delay: 0.5,
						duration: 0.3,
					}}
				>
					<BsArrowRightCircle className="text-[3rem] mt-4" />
				</motion.span>
			</Button>
		</ScheduleSectionContainer>
	);
};

export default ScheduleSection;
