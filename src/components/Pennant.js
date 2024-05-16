import tw from "twin.macro";

const PennantContainer = tw.div`
	absolute
	w-[25%]
	max-w-[250px]
`;

const Pennant = ({ style, image }) => {
	return (
		<PennantContainer style={style}>
			<picture>
				<source srcSet={image.srcWebp} type={"image/webp"} />
				<img src={image.srcFallback} alt={image.alt} />
			</picture>
		</PennantContainer>
	);
};

export default Pennant;