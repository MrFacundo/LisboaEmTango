import tw from "twin.macro";
import useCollapse from "react-collapsed";
import { BsFacebook, BsInstagram, BsArrowRightCircle } from "react-icons/bs";

const TeamMemberCardContainer = tw.div`
	flex
	justify-center
	flex-col
	items-center
	md:flex-row
	md:items-start
`;

const BioContainer = tw.div`
min-h-[10rem]
width[25rem]
md:min-h-[25rem]
	bg-[#865837]
`;

const ImageContainer = tw.div`
	min-h-[20rem]
	width[25rem]
`;

const ViewMoreButton = tw.h1`
		active:outline-none
		focus:outline-none
		flex
		items-center
		pl-5
		pt-5
        text-white
        text-2xl
		font-family["Archivo Narrow"]

`;

const BioText = tw.div`
	text-justify 
	p-8
	text-white
	text-base
`;

const ContactInfo = tw.div`
	pb-5
`;

const Social = tw.div`
	flex
`;

const SocialItem = tw.p`
	pt-1
	pr-3
`;

export const TeamMemberCard = ({ member }) => {
	const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

	return (
		<TeamMemberCardContainer>
			<BioContainer>
				<div {...getToggleProps()}>
					<ViewMoreButton>
						<BsArrowRightCircle />
						<p style={{ paddingLeft: "1rem", textTransform: "uppercase" }}>
							{member.name}
						</p>
					</ViewMoreButton>
				</div>
				<section {...getCollapseProps()}>
					<BioText>
						<ContactInfo>
							<div className="email">
								<a
									href={"mailto: " + member.email}
									style={{ textDecoration: "underline" }}
								>
									Email {member.shortname}
								</a>
							</div>
							<div className="phone">{member.phone}</div>
							<Social>
								<SocialItem>
									{member.social.facebook && (
										<a
											href={member.social.facebook}
											target={"_blank"}
											rel="noopener noreferrer"
										>
											<BsFacebook color="white" fontSize="2rem" />
										</a>
									)}
								</SocialItem>
								<SocialItem>
									{member.social.instagram && (
										<a
											href={member.social.instagram}
											target={"_blank"}
											rel="noopener noreferrer"
										>
											<BsInstagram color="white" fontSize="2rem" />
										</a>
									)}
								</SocialItem>
							</Social>
						</ContactInfo>
						<div className="bio"> {member.bio}</div>
					</BioText>
				</section>
			</BioContainer>
			<ImageContainer>
				<img src={member.image} style={{ width: "30rem" }} alt="" />
			</ImageContainer>
		</TeamMemberCardContainer>
	);
};
