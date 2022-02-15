import tw from "twin.macro";
import { Link } from "react-scroll";

const LogoContainer = tw(Link)`
    top-[2rem]
    left-[2rem]
    absolute
    font-family["Barlow"]
    font-black
    text-2xl
    md:text-5xl
    text-white
    cursor-pointer
`;

const Logo = () => {
	return (
		<LogoContainer to="Hero" smooth={"easeInOutQuad"} duration={500}>
			LISBOA EM TANGO
		</LogoContainer>
	);
};

export default Logo;
