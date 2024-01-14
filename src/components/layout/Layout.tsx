import { useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
	const location = useLocation();

	useEffect(() => window.scrollTo({
		top: 0,
		behavior: "smooth"
	}), [location.pathname]);
	return (
		<div className="flex flex-col justify-between min-h-screen">
			<Navbar />
			<motion.main
				className="min-h-screen"
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: -100 }}
				transition={{ duration: 0.5, ease: "easeOut" }}
			>
				<Outlet />
			</motion.main>
			<Link
				to="/contact"
				className="fixed bottom-4 right-4 bg-orange-500 text-white font-bold py-2 px-4 rounded-br-lg rounded-tl-lg"
			>
				Quiero saber más
			</Link>
			<Footer />
		</div>
	);
}
