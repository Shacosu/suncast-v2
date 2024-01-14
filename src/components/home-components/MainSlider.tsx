import Slider from "react-slick";

export default function MainSlider() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		slidesToScroll: 1,
		pauseOnHover: true,
		arrows: false,
	};

	return (
		<section>
			<Slider {...settings} >
				<div className="relative">
					<img src="/slide01.webp" alt="slider 1" className="h-96 lg:h-auto object-cover" />
					<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
						<h2 className="text-2xl lg:text-5xl font-bold tracking-wide max-w-4xl">Aplicamos inteligencia artificial a activos de energía renovable</h2>
					</div>
				</div>
				<div className="relative">
					<img src="/slide02.webp" alt="slider 2" className="h-96 lg:h-auto object-cover" />
					<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
					<h2 className="text-2xl lg:text-5xl font-bold tracking-wide max-w-4xl">Nos adecuamos al mercado eléctrico y regulación de cada país</h2>
					</div>
				</div>
				<div className="relative">
					<img src="/slide03.webp" alt="slider 3" className="h-96 lg:h-auto object-cover" />
					<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
					<h2 className="text-2xl lg:text-5xl font-bold tracking-wide max-w-4xl">Trabajamos con datos meteorológicos de origen satelital</h2>
					</div>
				</div>
				<div className="relative">
					<img src="/slide04.webp" alt="slider 4" className="h-96 lg:h-auto object-cover" />
					<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
					<h2 className="text-2xl lg:text-5xl font-bold tracking-wide max-w-4xl">Plataforma web para apoyar en la Operación y Mantenimiento</h2>
					</div>
				</div>
				<div className="relative">
					<img src="/slide05.webp" alt="slider 5" className="h-96 lg:h-auto object-cover" />
					<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
					<h2 className="text-2xl lg:text-5xl font-bold tracking-wide max-w-4xl">Integración remota sin instalar dispositivos en terreno</h2>
					</div>
				</div>
			</Slider>
		</section>
	);
}
