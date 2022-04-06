import { motion } from "framer-motion";
import tw from "twin.macro";

const Button = tw(motion.div)`
	top-[2rem]
	right-[1.5rem]
	md:top-[3rem]
	md:right-[3rem]
	fixed
	z-[60]
	cursor-pointer
	w-[2.5rem]
	md:w-[4rem]
`;

const Path = (props) => (
	<motion.path
		fill="transparent"
		strokeLinecap="round"
		strokeWidth="3"
		{...props}
	/>
);

const transition = { duration: 0.3 };

export function MenuToggle({ toggle, isOpen }) {
	return (
		<Button
			whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
			onClick={toggle}
		>
			<svg max-width="100%" viewBox="0 0 25 25">
				<Path
					animate={isOpen ? "open" : "closed"}
					stroke="hsl(0, 0%, 100%)"
					initial={false}
					variants={{
						closed: { d: "M 2 2.5 L 20 2.5" },
						open: { d: "M 3 16.5 L 17 2.5" },
					}}
					transition={transition}
				/>
				<Path
					d="M 2 9.423 L 20 9.423"
					stroke="hsl(0, 0%, 100%)"
					animate={isOpen ? "open" : "closed"}
					initial={false}
					variants={{
						closed: { opacity: 1 },
						open: { opacity: 0 },
					}}
					transition={transition}
				/>
				<Path
					animate={isOpen ? "open" : "closed"}
					stroke="hsl(0, 0%, 100%)"
					initial={false}
					variants={{
						closed: { d: "M 2 16.346 L 20 16.346" },
						open: { d: "M 3 2.5 L 17 16.346" },
					}}
					transition={transition}
				/>
			</svg>
		</Button>
	);
}
