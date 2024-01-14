import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
	return (
		<header className="bg-orange-500 flex justify-around text-white h-16 sticky top-0 z-10 items-center bg-opacity-80">
			<Link to="/" rel="noopener noreferrer">
				<img src="/suncast-logo.webp" alt="logo suncast" className="h-16" />
			</Link>
			<nav>
				<ul className="hidden lg:flex items-center gap-4 h-full font-extrabold tracking-wider">
					<li>
						<NavLink
							to="/"
							className={({ isActive, isPending }) =>
								isPending
									? "text-white"
									: isActive
									? "text-orange-200"
									: "transition-all ease-linear delay-100"
							}
						>
							Inicio
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/services"
							className={({ isActive, isPending }) =>
								isPending
									? "text-white"
									: isActive
									? "text-orange-200"
									: "transition-all ease-linear delay-100"
							}
						>
							Servicios
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/about"
							className={({ isActive, isPending }) =>
								isPending
									? "text-white"
									: isActive
									? "text-orange-200"
									: "transition-all ease-linear delay-100"
							}
						>
							Nosotros
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/contact"
							className={({ isActive, isPending }) =>
								isPending
									? "text-white"
									: isActive
									? "text-orange-200"
									: "transition-all ease-linear delay-100"
							}
						>
							Contacto
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/blog"
							className={({ isActive, isPending }) =>
								isPending
									? "text-white"
									: isActive
									? "text-orange-200"
									: "transition-all ease-linear delay-100"
							}
						>
							Blog
						</NavLink>
					</li>
					<li>
						<div className="group">
							<a href="#">ES/EN</a>
							<div className="hidden group-hover:block absolute bg-white text-black rounded shadow-md p-2 w-24 space-y-1">
								<button className="block hover:bg-gray-100 w-full rounded">
									Español
								</button>
								<button className="block hover:bg-gray-100 w-full rounded">
									Ingles
								</button>
							</div>
						</div>
					</li>
					<li>
						<Link
							to="https://hub.suncast.cl/"
							target="_blank"
							rel="noopener"
							className="bg-purple-800 hover:bg-purple-700 p-2 px-4 rounded tracking-wider"
						>
							Inicia sesión
						</Link>
					</li>
				</ul>
				<div className="space-y-2 lg:hidden">
					<div className="w-8 h-0.5 bg-gray-100"></div>
					<div className="w-8 h-0.5 bg-gray-100"></div>
					<div className="w-8 h-0.5 bg-gray-100"></div>
				</div>
			</nav>
		</header>
	);
}
