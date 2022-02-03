import tw from "twin.macro";

const LogoContainer = tw.div`
    font-family["Barlow"]
    font-black
    text-2xl
    text-white
`;

const Logo = () => {
	return <LogoContainer>Lisboa em Tango</LogoContainer>;
};

export default Logo;
