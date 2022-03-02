import tw from "twin.macro";
import { Link } from "react-scroll";

export const LogoContainer = tw(Link)`
    top-[2rem]
    left-[2rem]
    absolute
    font-family["Barlow"]
    font-black
    text-2xl
    md:text-5xl
    text-white
    cursor-pointer
    z-30
    uppercase
`;

const Logo = () => {
	return (
		<LogoContainer to="Hero" smooth={"easeInOutQuad"} duration={500}>
			l.e.tango
		</LogoContainer>
	);
};

export default Logo;
