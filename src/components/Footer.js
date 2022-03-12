/* eslint-disable jsx-a11y/anchor-is-valid */
import tw from "twin.macro";

// styles

const FooterContainer = tw.div`
    w-full
    lg:h-16
    bg-[#001f34]
    flex
    pl-2
    pr-2
    lg:pr-16
    lg:pl-16
    text-white
    items-center
    flex-col
    justify-center
`;

const BottomSection = tw.div`
    w-[89%]
    flex
    flex-wrap
    items-center
    justify-between
    pl-4
    pr-4
    border-t-gray-300
    border-opacity-50
    py-3
    font-text

`;

const Copyright = tw.span`
    text-xs
    md:text-sm
    text-gray-300
    w-full
    lg:w-auto
    text-center
    pt-3
    md:pt-0

`;

const SmallText = tw.span`
    text-base
    text-gray-300
    md:max-w-[12rem]
`;

const SmallTextContainer = tw.div`
    flex
    flex-row
    text-base
    text-gray-300
    md:max-w-[12rem]
    items-center
    
`;

const Link = tw.a`
    hover:text-[#deb992]
`;

const Footer = () => {
	return (
		<FooterContainer>
			<BottomSection>
				<SmallTextContainer>
					<SmallText>Ph:</SmallText>
					<div className="text-right pl-3 text-sm">
						<p>
							<Link href="#">Photographer 1</Link>
						</p>
						<Link href="#">Photographer 2</Link>
					</div>
				</SmallTextContainer>
				<SmallText>
					<Link href="#">Design by</Link>
				</SmallText>
				<Copyright>© {new Date().getFullYear()} LISBOA[EM]TANGO</Copyright>
			</BottomSection>
		</FooterContainer>
	);
};

export default Footer;
