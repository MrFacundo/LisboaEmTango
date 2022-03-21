import tw from "twin.macro";

// styles

const ImageContainer = tw.div`
	md:min-h-[20rem]
	md:min-w-[20rem]
	lg:min-h-[30rem]
	lg:w-[30rem]
	overflow-hidden
`;

export const MemberImage = ({ src, fallback, alt, type = "image/webp" }) => {
	return (
		<ImageContainer>
			<picture>
				<source srcSet={src} type={type} />
				<img src={fallback} alt={alt} />
			</picture>
		</ImageContainer>
	);
};
