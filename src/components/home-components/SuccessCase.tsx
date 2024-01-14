export default function SuccessCase() {
	return (
		<section className="mx-auto py-8 w-4/6">
		<div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-8">
			<div className=" rounded p-4 max-w-md space-y-4">
				<iframe
					className="w-full h-64 rounded"
					src="https://www.youtube.com/embed/eOPVAirgxAI?si=uvQtTwT8NiYR4PZO"
					title="YouTube video player"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				></iframe>

				<h3 className="text-2xl font-bold text-center text-orange-500">
					Predicción de Energía Solar
				</h3>
				<p className="text-justify leading-relaxed text-gray-800 opacity-80">
					Central El Pelícano 105 Megawatts La Higuera, Región de
					Coquimbo, Chile
				</p>
				<img src="/client05.webp" alt="client01-proyect" className="mx-auto" />
			</div>
			<div className=" rounded p-4 max-w-md space-y-4">
				<iframe
					className="w-full h-64 rounded"
					src="https://www.youtube.com/embed/GuyFEVeCTtk?si=QrIAaMuP2-kHal4z"
					title="YouTube video player"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				></iframe>
				<h3 className="text-2xl font-bold text-center text-orange-500">
					Predicción de Energía Eólica
				</h3>
				<p className="text-justify leading-relaxed text-gray-800 opacity-80">
					Central Monte Redondo 48 Megawatts Ovalle, Región de Coquimbo,
					Chile
				</p>
				<img src="/client01.webp" alt="client01-proyect" className="mx-auto" />
			</div>
		</div>

	</section>
	)
}
