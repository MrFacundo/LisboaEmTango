import tw from "twin.macro";
import { useTranslation } from "react-i18next";
import cookies from "js-cookie";
import { BsChevronDown } from "react-icons/bs";

const languages = [
	{
		code: "pt",
		name: "Português",
		country_code: "pt",
	},
	{
		code: "en",
		name: "English",
		country_code: "gb",
	},
];

// styles

const Dropdown = tw.div`
    absolute
    top-[2rem]
    right-[4rem]
	md:top-[2rem]
	lg:top-[3rem]
    inline-block
	text-gray-700
`;

const DropdownButton = tw.button`
    py-2
    px-4
    rounded
    inline-flex
    items-center
`;

const DropdownContent = tw.ul`
    absolute
    hidden
    pt-1
`;

const Button = tw.button`
    rounded-t
    py-2
    px-4
    flex
	items-center
`;

const LangName = tw.span`
	hidden
	md:block
	md:text-2xl
	lg:text-xl
	font-text
	uppercase
	font-bold
`;

const LanguageDropdown = ({ navMenu }) => {
	const currentLanguageCode = cookies.get("i18next") || "pt";
	const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
	const { i18n } = useTranslation();

	return (
		<Dropdown
			className="dropdown"
			style={navMenu ? { color: "#999999", right: "6rem" } : {}}
		>
			<DropdownButton>
				<span
					className={`flag-icon flag-icon-${currentLanguage.country_code} mx-2 text-xl md:text-2xl`}
				></span>
				<LangName> {currentLanguage.code}</LangName>
				<BsChevronDown className={"pl-4 text-[2rem]"} />
			</DropdownButton>
			<DropdownContent className="dropdown-menu">
				{languages
					.filter((language) => language.code !== currentLanguage.code)

					.map(({ code, country_code }) => (
						<li key={country_code}>
							<Button
								onClick={() => {
									i18n.changeLanguage(code);
								}}
							>
								<span
									className={`flag-icon flag-icon-${country_code} mx-2`}
								></span>
								<LangName>{code}</LangName>
							</Button>
						</li>
					))}
			</DropdownContent>
		</Dropdown>
	);
};

export default LanguageDropdown;
