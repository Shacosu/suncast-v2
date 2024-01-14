export default function Services() {
	return (
		<section className="mx-auto py-8 w-5/6">
			<div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-8">
				<div className="rounded p-4 max-w-lg space-y-4">
					<img src="/service01.webp" alt="servicio 1" className="mx-auto" />
					<h3 className="text-2xl font-bold text-center text-orange-500">
						Predicción de Energía
					</h3>
					<p className="text-justify leading-relaxed text-gray-800 opacity-80">
						Enviamos pronósticos de <strong>energía</strong> con{" "}
						<strong>modelos predictivos</strong> de alta precisión ajustados a
						las características meteorológicas y producción real de parques
						fotovoltaicos y eólicos.
					</p>
				</div>
				<div className="rounded p-4 max-w-lg space-y-4">
					<img src="/service02.webp" alt="servicio 2" className="mx-auto" />
					<h3 className="text-2xl font-bold text-center text-orange-500">
						Predicción de Soiling
					</h3>
					<p className="text-justify leading-relaxed text-gray-800 opacity-80">
						Aplicamos <strong>Inteligencia Artificial</strong> y{" "}
						<strong>Machine Learning</strong> para estimar el nivel de
						ensuciamiento de los paneles fotovoltaicos con el objetivo de
						optimizar la cantidad y fecha de las limpiezas de paneles.
					</p>
				</div>
			</div>
			<div className="flex justify-center mt-8">
				<a
					href="#"
					className="bg-purple-800 hover:bg-purple-700 text-white font-bold p-2 px-4 w-44 text-center rounded tracking-wider text-xl"
				>
					Ver más
				</a>
			</div>
		</section>
	);
}
