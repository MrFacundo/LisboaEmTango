import tw from "twin.macro";

const LogoContainer = tw.div`
    font-family["Barlow"]
    font-black
    text-2xl
    text-white
`;

const Logo = () => {
	return <LogoContainer>LISBOA EM TANGO</LogoContainer>;
};

export default Logo;
