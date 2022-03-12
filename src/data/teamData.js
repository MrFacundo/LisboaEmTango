import JuanCaptiottiBio from "../assets/images/JuanCaptiottiBio.webp";
import GracianaRomeoBio from "../assets/images/GracianaRomeoBio.webp";
import JuanCaptiottiBioF from "../assets/images/JuanCaptiottiBio.jpg";
import GracianaRomeoBioF from "../assets/images/GracianaRomeoBio.jpg";

const teamData = [
	{
		name: "Juan Capriotti",
		shortName: "Juan",
		email: "capriottijuan@gmail.com",
		phone: "(+351) 935 478 559",
		social: {
			facebook: "https://www.facebook.com/juan.capriotti.1",
			instagram: "https://www.instagram.com/juancapriotti",
		},
		image: JuanCaptiottiBio,
		imageFallback: JuanCaptiottiBioF,
		bio: `team_section.bio_1`,
	},
	{
		name: "Graciana Romeo",
		shortName: "Graciana",
		email: "gracianaromeo@hotmail.com",
		phone: "(+351) 916 192 919",
		social: {
			facebook: "https://www.facebook.com/graciana.romeo",
			instagram: "https://www.instagram.com/gracianaromeo",
		},
		image: GracianaRomeoBio,
		imageFallback: GracianaRomeoBioF,
		bio: `team_section.bio_2`,
	},
];

export default teamData;
