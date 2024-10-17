import tw from "twin.macro";
import { motion } from "framer-motion";

const FooterContainer = tw.div`
    w-full
    bg-secondary
    flex
    px-2
    lg:px-16
    text-white
    items-center
    justify-center
`;

const BottomSection = tw.div`
    w-[90%]
    lg:w-[70%]
    flex
    flex-col
    md:flex-row
    items-center
    justify-between
    md:px-4
    border-t-gray-300
    border-opacity-50
    py-3
    font-text
`;

const Copyright = tw(motion.span)`
    text-xs
    md:text-sm
    text-gray-300
    w-full
    lg:w-auto
    text-center
    pt-3
    md:pt-0
`;

const SmallText = tw.span`
    flex
    flex-row
    text-sm
    text-gray-300
`;

const SmallTextContainer = tw(motion.div)`
    flex
    flex-row
    text-base
    text-gray-300
    w-full
    items-center
    justify-between
    md:max-w-[60%]
`;

const Link = tw.a`
    hover:text-primary
`;

const textVariants = {
	hidden: { translateY: 10 },
	show: {
		translateY: 0,
		transition: {
			ease: "easeInOut",
			duration: 0.8,
		},
		viewport: { once: true },
	},
};

const Footer = () => {
	return (
		<FooterContainer>
			<BottomSection>
				<SmallTextContainer
					variants={textVariants}
					initial="hidden"
					whileInView="show"
				>
					<SmallText>
						<p className="self-center">Ph:</p>

						<div className="text-right pl-2">
							<p>
								<Link
									target={"_blank"}
									rel="noopener noreferrer"
									href="https://www.facebook.com/joaodiz1"
								>
									Joao Filipe Dias
								</Link>
							</p>
							<Link
								target={"_blank"}
								rel="noopener noreferrer"
								href="https://www.facebook.com/bsousafoto"
							>
								Bruno de Sousa
							</Link>
						</div>
					</SmallText>
					<SmallText>
						<Link
							className="text-center"
							target={"_blank"}
							rel="noopener noreferrer"
							href="https://mrfacundo.github.io/"
						>
							Developed and designed by <br />
							<strong>Facundo Troitero</strong>

						</Link>
					</SmallText>
				</SmallTextContainer>
				<Copyright
					variants={textVariants}
					initial="hidden"
					whileInView="show"
				>
					© {new Date().getFullYear()} Lisboa em Tango
				</Copyright>
			</BottomSection>
		</FooterContainer>
	);
};

export default Footer;
