import React from "react";
import tw from "twin.macro";

const GridContainer = tw.div`
    w-[90%]
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

const ScheduleGrid = () => {
	return (
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
	);
};

export default ScheduleGrid;
