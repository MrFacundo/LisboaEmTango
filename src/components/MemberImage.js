import tw from "twin.macro";

const ImageContainer = tw.div`
	max-w-[25rem]
	max-h-[25rem]
	overflow-hidden
`;

export const MemberImage = ({ member }) => {
	return (
		<ImageContainer>
			<img src={member.image} style={{ width: "30rem" }} alt="" />
		</ImageContainer>
	);
};
