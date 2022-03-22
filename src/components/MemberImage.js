import tw from "twin.macro";

// styles

const ImageContainer = tw.div`
	w-full
	md:min-h-[20rem]
	md:w-[80%]
    lg:h-[100%]
	lg:w-[50%]
	overflow-hidden
`;

export const MemberImage = ({ src, fallback, alt, type = "image/webp" }) => {
	return (
		<ImageContainer>
			<picture>
				<source srcSet={src} type={type} />
				<img className="w-full" src={fallback} alt={alt} />
			</picture>
		</ImageContainer>
	);
};
