import { useEffect, useState } from "react";
import logo from "../assets/images/logoScroll.png";
import tw from "twin.macro";

const Button = tw.button`
    transition-opacity
    duration-500
    hover:opacity-100
`;

const classNames = (...classes) => {
	return classes.filter(Boolean).join(" ");
};

const ScrollToTop = () => {
	const [opacity, setOpacity] = useState(false);
	const [isHidden, setHidden] = useState(true);

	const toggleVisibility = () => {
		if (window.pageYOffset > 200) {
			setHidden(false);
		} else {
			setHidden(true);
		}
		if (window.pageYOffset > 700) {
			setOpacity(true);
		} else {
			setOpacity(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		window.addEventListener("scroll", toggleVisibility);

		return () => {
			window.removeEventListener("scroll", toggleVisibility);
		};
	}, []);

	return (
		<div className="fixed top-4 left-4 z-40">
			<Button
				type="button"
				onClick={scrollToTop}
				className={[
					classNames(opacity ? "opacity-80" : "opacity-0"),
					classNames(isHidden ? "hidden" : ""),
				].join(" ")}
			>
				<img
					className="w-[3rem] md:w-[5rem]"
					src={logo}
					alt="Lisboa em Tango Logo"
				/>
			</Button>
		</div>
	);
};

export default ScrollToTop;
