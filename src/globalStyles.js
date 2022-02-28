import tw from "twin.macro";

export const Title = tw.h1`
    font-family["Barlow"]
    px-3
    py-4
    md:py-8
    lg:py-12
    text-3xl
    md:text-6xl
    lg:text-8xl
    text-white
    font-light
    text-center
    z-20
`;

export const FormContainer = tw.div`
	w-[90%]
	md:w-[70%]
	lg:w-2/3
	m-auto
	flex
	flex-col
`;

export const Input = tw.input`
	rounded-sm
	p-2
	bg-secondary
	border
	border-gray-500
	w-full

`;

export const Label = tw.label`
	my-2
	md:text-[1.5rem]
	lg:text-[1.2rem]
	font-semibold
`;

export const SubmitButton = tw.button`
	mt-4
	my-2
	bg-[#0087e0]
	w-full
	p-2
	hover:bg-primary
	transition-colors
	duration-200
	md:text-[1.5rem]
	lg:text-[1.2rem]
`;
