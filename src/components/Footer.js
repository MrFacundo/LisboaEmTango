/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-scroll";
import tw from "twin.macro";
import Logo from "./Logo";

const FooterContainer = tw.div`
    w-full
    lg:h-20
    bg-[#1A222F]
    flex
    pl-2
    pr-2
    lg:pt-6
    lg:pr-16
    lg:pl-16
    text-white
    items-center
    flex-col
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
`;

const Copyright = tw.span`
    text-sm
    text-gray-300
    w-full
    lg:w-auto
    text-center
`;

const SmallText = tw.span`
    text-base
    text-gray-300
`;

const Footer = () => {
	return (
		<FooterContainer>
			<BottomSection>
				<Copyright>
					© {new Date().getFullYear()} LISBOA EM TANGO. All rights reserved.
				</Copyright>
				<SmallText>
					<a href="#">Privacy Policy</a>
				</SmallText>
				<SmallText>
					<a href="#">Ph:</a>
				</SmallText>
				<SmallText>
					<a href="#">Design</a>
				</SmallText>
			</BottomSection>
		</FooterContainer>
	);
};

export default Footer;
