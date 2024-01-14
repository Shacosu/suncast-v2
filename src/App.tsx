import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Services from "./pages/Services.tsx";
import Contact from "./pages/Contact.tsx";
import Blog from "./pages/Blog.tsx";
import Error404 from "./pages/Error404.tsx";
import Layout from "./components/layout/Layout.tsx";

export default function App() {
	const location = useLocation();
	return (
		<AnimatePresence mode="wait">
				<Routes location={location} key={location.pathname}>
					<Route element={<Layout />}>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/services" element={<Services />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/blog" element={<Blog />} />
						<Route element={<Error404 />} />
					</Route>
				</Routes>
		</AnimatePresence>
	);
}
