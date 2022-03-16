import { useTranslation } from "react-i18next";
import tw from "twin.macro";
import useCollapse from "react-collapsed";
import {
	BsFacebook,
	BsInstagram,
	BsChevronRight,
	BsChevronUp,
} from "react-icons/bs";

// styles

const BioContainer = tw.div`
	md:min-h-[10rem]
    lg:min-h-[30rem]
	md:min-w-[20rem]
	lg:w-[30rem]
    bg-secondary
    border-b
	text-white
	font-text
	self-stretch
`;

const ViewMoreButton = tw.div`
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
	-webkit-appearance[none]
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
	hover:text-gray-300
	duration-300
`;

export const MemberBio = ({ member }) => {
	const { t } = useTranslation();

	const { getCollapseProps, getToggleProps, isExpanded } = useCollapse({
		duration: 1000,
	});

	return (
		<BioContainer>
			<ViewMoreButton {...getToggleProps()}>
				<p className="pl-4 uppercase md:leading-normal">{member.name}</p>
				{isExpanded ? (
					<BsChevronUp className="mt-0.5 md:mt-3 ml-2 md:ml-6" />
				) : (
					<BsChevronRight className="mt-0.5 md:mt-3 ml-2  md:ml-6" />
				)}
			</ViewMoreButton>
			<section {...getCollapseProps()}>
				<BioText>
					<ContactInfo>
						<div>
							<a
								href={"mailto: " + member.email}
								className="underline hover:text-gray-300 duration-300
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
					<div> {t(member.bio)}</div>
				</BioText>
			</section>
		</BioContainer>
	);
};
