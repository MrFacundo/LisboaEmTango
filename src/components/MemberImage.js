import tw from "twin.macro";

// styles

const ImageContainer = tw.div`
	md:min-h-[20rem]
	md:min-w-[20rem]
	lg:min-h-[30rem]
	lg:w-[30rem]
	overflow-hidden
`;

export const MemberImage = ({
	src,
	fallback,
	type = "image/webp",
	...delegated
}) => {
	return (
		<ImageContainer>
			<picture>
				<source srcSet={src} type={type} className="grayscale" />
				<img src={fallback} {...delegated} alt="" className="grayscale" />
			</picture>
		</ImageContainer>
	);
};
