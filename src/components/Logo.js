import tw from "twin.macro";

const LogoContainer = tw.div`
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
	return <LogoContainer>LISBOA EM TANGO</LogoContainer>;
};

export default Logo;
