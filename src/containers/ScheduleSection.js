import React from "react";
import tw from "twin.macro";
import { Element } from "react-scroll";
import { Title } from "../styles";
import { BsArrowRightCircle } from "react-icons/bs";

const ScheduleSectionContainer = tw(Element)`
        w-full
        min-h-screen
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

const Button = tw.button`
	items-center
	active:outline-none
	focus:outline-none
	flex
    text-white
	font-title
    bg-[#051622]
    text-4xl
	p-5
	md:text-7xl
    md:p-8
    my-8
	md:my-12
    cursor-pointer
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
			<Button>
				REGISTER
				<BsArrowRightCircle className="ml-3 md:ml-7" />
			</Button>
		</ScheduleSectionContainer>
	);
};

export default ScheduleSection;
