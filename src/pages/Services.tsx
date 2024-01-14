import Divider from "../components/home-components/Divider";

export default function Services() {
	return (
		<article className="container mx-auto pb-40 p-4 space-y-28"
		>
			<Divider title="Servicios" />
			<section className="grid grid-cols-1 lg:grid-cols-2 place-items-center lg:w-4/6 mx-auto">
				<img src="/services01.webp" alt="services01" />
				<div className="flex flex-col justify-center items-center lg:items-start p-4 lg:p-0 space-y-2">
					<h2 className="text-3xl font-bold text-center text-orange-500 lg:text-left mb-4">
						Servicio de Predicción de Energía Solar y Predicción de Energía
						Eólica
					</h2>
					<p className="lg:max-w-lg text-justify leading-8 text-gray-800 opacity-80">
						A través de una Plataforma SaaS calculamos y enviamos de forma
						automática{" "}
						<strong>
							pronósticos de generación de energía para plantas solar
						</strong>{" "}
						y eólica, en el formato y horario exigido por la autoridad.
					</p>
					<p className="lg:max-w-lg text-justify leading-8 text-gray-800 opacity-80">
						Logramos la más alta precisión con modelos propios de{" "}
						<strong>Inteligencia Artificial</strong> combinando datos históricos
						de meteorología satelital con datos de producción real para{" "}
						<strong>cumplir con las regulaciones de cada mercado</strong> y
						optimizar el rendimiento de los parques.
					</p>
					<p className="lg:max-w-lg text-justify leading-8 text-gray-800 opacity-80">
						Hemos logrado <strong>+50%</strong> de mayor precisión sobre el
						promedio nacional de Chile en centrales fotovoltaicas, y{" "}
						<strong>+30%</strong> de precisión en el caso de centrales eólicas.
					</p>
				</div>
			</section>
			<Divider
				title="Beneficios Predicción de Soiling"
			/>
			<section className="grid grid-cols-1 place-items-center gap-6">
				<div className="flex lg:flex-row flex-col items-center gap-6">
					<img
						src="/services02.webp"
						alt="services02"
						className="h-32 w-32 object-contain"
					/>
					<span className="text-3xl text-indigo-800 font-bold">1.</span>
					<div className="space-y-3">
						<h2 className="text-2xl text-orange-500 font-bold">
							Cumplir con la norma técnica vigente
						</h2>
						<p className="lg:max-w-lg text-justify leading-6 text-gray-800 opacity-80">
							Envío de reportes de pronósticos según el formato del Coordinador
							Eléctrico Nacional de Chile o Centro Nacional de Energía de
							México.
						</p>
					</div>
				</div>
				<div className="flex lg:flex-row flex-col items-center gap-6">
					<img
						src="/services03.webp"
						alt="services02"
						className="h-32 w-32 object-contain"
					/>
					<span className="text-3xl text-indigo-800 font-bold">2.</span>
					<div className="space-y-3">
						<h2 className="text-2xl text-orange-500 font-bold">
							Modelos de alta precisión
						</h2>
						<p className="lg:max-w-lg text-justify leading-6 text-gray-800 opacity-80">
							Uso de algoritmos propios en base a técnicas de Machine Learning
							para ajustar los modelos predictivos a los datos reales de cada
							planta.
						</p>
					</div>
				</div>
				<div className="flex lg:flex-row flex-col items-center gap-6">
					<img
						src="/services04.webp"
						alt="services02"
						className="h-32 w-32 object-contain"
					/>
					<span className="text-3xl text-indigo-800 font-bold">3.</span>
					<div className="space-y-3">
						<h2 className="text-2xl text-orange-500 font-bold">
							Maximizar el rendimiento
						</h2>
						<p className="lg:max-w-lg text-justify leading-6 text-gray-800 opacity-80">
							Permite la programación de mantenimientos preventivos en días de
							baja disponibilidad de recursos y pruebas de rendimiento en días
							de alta disponibilidad.
						</p>
					</div>
				</div>
			</section>
			<section className="grid grid-cols-1 lg:grid-cols-2 place-items-center lg:w-4/6 mx-auto">
				<img src="/services01.webp" alt="services01" />
				<div className="flex flex-col justify-center items-center lg:items-start p-4 lg:p-0 space-y-2">
					<h2 className="text-3xl font-bold text-center text-orange-500 lg:text-left mb-4">
						Servicio de Predicción de Energía Solar y Predicción de Energía
						Eólica
					</h2>
					<p className="lg:max-w-lg text-justify leading-8 text-gray-800 opacity-80">
						A través de una Plataforma SaaS calculamos y enviamos de forma
						automática{" "}
						<strong>
							pronósticos de generación de energía para plantas solar
						</strong>{" "}
						y eólica, en el formato y horario exigido por la autoridad.
					</p>
					<p className="lg:max-w-lg text-justify leading-8 text-gray-800 opacity-80">
						Logramos la más alta precisión con modelos propios de{" "}
						<strong>Inteligencia Artificial</strong> combinando datos históricos
						de meteorología satelital con datos de producción real para{" "}
						<strong>cumplir con las regulaciones de cada mercado</strong> y
						optimizar el rendimiento de los parques.
					</p>
					<p className="lg:max-w-lg text-justify leading-8 text-gray-800 opacity-80">
						Hemos logrado <strong>+50%</strong> de mayor precisión sobre el
						promedio nacional de Chile en centrales fotovoltaicas, y{" "}
						<strong>+30%</strong> de precisión en el caso de centrales eólicas.
					</p>
				</div>
			</section>
			<section className="grid grid-cols-1 place-items-center gap-6">
				<div className="flex lg:flex-row flex-col items-center gap-6">
					<img
						src="/services02.webp"
						alt="services02"
						className="h-32 w-32 object-contain"
					/>
					<span className="text-3xl text-indigo-800 font-bold">1.</span>
					<div className="space-y-3">
						<h2 className="text-2xl text-orange-500 font-bold">
							Modelo de Soiling
						</h2>
						<p className="lg:max-w-lg text-justify leading-6 text-gray-800 opacity-80">
							Mediante técnicas de Machine Learning realizamos un modelo de
							soling con la información histórica de los parques fotovoltaicos
							para analizar su rendimiento.
						</p>
					</div>
				</div>
				<div className="flex lg:flex-row flex-col items-center gap-6">
					<img
						src="/services03.webp"
						alt="services02"
						className="h-32 w-32 object-contain"
					/>
					<span className="text-3xl text-indigo-800 font-bold">2.</span>
					<div className="space-y-3">
						<h2 className="text-2xl text-orange-500 font-bold">
							Cálculo de pérdidas económicas
						</h2>
						<p className="lg:max-w-lg text-justify leading-6 text-gray-800 opacity-80">
							Calcula en términos económicos, cuánto se está dejando de generar
							por el nivel de ensuciamiento actual de los activos.
						</p>
					</div>
				</div>
				<div className="flex lg:flex-row flex-col items-center gap-6">
					<img
						src="/services04.webp"
						alt="services02"
						className="h-32 w-32 object-contain"
					/>
					<span className="text-3xl text-indigo-800 font-bold">3.</span>
					<div className="space-y-3">
						<h2 className="text-2xl text-orange-500 font-bold">
							Calendarización de la siguiente limpieza
						</h2>
						<p className="lg:max-w-lg text-justify leading-6 text-gray-800 opacity-80">
							Combina información satelital meteorológica para la
							calendarización de la fecha óptima de la siguiente limpieza de
							paneles solares.
						</p>
					</div>
				</div>
			</section>
		</article>
	);
}
