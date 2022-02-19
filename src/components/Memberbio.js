import tw from "twin.macro";
import useCollapse from "react-collapsed";
import {
	BsFacebook,
	BsInstagram,
	BsChevronRight,
	BsChevronUp,
} from "react-icons/bs";

const BioContainer = tw.div`
	// md:w-[20rem]
	md:min-h-[20rem]
    lg:min-h-[30rem]
	lg:w-[30rem]
    bg-[#DEBA93]
    border-b
	text-white
	font-text
	self-stretch

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
    lg:text-6xl
	md:px-8
	lg:px-12
	md:pt-12
`;

const BioText = tw.div`
	text-justify 
	p-6
	text-lg
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
	hover:text-[#DEBA93]
	duration-300
`;

export const MemberBio = ({ member }) => {
	const { getCollapseProps, getToggleProps, isExpanded } = useCollapse({
		duration: 1000,
	});

	return (
		<BioContainer>
			<div {...getToggleProps()}>
				<ViewMoreButton>
					<p className="pl-4 uppercase md:leading-normal">{member.name}</p>
					{isExpanded ? (
						<BsChevronUp className="mt-0.5 md:mt-3 ml-2" />
					) : (
						<BsChevronRight className="mt-0.5 md:mt-3 ml-2" />
					)}
				</ViewMoreButton>
			</div>
			<section {...getCollapseProps()}>
				<BioText>
					<ContactInfo>
						<div>
							<a
								href={"mailto: " + member.email}
								className="underline hover:text-[#DEBA93] duration-300
								"
							>
								Email {member.shortName}
							</a>
						</div>
						<div>{member.phone}</div>
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
					<div> {member.bio}</div>
				</BioText>
			</section>
		</BioContainer>
	);
};
