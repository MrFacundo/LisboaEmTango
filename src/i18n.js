import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
	.use(HttpApi)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		supportedLngs: ["en", "pt"],
		fallbackLng: "pt",
		debug: false,
		detection: {
			order: ["path", "cookie", "htmlTag"],
			caches: ["cookie"],
		},
		backend: {
			loadPath: "/assets/locales/{{lng}}/translation.json",
		},
		react: {
			useSuspense: true,
		},
	});

export default i18n;
