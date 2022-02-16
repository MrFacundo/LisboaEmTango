import tw from "twin.macro";

const ImageContainer = tw.div`
	max-w-[30rem]
	max-h-[30rem]
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
