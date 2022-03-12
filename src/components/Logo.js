import tw from "twin.macro";
import { Link } from "react-scroll";

export const LogoContainer = tw(Link)`
    top-[1rem]
    left-[1rem]
    md:top-[2rem]
    md:left-[2rem]
    absolute
    font-logo
    text-3xl
    md:text-5xl
    text-white
    cursor-pointer
    z-30
    uppercase
`;

const Logo = () => {
	return (
		<LogoContainer to="Hero" smooth={"easeInOutQuad"} duration={500}>
			lisboa<span className="text-3xl">[em]</span>tango
		</LogoContainer>
	);
};

export default Logo;
