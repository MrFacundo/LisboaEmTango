
import { motion } from "framer-motion";
import tw from "twin.macro";

// styles
const Container = tw(motion.div)`
	w-full
	max-h-[400px]
    relative
	flex
	flex-col
	overflow-hidden
	bg-secondary
`;

const ImageContainer = tw(motion.div)`
	w-full
`;

const Separator = ({ image }) => {

	return (
		<Container>
			<ImageContainer
				initial={{
					opacity: 0,
				}}
				whileInView={{
					opacity: 1,
				}}
				viewport={{ once: false, margin: "0px 0px -100px 0px" }}
				transition={{
					ease: "easeOut",
					duration: 1.5,
				}}
			>
				<picture>
					<source srcSet={image.src} type={"image/webp"} />
					<img
						className="w-full"
						src={image.srcFallback} alt={image.alt}
					/>
				</picture>
			</ImageContainer>
		</Container>
	);
};

export default Separator;
