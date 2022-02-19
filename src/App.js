import Home from "./pages/Home";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
	return (
		<ParallaxProvider>
			<Home />
		</ParallaxProvider>
	);
}

export default App;
