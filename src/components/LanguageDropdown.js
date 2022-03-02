import tw from "twin.macro";
import { useTranslation } from "react-i18next";
import cookies from "js-cookie";

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
	lg:top-[3rem]
    lg:right-[12rem]
    inline-block 
`;

const DropdownButton = tw.button`
    text-gray-700
    font-semibold
    py-2
    px-4
    rounded
    inline-flex
    items-center
`;

const DropdownContent = tw.ul`
    absolute
    hidden
    text-gray-700
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
`;

const LanguageDropdown = () => {
	const currentLanguageCode = cookies.get("i18next") || "pt";
	const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
	const { i18n } = useTranslation();

	return (
		<Dropdown className="absolute right-[10rem] dropdown inline-block ">
			<DropdownButton className="">
				<span
					className={`flag-icon flag-icon-${currentLanguage.country_code} mx-2`}
				></span>
				<LangName> {currentLanguage.name}</LangName>
				<svg
					className="fill-current h-4 w-4"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
				>
					<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
				</svg>
			</DropdownButton>
			<DropdownContent className="dropdown-menu">
				{languages
					.filter((language) => language.code !== currentLanguage.code)

					.map(({ code, name, country_code }) => (
						<li key={country_code}>
							<Button
								onClick={() => {
									i18n.changeLanguage(code);
								}}
							>
								<span
									className={`flag-icon flag-icon-${country_code} mx-2`}
								></span>
								<LangName>{name}</LangName>
							</Button>
						</li>
					))}
			</DropdownContent>
		</Dropdown>
	);
};

export default LanguageDropdown;
