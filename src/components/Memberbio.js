import tw from "twin.macro";
import useCollapse from "react-collapsed";
import {
	BsFacebook,
	BsInstagram,
	BsArrowRightCircle,
	BsArrowUpCircle,
} from "react-icons/bs";

const BioContainer = tw.div`
	w-[100%]
    md:min-h-[25rem]
	md:w-[25rem]
    bg-[#001F33]
    border-b
	text-white
	font-text

`;

const ViewMoreButton = tw.h1`
    items-start
    active:outline-none
    focus:outline-none
    flex
    pl-4
    py-3
	text-2xl
    md:text-4xl
	md:px-12
	md:pt-12
`;

const BioText = tw.div`
	text-justify 
	p-6
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
	hover:text-[#abc4ff]
	transition-colors
	duration-200
`;

export const MemberBio = ({ member }) => {
	const { getCollapseProps, getToggleProps, isExpanded } = useCollapse({
		duration: 1000,
	});

	return (
		<BioContainer>
			<div {...getToggleProps()}>
				<ViewMoreButton>
					{isExpanded ? (
						<BsArrowUpCircle className="mt-1" />
					) : (
						<BsArrowRightCircle className="mt-1" />
					)}

					<p className="pl-4 uppercase md:leading-normal">{member.name}</p>
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
										<BsFacebook fontSize="2rem" />
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
										<BsInstagram fontSize="2rem" />
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
