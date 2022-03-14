import tw from "twin.macro";
import { Link } from "react-scroll";
import { useMediaQuery } from "react-responsive";
import { deviceSize } from "../components/responsive";
import logo from "../assets/images/logo6.png";

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
	const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

	return (
		<LogoContainer to="Hero" smooth={"easeInOutQuad"} duration={500}>
			{isMobile && <img className="max-w-[4rem]" src={logo} alt="" />}
			{!isMobile && (
				<span>
					lisboa<span className="text-3xl"> em </span>tango
				</span>
			)}
		</LogoContainer>
	);
};

export default Logo;
