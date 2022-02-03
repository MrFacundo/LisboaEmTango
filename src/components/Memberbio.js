import tw from "twin.macro";
import useCollapse from "react-collapsed";
import {
	BsFacebook,
	BsInstagram,
	BsArrowRightCircle,
	BsArrowUpCircle,
} from "react-icons/bs";

const BioContainer = tw.div`
    min-h-[8rem]
    width[25rem]
    md:min-h-[25rem]
    bg-[#865837]
    border-b
`;

const ViewMoreButton = tw.h1`
    items-start
    active:outline-none
    focus:outline-none
    flex
    pl-8
    pt-8
    mr-8
    text-white
    text-4xl
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

export const MemberBio = ({ member }) => {
	const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

	return (
		<BioContainer>
			<div {...getToggleProps()}>
				<ViewMoreButton>
					{isExpanded ? <BsArrowUpCircle /> : <BsArrowRightCircle />}

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
	);
};
